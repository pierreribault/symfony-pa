(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/map.js */ "./assets/js/map.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)




/***/ }),

/***/ "./assets/js/map.js":
/*!**************************!*\
  !*** ./assets/js/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);






var activitiesList = document.getElementById('activity-list');
var map;
var markers = [];
var waypoints = [];
var waypointsSaved = [];
var rayon;
var city;
var category;
var fromLatitude;
var fromLongitude;
var toLatitude;
var toLongitude;
var departure;
var arrival;

if (activitiesList) {
  // Make a request for a user with a given ID
  departure = document.getElementById('map-container').getAttribute('data-departure');
  arrival = document.getElementById('map-container').getAttribute('data-arrival');
  rayon = document.getElementById('rayon').value;
  document.getElementById('city').addEventListener('change', function (event) {
    city = event.target.value;
    removeActivitiesNotSelected();
  });
  document.getElementById('rayon').addEventListener('change', function (event) {
    rayon = event.target.value;
    removeActivitiesNotSelected();
  });
  document.getElementById('category').addEventListener('change', function (event) {
    category = event.target.value;
    removeActivitiesNotSelected();
  });
  document.getElementById('generator-submit').addEventListener('click', function (event) {
    submitGenerator();
  });
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: departure
  }).then(function (response) {
    fromLatitude = response.results[0].geometry.location.lat();
    fromLongitude = response.results[0].geometry.location.lng();
    geocoder.geocode({
      address: arrival
    }).then(function (response) {
      toLatitude = response.results[0].geometry.location.lat();
      toLongitude = response.results[0].geometry.location.lng();
      loadActivities();
    });
  });
}

var loadActivities = function loadActivities() {
  axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/activities/', qs__WEBPACK_IMPORTED_MODULE_5___default().stringify({
    fromLongitude: fromLongitude,
    fromLatitude: fromLatitude,
    toLongitude: toLongitude,
    toLatitude: toLatitude,
    rayon: rayon,
    city: city,
    category: category
  })).then(function (response) {
    initMap();

    for (var activity in response.data) {
      createActivity(response.data[activity]);
    }
  })["catch"](function (error) {
    // handle error
    console.log(error);
  });
};

var submitGenerator = function submitGenerator() {
  console.log(waypointsSaved);
  console.log(departure, arrival);
};

var createActivity = function createActivity(data) {
  if (null == document.getElementById("listing-".concat(data.id))) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/activities/".concat(data.id)).then(function (response) {
      activitiesList.insertAdjacentHTML('beforeend', response.data.html);
      document.getElementById('btn-' + data.id).addEventListener('click', function (event) {
        var index = event.target.getAttribute('data-index');

        if (event.target.innerHTML.trim() === "+") {
          document.getElementById("listing-".concat(index)).classList.remove('listing');
          waypointsSaved.push(index);
          removeMarker(event);
          addWaypoint(event);
        } else {
          document.getElementById("listing-".concat(index)).classList.add('listing');
          waypointsSaved.splice(waypointsSaved.indexOf("".concat(index)), 1);
          restoreMarker(event);
          removeWaypoint(event);
        }

        initMap();
      });
      addMarker({
        id: data.id,
        position: {
          lat: response.data.data.latitude,
          lng: response.data.data.longitude
        },
        icon: response.data.data.marker,
        map: map
      });
    });
  }
};

var initMap = function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 48.866667,
      lng: 2.33
    }
  });
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);

  for (var i = 0; i < markers.length; i++) {
    if (markers[i] != null) {
      markers[i].setMap(map);
    }
  }
};

var createMarker = function createMarker(data) {
  return new google.maps.Marker(data);
};

var addMarker = function addMarker(location) {
  var marker = createMarker(location);
  markers[location.id] = marker;
};

var restoreMarker = function restoreMarker(event) {
  var btn = document.getElementById(event.target.id);
  btn.innerHTML = '+';
  btn.classList.toggle('bg-green-500');
  btn.classList.toggle('bg-red-500');
  markers[event.target.getAttribute('data-index')] = createMarker({
    position: {
      lat: parseFloat(event.target.getAttribute('data-latitude')),
      lng: parseFloat(event.target.getAttribute('data-longitude'))
    },
    icon: event.target.getAttribute('data-marker'),
    map: map
  });
};

var removeMarker = function removeMarker(event) {
  var btn = document.getElementById(event.target.id);
  btn.innerHTML = '-';
  btn.classList.toggle('bg-green-500');
  btn.classList.toggle('bg-red-500');
  markers[event.target.getAttribute('data-index')] = null;
};

var addWaypoint = function addWaypoint(event) {
  waypoints.push({
    location: {
      lat: parseFloat(event.target.getAttribute('data-latitude')),
      lng: parseFloat(event.target.getAttribute('data-longitude'))
    }
  });
};

var removeWaypoint = function removeWaypoint(event) {
  var lat = parseFloat(event.target.getAttribute('data-latitude'));
  var lng = parseFloat(event.target.getAttribute('data-longitude'));

  for (var key in waypoints) {
    if (waypoints[key].location.lat == lat && waypoints[key].location.lng == lng) {
      waypoints.splice(key, 1);
      break;
    }
  }
};

var removeActivitiesNotSelected = function removeActivitiesNotSelected() {
  var activities = document.getElementsByClassName('listing');

  while (activities[0]) {
    markers[activities[0].getAttribute('data-index')] = null;
    activities[0].parentNode.removeChild(activities[0]);
  }

  loadActivities();
};

window.calculateAndDisplayRoute = function (directionsService, directionsRenderer) {
  directionsService.route({
    origin: {
      query: document.getElementById('map-container').getAttribute('data-departure')
    },
    waypoints: waypoints,
    optimizeWaypoints: true,
    destination: {
      query: document.getElementById('map-container').getAttribute('data-arrival')
    },
    travelMode: google.maps.TravelMode.DRIVING
  }, function (response, status) {
    if (status === "OK") {
      directionsRenderer.setDirections(response);
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
};

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?dd17":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
0,[["./assets/app.js","runtime","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_to-object_js--642f45","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_index-of_js-node_mo-2de5d8"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwuL3V0aWwuaW5zcGVjdCJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJtYXJrZXJzIiwid2F5cG9pbnRzIiwid2F5cG9pbnRzU2F2ZWQiLCJyYXlvbiIsImNpdHkiLCJjYXRlZ29yeSIsImZyb21MYXRpdHVkZSIsImZyb21Mb25naXR1ZGUiLCJ0b0xhdGl0dWRlIiwidG9Mb25naXR1ZGUiLCJkZXBhcnR1cmUiLCJhcnJpdmFsIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQiLCJzdWJtaXRHZW5lcmF0b3IiLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJhZGRyZXNzIiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsb2FkQWN0aXZpdGllcyIsImF4aW9zIiwicXMiLCJpbml0TWFwIiwiYWN0aXZpdHkiLCJkYXRhIiwiY3JlYXRlQWN0aXZpdHkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImluc2VydEFkamFjZW50SFRNTCIsImh0bWwiLCJpbmRleCIsImlubmVySFRNTCIsInRyaW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwdXNoIiwicmVtb3ZlTWFya2VyIiwiYWRkV2F5cG9pbnQiLCJhZGQiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVzdG9yZU1hcmtlciIsInJlbW92ZVdheXBvaW50IiwiYWRkTWFya2VyIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImljb24iLCJtYXJrZXIiLCJkaXJlY3Rpb25zU2VydmljZSIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwiZGlyZWN0aW9uc1JlbmRlcmVyIiwiRGlyZWN0aW9uc1JlbmRlcmVyIiwiTWFwIiwiY2VudGVyIiwic2V0TWFwIiwiY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlIiwiaSIsImxlbmd0aCIsImNyZWF0ZU1hcmtlciIsIk1hcmtlciIsImJ0biIsInRvZ2dsZSIsInBhcnNlRmxvYXQiLCJrZXkiLCJhY3Rpdml0aWVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyIsInJvdXRlIiwib3JpZ2luIiwicXVlcnkiLCJvcHRpbWl6ZVdheXBvaW50cyIsImRlc3RpbmF0aW9uIiwidHJhdmVsTW9kZSIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwic3RhdHVzIiwic2V0RGlyZWN0aW9ucyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFDQSxJQUFJQyxHQUFKO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxJQUFJQyxLQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLFVBQUo7QUFDQSxJQUFJQyxXQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLE9BQUo7O0FBR0EsSUFBSWYsY0FBSixFQUFvQjtBQUNoQjtBQUNBYyxXQUFTLEdBQUdiLFFBQVEsQ0FBQ0MsY0FB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QkMsV0FBekIsQ0FBcUNILFVBQVUsQ0FBQyxDQUFELENBQS9DO0FBQ0g7O0FBRURoRCxnQkFBYztBQUNqQixDQVREOztBQVdBb0QsTUFBTSxDQUFDYix3QkFBUCxHQUFrQyxVQUFDUCxpQkFBRCxFQUFvQkUsa0JBQXBCLEVBQTJDO0FBQ3pFRixtQkFBaUIsQ0FBQ3FCLEtBQWxCLENBQ0k7QUFDSUMsVUFBTSxFQUFFO0FBQ0pDLFdBQUssRUFBRTFGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q2MsWUFBekMsQ0FBc0QsZ0JBQXREO0FBREgsS0FEWjtBQUtJWCxhQUFTLEVBQUVBLFNBTGY7QUFPSXVGLHFCQUFpQixFQUFFLElBUHZCO0FBU0lDLGVBQVcsRUFBRTtBQUNURixXQUFLLEVBQUUxRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNjLFlBQXpDLENBQXNELGNBQXREO0FBREUsS0FUakI7QUFhSThFLGNBQVUsRUFBRXRFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZc0UsVUFBWixDQUF1QkM7QUFidkMsR0FESixFQWdCSSxVQUFDbEUsUUFBRCxFQUFXbUUsTUFBWCxFQUFzQjtBQUNsQixRQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQjNCLHdCQUFrQixDQUFDNEIsYUFBbkIsQ0FBaUNwRSxRQUFqQztBQUNILEtBRkQsTUFFTztBQUNIMEQsWUFBTSxDQUFDVyxLQUFQLENBQWEsc0NBQXNDRixNQUFuRDtBQUNIO0FBQ0osR0F0Qkw7QUF3QkgsQ0F6QkQsQzs7Ozs7Ozs7Ozs7O0FDOU1BOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJ2pxdWVyeSdcblxuaW1wb3J0ICcuLi9hc3NldHMvanMvbWFwLmpzJ1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tIFwicXNcIjtcblxuY29uc3QgYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktbGlzdCcpO1xubGV0IG1hcFxubGV0IG1hcmtlcnMgPSBbXVxubGV0IHdheXBvaW50cyA9IFtdXG5sZXQgd2F5cG9pbnRzU2F2ZWQgPSBbXVxubGV0IHJheW9uXG5sZXQgY2l0eVxubGV0IGNhdGVnb3J5XG5sZXQgZnJvbUxhdGl0dWRlXG5sZXQgZnJvbUxvbmdpdHVkZVxubGV0IHRvTGF0aXR1ZGVcbmxldCB0b0xvbmdpdHVkZVxubGV0IGRlcGFydHVyZVxubGV0IGFycml2YWxcblxuXG5pZiAoYWN0aXZpdGllc0xpc3QpIHtcbiAgICAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxuICAgIGRlcGFydHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpXG4gICAgYXJyaXZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWFycml2YWwnKVxuICAgIHJheW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykudmFsdWVcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNpdHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJheW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCgpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjYXRlZ29yeSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdG9yLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN1Ym1pdEdlbmVyYXRvcigpXG4gICAgfSlcblxuICAgIGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGRlcGFydHVyZX0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgZnJvbUxhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgZnJvbUxvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGFycml2YWx9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0b0xhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgICAgICAgICB0b0xvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcblxuICAgICAgICAgICAgICAgICAgICBsb2FkQWN0aXZpdGllcygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn1cblxuIGNvbnN0IGxvYWRBY3Rpdml0aWVzID0gKCkgPT4ge1xuICAgICBheGlvcy5wb3N0KCcvYXBpL2FjdGl2aXRpZXMvJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgIGZyb21Mb25naXR1ZGU6IGZyb21Mb25naXR1ZGUsXG4gICAgICAgICBmcm9tTGF0aXR1ZGU6IGZyb21MYXRpdHVkZSxcbiAgICAgICAgIHRvTG9uZ2l0dWRlOiB0b0xvbmdpdHVkZSxcbiAgICAgICAgIHRvTGF0aXR1ZGU6IHRvTGF0aXR1ZGUsXG4gICAgICAgICByYXlvbjogcmF5b24sXG4gICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XG4gICAgIH0pKVxuICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICAgICAgIGZvciAobGV0IGFjdGl2aXR5IGluIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aXZpdHkocmVzcG9uc2UuZGF0YVthY3Rpdml0eV0pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSlcbiAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICB9KVxuIH1cblxuY29uc3Qgc3VibWl0R2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdheXBvaW50c1NhdmVkKVxuICAgIGNvbnNvbGUubG9nKGRlcGFydHVyZSwgYXJyaXZhbClcbn1cblxuY29uc3QgY3JlYXRlQWN0aXZpdHkgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChudWxsID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGRhdGEuaWQgfWApKSB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9hY3Rpdml0aWVzLyR7IGRhdGEuaWQgfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlc3BvbnNlLmRhdGEuaHRtbCk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLScgKyBkYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwudHJpbSgpID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGluZGV4IH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0aW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXlwb2ludHNTYXZlZC5wdXNoKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU1hcmtlcihldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRXYXlwb2ludChldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgaW5kZXggfWApLmNsYXNzTGlzdC5hZGQoJ2xpc3RpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdheXBvaW50c1NhdmVkLnNwbGljZSh3YXlwb2ludHNTYXZlZC5pbmRleE9mKGAke2luZGV4fWApLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmVNYXJrZXIoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlV2F5cG9pbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRNYXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgYWRkTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiByZXNwb25zZS5kYXRhLmRhdGEubGF0aXR1ZGUsIGxuZzogcmVzcG9uc2UuZGF0YS5kYXRhLmxvbmdpdHVkZX0sXG4gICAgICAgICAgICAgICAgICAgIGljb246IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXJrZXIsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBpbml0TWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgY29uc3QgZGlyZWN0aW9uc1JlbmRlcmVyID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNDguODY2NjY3LCBsbmc6IDIuMzMgfSxcbiAgICB9KTtcbiAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0TWFwKG1hcCk7XG5cbiAgICBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hcmtlcnNbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRNYXAobWFwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTWFya2VyID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihkYXRhKTtcbn1cblxuY29uc3QgYWRkTWFya2VyID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gY3JlYXRlTWFya2VyKGxvY2F0aW9uKVxuXG4gICAgbWFya2Vyc1tsb2NhdGlvbi5pZF0gPSBtYXJrZXI7XG59XG5cbmNvbnN0IHJlc3RvcmVNYXJrZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9ICcrJ1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1ncmVlbi01MDAnKVxuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1yZWQtNTAwJylcblxuICAgIG1hcmtlcnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IGNyZWF0ZU1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvbmdpdHVkZScpKVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcmtlcicpLFxuICAgICAgICBtYXA6IG1hcFxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZU1hcmtlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCk7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gJy0nXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLWdyZWVuLTUwMCcpXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLXJlZC01MDAnKVxuXG4gICAgbWFya2Vyc1tldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldID0gbnVsbFxufVxuXG5jb25zdCBhZGRXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJykpLFxuICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJykpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKVxuICAgIGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdheXBvaW50cykge1xuICAgICAgICBpZiAod2F5cG9pbnRzW2tleV0ubG9jYXRpb24ubGF0ID09IGxhdCAmJiB3YXlwb2ludHNba2V5XS5sb2NhdGlvbi5sbmcgPT0gbG5nKSB7XG4gICAgICAgICAgICB3YXlwb2ludHMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2aXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0aW5nJylcblxuICAgIHdoaWxlKGFjdGl2aXRpZXNbMF0pIHtcbiAgICAgICAgbWFya2Vyc1thY3Rpdml0aWVzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IG51bGxcbiAgICAgICAgYWN0aXZpdGllc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2aXRpZXNbMF0pXG4gICAgfVxuXG4gICAgbG9hZEFjdGl2aXRpZXMoKVxufVxuXG53aW5kb3cuY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgb3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXG5cbiAgICAgICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnJpdmFsJyksXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkRpcmVjdGlvbnMgcmVxdWVzdCBmYWlsZWQgZHVlIHRvIFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9