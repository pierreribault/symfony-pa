import axios from 'axios';

const activitiesList = document.getElementById('activities');
let map
let markers = []
let waypoints = []

if (activitiesList) {
    // Make a request for a user with a given ID
    axios.get('/api/activities')
    .then(function (response) {
        initMap();
        for (let activity in response.data) {
            createActivity(response.data[activity], activity)
        }

        document.getElementsByClassName('addMarker').forEach(element => {
            element.addEventListener('click', (event) => {
                if (event.target.innerHTML === "+") {
                    removeMarker(event)
                    addWaypoint(event)
                } else {
                    restoreMarker(event)
                    removeWaypoint(event)
                }

                initMap()
            })
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

const createActivity = (data, index) => {
    const activity = document.createElement("div")
    const activityDetails = document.createElement("div")
    const activityName = document.createElement("p")
    const activityAddress = document.createElement("p")
    const activityPhone = document.createElement("p")
    const activityButton = document.createElement("button")
    
    activity.className = "border-b border-gray-200 py-4 flex justify-between items-center"
    activityButton.className = "addMarker p-2 rounded-full bg-green-500 w-10 h-10 text-white focus:outline-none"
    activityButton.dataset.index = index
    activityButton.id = 'btn-' + index
    activityButton.dataset.longitude = data.longitude
    activityButton.dataset.latitude = data.latitude
    activityButton.dataset.marker = data.marker,
    
    activityName.appendChild(document.createTextNode(data.name))
    activityAddress.appendChild(document.createTextNode(data.address))
    activityPhone.appendChild(document.createTextNode(data.phone))
    activityButton.appendChild(document.createTextNode('+'))
    
    activityDetails.appendChild(activityName)
    activityDetails.appendChild(activityAddress)
    activityDetails.appendChild(activityPhone)
    activity.appendChild(activityDetails)
    activity.appendChild(activityButton)
    activitiesList.appendChild(activity)

    addMarker({
        position: { lat: data.latitude, lng: data.longitude },
        icon: data.marker,
        map: map
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

    markers.push(marker);
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