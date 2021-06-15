import axios from 'axios';
import qs from "qs";

const activitiesList = document.getElementById('activity-list');
let map
let markers = []
let waypoints = []
let waypointsSaved = []
let rayon
let city
let category
let fromLatitude
let fromLongitude
let toLatitude
let toLongitude
let departure
let arrival


if (activitiesList) {
    // Make a request for a user with a given ID
    departure = document.getElementById('map-container').getAttribute('data-departure')
    arrival = document.getElementById('map-container').getAttribute('data-arrival')
    rayon = document.getElementById('rayon').value

    document.getElementById('city').addEventListener('change', (event) => {
        city = event.target.value
        removeActivitiesNotSelected()
    })

    document.getElementById('rayon').addEventListener('change', (event) => {
        rayon = event.target.value
        removeActivitiesNotSelected()
    })

    document.getElementById('category').addEventListener('change', (event) => {
        category = event.target.value
        removeActivitiesNotSelected()
    })

    document.getElementById('generator-submit').addEventListener('click', (event) => {
        submitGenerator()
    })

    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: departure})
        .then(function (response) {
            fromLatitude = response.results[0].geometry.location.lat()
            fromLongitude = response.results[0].geometry.location.lng()
            geocoder.geocode({address: arrival})
                .then(function (response) {
                    toLatitude = response.results[0].geometry.location.lat()
                    toLongitude = response.results[0].geometry.location.lng()

                    loadActivities()
                })
        })
}

 const loadActivities = () => {
     const restore = document.getElementsByClassName('btn-listing')

     if (restore) {
        for (const activity of restore) {
            let index = activity.getAttribute('data-index')

            activityEvent(index)

            activity.click()
        }
     }

     axios.post('/api/activities/', qs.stringify({
         fromLongitude: fromLongitude,
         fromLatitude: fromLatitude,
         toLongitude: toLongitude,
         toLatitude: toLatitude,
         rayon: rayon,
         city: city,
         category: category
     }))
         .then(function (response) {
             initMap();
             for (let activity in response.data) {
                 createActivity(response.data[activity])
             }
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
 }

const submitGenerator = () => {
    console.log(waypointsSaved)
    console.log(departure, arrival)

    axios.post(`/api/roadtrip/`, qs.stringify({
       departure: departure,
       arrival: arrival,
       activities: waypointsSaved,
    })).then(function (response) {
        window.location.href = `/roadtrip/${response.data.ulid}/details`
    })
}

const createActivity = (data) => {
    if (null == document.getElementById(`listing-${ data.id }`)) {
        axios.get(`/api/activities/${ data.id }`)
            .then(function (response) {
                activitiesList.insertAdjacentHTML('beforeend', response.data.html);

                activityEvent(data.id)

                addMarker({
                    id: data.id,
                    position: {lat: response.data.data.latitude, lng: response.data.data.longitude},
                    icon: response.data.data.marker,
                    map: map
                })
            })
    }
}

const activityEvent = (index) => {
    document.getElementById('btn-' + index)
        .addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-index')
            if (event.target.innerHTML.trim() === "+") {
                document.getElementById(`listing-${ index }`).classList.remove('listing')
                waypointsSaved.push(index)
                removeMarker(event)
                addWaypoint(event)
            } else {
                document.getElementById(`listing-${ index }`).classList.add('listing')
                waypointsSaved.splice(waypointsSaved.indexOf(`${index}`), 1)
                restoreMarker(event)
                removeWaypoint(event)
            }

            initMap()
        })
}

const initMap = () => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.866667, lng: 2.33 },
    });
    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);

    for (let i = 0; i < markers.length; i++) {
        if (markers[i] != null) {
            markers[i].setMap(map);
        }
    }
}

const createMarker = (data) => {
    return new google.maps.Marker(data);
}

const addMarker = (location) => {
    const marker = createMarker(location)

    markers[location.id] = marker;
}

const restoreMarker = (event) => {
    const btn = document.getElementById(event.target.id);

    btn.innerHTML = '+'
    btn.classList.toggle('bg-green-500')
    btn.classList.toggle('bg-red-500')

    markers[event.target.getAttribute('data-index')] = createMarker({
        position: {
            lat: parseFloat(event.target.getAttribute('data-latitude')),
            lng: parseFloat(event.target.getAttribute('data-longitude'))
        },
        icon: event.target.getAttribute('data-marker'),
        map: map
    })
}

const removeMarker = (event) => {
    const btn = document.getElementById(event.target.id);

    btn.innerHTML = '-'
    btn.classList.toggle('bg-green-500')
    btn.classList.toggle('bg-red-500')

    markers[event.target.getAttribute('data-index')] = null
}

const addWaypoint = (event) => {
    waypoints.push({
        location: {
            lat: parseFloat(event.target.getAttribute('data-latitude')),
            lng: parseFloat(event.target.getAttribute('data-longitude'))
        }
    })
}

const removeWaypoint = (event) => {
    const lat = parseFloat(event.target.getAttribute('data-latitude'))
    const lng = parseFloat(event.target.getAttribute('data-longitude'))

    for (const key in waypoints) {
        if (waypoints[key].location.lat == lat && waypoints[key].location.lng == lng) {
            waypoints.splice(key, 1);
            break
        }
    }
}

const removeActivitiesNotSelected = () => {
    let activities = document.getElementsByClassName('listing')

    while(activities[0]) {
        markers[activities[0].getAttribute('data-index')] = null
        activities[0].parentNode.removeChild(activities[0])
    }

    loadActivities()
}

window.calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
    directionsService.route(
        {
            origin: {
                query: document.getElementById('map-container').getAttribute('data-departure'),
            },

            waypoints: waypoints,

            optimizeWaypoints: true,

            destination: {
                query: document.getElementById('map-container').getAttribute('data-arrival'),
            },

            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}
