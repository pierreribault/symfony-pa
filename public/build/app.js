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





function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
  var restore = document.getElementsByClassName('btn-listing');

  if (restore) {
    var _iterator = _createForOfIteratorHelper(restore),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var activity = _step.value;
        var index = activity.getAttribute('data-index');
        activityEvent(index);
        activity.click();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

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

    for (var _activity in response.data) {
      createActivity(response.data[_activity]);
    }
  })["catch"](function (error) {
    // handle error
    console.log(error);
  });
};

var submitGenerator = function submitGenerator() {
  console.log(waypointsSaved);
  console.log(departure, arrival);
  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/roadtrip/", qs__WEBPACK_IMPORTED_MODULE_5___default().stringify({
    departure: departure,
    arrival: arrival,
    activities: waypointsSaved
  }));
};

var createActivity = function createActivity(data) {
  if (null == document.getElementById("listing-".concat(data.id))) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/activities/".concat(data.id)).then(function (response) {
      activitiesList.insertAdjacentHTML('beforeend', response.data.html);
      activityEvent(data.id);
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

var activityEvent = function activityEvent(index) {
  document.getElementById('btn-' + index).addEventListener('click', function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwuL3V0aWwuaW5zcGVjdCJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJtYXJrZXJzIiwid2F5cG9pbnRzIiwid2F5cG9pbnRzU2F2ZWQiLCJyYXlvbiIsImNpdHkiLCJjYXRlZ29yeSIsImZyb21MYXRpdHVkZSIsImZyb21Mb25naXR1ZGUiLCJ0b0xhdGl0dWRlIiwidG9Mb25naXR1ZGUiLCJkZXBhcnR1cmUiLCJhcnJpdmFsIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQiLCJzdWJtaXRHZW5lcmF0b3IiLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJhZGRyZXNzIiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsb2FkQWN0aXZpdGllcyIsInJlc3RvcmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWN0aXZpdHkiLCJpbmRleCIsImFjdGl2aXR5RXZlbnQiLCJjbGljayIsImF4aW9zIiwicXMiLCJpbml0TWFwIiwiZGF0YSIsImNyZWF0ZUFjdGl2aXR5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZpdGllcyIsImlkIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaHRtbCIsImFkZE1hcmtlciIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpY29uIiwibWFya2VyIiwiaW5uZXJIVE1MIiwidHJpbSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInB1c2giLCJyZW1vdmVNYXJrZXIiLCJhZGRXYXlwb2ludCIsImFkZCIsInNwbGljZSIsImluZGV4T2YiLCJyZXN0b3JlTWFya2VyIiwicmVtb3ZlV2F5cG9pbnQiLCJkaXJlY3Rpb25zU2VydmljZSIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwiZGlyZWN0aW9uc1JlbmRlcmVyIiwiRGlyZWN0aW9uc1JlbmRlcmVyIiwiTWFwIiwiY2VudGVyIiwic2V0TWFwIiwiY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlIiwiaSIsImxlbmd0aCIsImNyZWF0ZU1hcmtlciIsIk1hcmtlciIsImJ0biIsInRvZ2dsZSIsInBhcnNlRmxvYXQiLCJrZXkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3aW5kb3ciLCJyb3V0ZSIsIm9yaWdpbiIsInF1ZXJ5Iiwib3B0aW1pemVXYXlwb2ludHMiLCJkZXN0aW5hdGlvbiIsInRyYXZlbE1vZGUiLCJUcmF2ZWxNb2RlIiwiRFJJVklORyIsInN0YXR1cyIsInNldERpcmVjdGlvbnMiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF2QjtBQUNBLElBQUlDLEdBQUo7QUFDQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQUlDLEtBQUo7QUFDQSxJQUFJQyxJQUFKO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsVUFBSjtBQUNBLElBQUlDLFdBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsT0FBSjs7QUFHQSxJQUFJZixjQUFKLEVB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d0IsZUFBeEIsRUFBeUNjLFlBQXpDLENBQXNELGNBQXREO0FBREUsS0FUakI7QUFhSWlGLGNBQVUsRUFBRXpFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZeUUsVUFBWixDQUF1QkM7QUFidkMsR0FESixFQWdCSSxVQUFDckUsUUFBRCxFQUFXc0UsTUFBWCxFQUFzQjtBQUNsQixRQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQnpCLHdCQUFrQixDQUFDMEIsYUFBbkIsQ0FBaUN2RSxRQUFqQztBQUNILEtBRkQsTUFFTztBQUNINkQsWUFBTSxDQUFDVyxLQUFQLENBQWEsc0NBQXNDRixNQUFuRDtBQUNIO0FBQ0osR0F0Qkw7QUF3QkgsQ0F6QkQsQzs7Ozs7Ozs7Ozs7O0FDcE9BOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJ2pxdWVyeSdcblxuaW1wb3J0ICcuLi9hc3NldHMvanMvbWFwLmpzJ1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tIFwicXNcIjtcblxuY29uc3QgYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktbGlzdCcpO1xubGV0IG1hcFxubGV0IG1hcmtlcnMgPSBbXVxubGV0IHdheXBvaW50cyA9IFtdXG5sZXQgd2F5cG9pbnRzU2F2ZWQgPSBbXVxubGV0IHJheW9uXG5sZXQgY2l0eVxubGV0IGNhdGVnb3J5XG5sZXQgZnJvbUxhdGl0dWRlXG5sZXQgZnJvbUxvbmdpdHVkZVxubGV0IHRvTGF0aXR1ZGVcbmxldCB0b0xvbmdpdHVkZVxubGV0IGRlcGFydHVyZVxubGV0IGFycml2YWxcblxuXG5pZiAoYWN0aXZpdGllc0xpc3QpIHtcbiAgICAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxuICAgIGRlcGFydHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpXG4gICAgYXJyaXZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWFycml2YWwnKVxuICAgIHJheW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykudmFsdWVcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNpdHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJheW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCgpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjYXRlZ29yeSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdG9yLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN1Ym1pdEdlbmVyYXRvcigpXG4gICAgfSlcblxuICAgIGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGRlcGFydHVyZX0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgZnJvbUxhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgZnJvbUxvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGFycml2YWx9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0b0xhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgICAgICAgICB0b0xvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcblxuICAgICAgICAgICAgICAgICAgICBsb2FkQWN0aXZpdGllcygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn1cblxuIGNvbnN0IGxvYWRBY3Rpdml0aWVzID0gKCkgPT4ge1xuICAgICBjb25zdCByZXN0b3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLWxpc3RpbmcnKVxuXG4gICAgIGlmIChyZXN0b3JlKSB7XG4gICAgICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgcmVzdG9yZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYWN0aXZpdHkuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JylcblxuICAgICAgICAgICAgYWN0aXZpdHlFdmVudChpbmRleClcblxuICAgICAgICAgICAgYWN0aXZpdHkuY2xpY2soKVxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBheGlvcy5wb3N0KCcvYXBpL2FjdGl2aXRpZXMvJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgIGZyb21Mb25naXR1ZGU6IGZyb21Mb25naXR1ZGUsXG4gICAgICAgICBmcm9tTGF0aXR1ZGU6IGZyb21MYXRpdHVkZSxcbiAgICAgICAgIHRvTG9uZ2l0dWRlOiB0b0xvbmdpdHVkZSxcbiAgICAgICAgIHRvTGF0aXR1ZGU6IHRvTGF0aXR1ZGUsXG4gICAgICAgICByYXlvbjogcmF5b24sXG4gICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XG4gICAgIH0pKVxuICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICAgICAgIGZvciAobGV0IGFjdGl2aXR5IGluIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aXZpdHkocmVzcG9uc2UuZGF0YVthY3Rpdml0eV0pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSlcbiAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICB9KVxuIH1cblxuY29uc3Qgc3VibWl0R2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdheXBvaW50c1NhdmVkKVxuICAgIGNvbnNvbGUubG9nKGRlcGFydHVyZSwgYXJyaXZhbClcblxuICAgIGF4aW9zLnBvc3QoYC9hcGkvcm9hZHRyaXAvYCwgcXMuc3RyaW5naWZ5KHtcbiAgICAgICBkZXBhcnR1cmU6IGRlcGFydHVyZSxcbiAgICAgICBhcnJpdmFsOiBhcnJpdmFsLFxuICAgICAgIGFjdGl2aXRpZXM6IHdheXBvaW50c1NhdmVkLFxuICAgIH0pKVxufVxuXG5jb25zdCBjcmVhdGVBY3Rpdml0eSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKG51bGwgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgZGF0YS5pZCB9YCkpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2FjdGl2aXRpZXMvJHsgZGF0YS5pZCB9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVzcG9uc2UuZGF0YS5odG1sKTtcblxuICAgICAgICAgICAgICAgIGFjdGl2aXR5RXZlbnQoZGF0YS5pZClcblxuICAgICAgICAgICAgICAgIGFkZE1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge2xhdDogcmVzcG9uc2UuZGF0YS5kYXRhLmxhdGl0dWRlLCBsbmc6IHJlc3BvbnNlLmRhdGEuZGF0YS5sb25naXR1ZGV9LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiByZXNwb25zZS5kYXRhLmRhdGEubWFya2VyLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgYWN0aXZpdHlFdmVudCA9IChpbmRleCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tJyArIGluZGV4KVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwudHJpbSgpID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGluZGV4IH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0aW5nJylcbiAgICAgICAgICAgICAgICB3YXlwb2ludHNTYXZlZC5wdXNoKGluZGV4KVxuICAgICAgICAgICAgICAgIHJlbW92ZU1hcmtlcihldmVudClcbiAgICAgICAgICAgICAgICBhZGRXYXlwb2ludChldmVudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgaW5kZXggfWApLmNsYXNzTGlzdC5hZGQoJ2xpc3RpbmcnKVxuICAgICAgICAgICAgICAgIHdheXBvaW50c1NhdmVkLnNwbGljZSh3YXlwb2ludHNTYXZlZC5pbmRleE9mKGAke2luZGV4fWApLCAxKVxuICAgICAgICAgICAgICAgIHJlc3RvcmVNYXJrZXIoZXZlbnQpXG4gICAgICAgICAgICAgICAgcmVtb3ZlV2F5cG9pbnQoZXZlbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRNYXAoKVxuICAgICAgICB9KVxufVxuXG5jb25zdCBpbml0TWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgY29uc3QgZGlyZWN0aW9uc1JlbmRlcmVyID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNDguODY2NjY3LCBsbmc6IDIuMzMgfSxcbiAgICB9KTtcbiAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0TWFwKG1hcCk7XG5cbiAgICBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hcmtlcnNbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRNYXAobWFwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTWFya2VyID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihkYXRhKTtcbn1cblxuY29uc3QgYWRkTWFya2VyID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gY3JlYXRlTWFya2VyKGxvY2F0aW9uKVxuXG4gICAgbWFya2Vyc1tsb2NhdGlvbi5pZF0gPSBtYXJrZXI7XG59XG5cbmNvbnN0IHJlc3RvcmVNYXJrZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9ICcrJ1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1ncmVlbi01MDAnKVxuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1yZWQtNTAwJylcblxuICAgIG1hcmtlcnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IGNyZWF0ZU1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvbmdpdHVkZScpKVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcmtlcicpLFxuICAgICAgICBtYXA6IG1hcFxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZU1hcmtlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCk7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gJy0nXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLWdyZWVuLTUwMCcpXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLXJlZC01MDAnKVxuXG4gICAgbWFya2Vyc1tldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldID0gbnVsbFxufVxuXG5jb25zdCBhZGRXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJykpLFxuICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJykpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKVxuICAgIGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdheXBvaW50cykge1xuICAgICAgICBpZiAod2F5cG9pbnRzW2tleV0ubG9jYXRpb24ubGF0ID09IGxhdCAmJiB3YXlwb2ludHNba2V5XS5sb2NhdGlvbi5sbmcgPT0gbG5nKSB7XG4gICAgICAgICAgICB3YXlwb2ludHMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2aXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0aW5nJylcblxuICAgIHdoaWxlKGFjdGl2aXRpZXNbMF0pIHtcbiAgICAgICAgbWFya2Vyc1thY3Rpdml0aWVzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IG51bGxcbiAgICAgICAgYWN0aXZpdGllc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2aXRpZXNbMF0pXG4gICAgfVxuXG4gICAgbG9hZEFjdGl2aXRpZXMoKVxufVxuXG53aW5kb3cuY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgb3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXG5cbiAgICAgICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnJpdmFsJyksXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkRpcmVjdGlvbnMgcmVxdWVzdCBmYWlsZWQgZHVlIHRvIFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9