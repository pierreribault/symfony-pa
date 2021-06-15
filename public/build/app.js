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
  })).then(function (response) {
    window.location.href = "/roadtrip/".concat(response.data.ulid, "/details");
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwuL3V0aWwuaW5zcGVjdCJdLCJuYW1lcyI6WyJhY3Rpdml0aWVzTGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJtYXJrZXJzIiwid2F5cG9pbnRzIiwid2F5cG9pbnRzU2F2ZWQiLCJyYXlvbiIsImNpdHkiLCJjYXRlZ29yeSIsImZyb21MYXRpdHVkZSIsImZyb21Mb25naXR1ZGUiLCJ0b0xhdGl0dWRlIiwidG9Mb25naXR1ZGUiLCJkZXBhcnR1cmUiLCJhcnJpdmFsIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQiLCJzdWJtaXRHZW5lcmF0b3IiLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImdlb2NvZGUiLCJhZGRyZXNzIiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsb2FkQWN0aXZpdGllcyIsInJlc3RvcmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWN0aXZpdHkiLCJpbmRleCIsImFjdGl2aXR5RXZlbnQiLCJjbGljayIsImF4aW9zIiwicXMiLCJpbml0TWFwIiwiZGF0YSIsImNyZWF0ZUFjdGl2aXR5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZpdGllcyIsIndpbmRvdyIsImhyZWYiLCJ1bGlkIiwiaWQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJodG1sIiwiYWRkTWFya2VyIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImljb24iLCJtYXJrZXIiLCJpbm5lckhUTUwiLCJ0cmltIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicHVzaCIsInJlbW92ZU1hcmtlciIsImFkZFdheXBvaW50IiwiYWRkIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlc3RvcmVNYXJrZXIiLCJyZW1vdmVXYXlwb2ludCIsImRpcmVjdGlvbnNTZXJ2aWNlIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJkaXJlY3Rpb25zUmVuZGVyZXIiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJNYXAiLCJjZW50ZXIiLCJzZXRNYXAiLCJjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUiLCJpIiwibGVuZ3RoIiwiY3JlYXRlTWFya2VyIiwiTWFya2VyIiwiYnRuIiwidG9nZ2xlIiwicGFyc2VGbG9hdCIsImtleSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJvdXRlIiwib3JpZ2luIiwicXVlcnkiLCJvcHRpbWl6ZVdheXBvaW50cyIsImRlc3RpbmF0aW9uIiwidHJhdmVsTW9kZSIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwic3RhdHVzIiwic2V0RGlyZWN0aW9ucyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQXZCO0FBQ0EsSUFBSUMsR0FBSjtBQUNBLElBQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsSUFBSUMsS0FBSjtBQUNBLElBQUlDLElBQUo7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGFBQUo7QUFDQSxJQUFJQyxVQUFKO0FBQ0EsSUFBSUMsV0FBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxPQUFKOztBQUdB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LEVBQXlDYyxZQUF6QyxDQUFzRCxnQkFBdEQ7QUFESCxLQURaO0FBS0lYLGFBQVMsRUFBRUEsU0FMZjtBQU9JNEYscUJBQWlCLEVBQUUsSUFQdkI7QUFTSUMsZUFBVyxFQUFFO0FBQ1RGLFdBQUssRUFBRS9GLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q2MsWUFBekMsQ0FBc0QsY0FBdEQ7QUFERSxLQVRqQjtBQWFJbUYsY0FBVSxFQUFFM0UsTUFBTSxDQUFDQyxJQUFQLENBQVkyRSxVQUFaLENBQXVCQztBQWJ2QyxHQURKLEVBZ0JJLFVBQUN2RSxRQUFELEVBQVd3RSxNQUFYLEVBQXNCO0FBQ2xCLFFBQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCeEIsd0JBQWtCLENBQUN5QixhQUFuQixDQUFpQ3pFLFFBQWpDO0FBQ0gsS0FGRCxNQUVPO0FBQ0hzQixZQUFNLENBQUNvRCxLQUFQLENBQWEsc0NBQXNDRixNQUFuRDtBQUNIO0FBQ0osR0F0Qkw7QUF3QkgsQ0F6QkQsQzs7Ozs7Ozs7Ozs7O0FDdE9BOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJ2pxdWVyeSdcblxuaW1wb3J0ICcuLi9hc3NldHMvanMvbWFwLmpzJ1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tIFwicXNcIjtcblxuY29uc3QgYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktbGlzdCcpO1xubGV0IG1hcFxubGV0IG1hcmtlcnMgPSBbXVxubGV0IHdheXBvaW50cyA9IFtdXG5sZXQgd2F5cG9pbnRzU2F2ZWQgPSBbXVxubGV0IHJheW9uXG5sZXQgY2l0eVxubGV0IGNhdGVnb3J5XG5sZXQgZnJvbUxhdGl0dWRlXG5sZXQgZnJvbUxvbmdpdHVkZVxubGV0IHRvTGF0aXR1ZGVcbmxldCB0b0xvbmdpdHVkZVxubGV0IGRlcGFydHVyZVxubGV0IGFycml2YWxcblxuXG5pZiAoYWN0aXZpdGllc0xpc3QpIHtcbiAgICAvLyBNYWtlIGEgcmVxdWVzdCBmb3IgYSB1c2VyIHdpdGggYSBnaXZlbiBJRFxuICAgIGRlcGFydHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpXG4gICAgYXJyaXZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWFycml2YWwnKVxuICAgIHJheW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykudmFsdWVcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNpdHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJheW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCgpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjYXRlZ29yeSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdG9yLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN1Ym1pdEdlbmVyYXRvcigpXG4gICAgfSlcblxuICAgIGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGRlcGFydHVyZX0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgZnJvbUxhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgZnJvbUxvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoe2FkZHJlc3M6IGFycml2YWx9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0b0xhdGl0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKVxuICAgICAgICAgICAgICAgICAgICB0b0xvbmdpdHVkZSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKClcblxuICAgICAgICAgICAgICAgICAgICBsb2FkQWN0aXZpdGllcygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn1cblxuIGNvbnN0IGxvYWRBY3Rpdml0aWVzID0gKCkgPT4ge1xuICAgICBjb25zdCByZXN0b3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLWxpc3RpbmcnKVxuXG4gICAgIGlmIChyZXN0b3JlKSB7XG4gICAgICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgcmVzdG9yZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYWN0aXZpdHkuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JylcblxuICAgICAgICAgICAgYWN0aXZpdHlFdmVudChpbmRleClcblxuICAgICAgICAgICAgYWN0aXZpdHkuY2xpY2soKVxuICAgICAgICB9XG4gICAgIH1cblxuICAgICBheGlvcy5wb3N0KCcvYXBpL2FjdGl2aXRpZXMvJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgIGZyb21Mb25naXR1ZGU6IGZyb21Mb25naXR1ZGUsXG4gICAgICAgICBmcm9tTGF0aXR1ZGU6IGZyb21MYXRpdHVkZSxcbiAgICAgICAgIHRvTG9uZ2l0dWRlOiB0b0xvbmdpdHVkZSxcbiAgICAgICAgIHRvTGF0aXR1ZGU6IHRvTGF0aXR1ZGUsXG4gICAgICAgICByYXlvbjogcmF5b24sXG4gICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XG4gICAgIH0pKVxuICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICAgICAgIGZvciAobGV0IGFjdGl2aXR5IGluIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aXZpdHkocmVzcG9uc2UuZGF0YVthY3Rpdml0eV0pXG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSlcbiAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICB9KVxuIH1cblxuY29uc3Qgc3VibWl0R2VuZXJhdG9yID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdheXBvaW50c1NhdmVkKVxuICAgIGNvbnNvbGUubG9nKGRlcGFydHVyZSwgYXJyaXZhbClcblxuICAgIGF4aW9zLnBvc3QoYC9hcGkvcm9hZHRyaXAvYCwgcXMuc3RyaW5naWZ5KHtcbiAgICAgICBkZXBhcnR1cmU6IGRlcGFydHVyZSxcbiAgICAgICBhcnJpdmFsOiBhcnJpdmFsLFxuICAgICAgIGFjdGl2aXRpZXM6IHdheXBvaW50c1NhdmVkLFxuICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvcm9hZHRyaXAvJHtyZXNwb25zZS5kYXRhLnVsaWR9L2RldGFpbHNgXG4gICAgfSlcbn1cblxuY29uc3QgY3JlYXRlQWN0aXZpdHkgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChudWxsID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGRhdGEuaWQgfWApKSB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9hY3Rpdml0aWVzLyR7IGRhdGEuaWQgfWApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlc3BvbnNlLmRhdGEuaHRtbCk7XG5cbiAgICAgICAgICAgICAgICBhY3Rpdml0eUV2ZW50KGRhdGEuaWQpXG5cbiAgICAgICAgICAgICAgICBhZGRNYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtsYXQ6IHJlc3BvbnNlLmRhdGEuZGF0YS5sYXRpdHVkZSwgbG5nOiByZXNwb25zZS5kYXRhLmRhdGEubG9uZ2l0dWRlfSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogcmVzcG9uc2UuZGF0YS5kYXRhLm1hcmtlcixcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGFjdGl2aXR5RXZlbnQgPSAoaW5kZXgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLScgKyBpbmRleClcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JylcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuaW5uZXJIVE1MLnRyaW0oKSA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdGluZy0keyBpbmRleCB9YCkuY2xhc3NMaXN0LnJlbW92ZSgnbGlzdGluZycpXG4gICAgICAgICAgICAgICAgd2F5cG9pbnRzU2F2ZWQucHVzaChpbmRleClcbiAgICAgICAgICAgICAgICByZW1vdmVNYXJrZXIoZXZlbnQpXG4gICAgICAgICAgICAgICAgYWRkV2F5cG9pbnQoZXZlbnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGluZGV4IH1gKS5jbGFzc0xpc3QuYWRkKCdsaXN0aW5nJylcbiAgICAgICAgICAgICAgICB3YXlwb2ludHNTYXZlZC5zcGxpY2Uod2F5cG9pbnRzU2F2ZWQuaW5kZXhPZihgJHtpbmRleH1gKSwgMSlcbiAgICAgICAgICAgICAgICByZXN0b3JlTWFya2VyKGV2ZW50KVxuICAgICAgICAgICAgICAgIHJlbW92ZVdheXBvaW50KGV2ZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0TWFwKClcbiAgICAgICAgfSlcbn1cblxuY29uc3QgaW5pdE1hcCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgIGNvbnN0IGRpcmVjdGlvbnNSZW5kZXJlciA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIGNlbnRlcjogeyBsYXQ6IDQ4Ljg2NjY2NywgbG5nOiAyLjMzIH0sXG4gICAgfSk7XG4gICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldE1hcChtYXApO1xuXG4gICAgY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtYXJrZXJzW2ldICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcmtlcnNbaV0uc2V0TWFwKG1hcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZGF0YSk7XG59XG5cbmNvbnN0IGFkZE1hcmtlciA9IChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZU1hcmtlcihsb2NhdGlvbilcblxuICAgIG1hcmtlcnNbbG9jYXRpb24uaWRdID0gbWFya2VyO1xufVxuXG5jb25zdCByZXN0b3JlTWFya2VyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LmlkKTtcblxuICAgIGJ0bi5pbm5lckhUTUwgPSAnKydcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYmctZ3JlZW4tNTAwJylcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYmctcmVkLTUwMCcpXG5cbiAgICBtYXJrZXJzW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKV0gPSBjcmVhdGVNYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0aXR1ZGUnKSksXG4gICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJrZXInKSxcbiAgICAgICAgbWFwOiBtYXBcbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVNYXJrZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9ICctJ1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1ncmVlbi01MDAnKVxuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1yZWQtNTAwJylcblxuICAgIG1hcmtlcnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IG51bGxcbn1cblxuY29uc3QgYWRkV2F5cG9pbnQgPSAoZXZlbnQpID0+IHtcbiAgICB3YXlwb2ludHMucHVzaCh7XG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvbmdpdHVkZScpKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgcmVtb3ZlV2F5cG9pbnQgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBsYXQgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0aXR1ZGUnKSlcbiAgICBjb25zdCBsbmcgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB3YXlwb2ludHMpIHtcbiAgICAgICAgaWYgKHdheXBvaW50c1trZXldLmxvY2F0aW9uLmxhdCA9PSBsYXQgJiYgd2F5cG9pbnRzW2tleV0ubG9jYXRpb24ubG5nID09IGxuZykge1xuICAgICAgICAgICAgd2F5cG9pbnRzLnNwbGljZShrZXksIDEpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGxldCBhY3Rpdml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdGluZycpXG5cbiAgICB3aGlsZShhY3Rpdml0aWVzWzBdKSB7XG4gICAgICAgIG1hcmtlcnNbYWN0aXZpdGllc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKV0gPSBudWxsXG4gICAgICAgIGFjdGl2aXRpZXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3Rpdml0aWVzWzBdKVxuICAgIH1cblxuICAgIGxvYWRBY3Rpdml0aWVzKClcbn1cblxud2luZG93LmNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSA9IChkaXJlY3Rpb25zU2VydmljZSwgZGlyZWN0aW9uc1JlbmRlcmVyKSA9PiB7XG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9yaWdpbjoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1kZXBhcnR1cmUnKSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHdheXBvaW50czogd2F5cG9pbnRzLFxuXG4gICAgICAgICAgICBvcHRpbWl6ZVdheXBvaW50czogdHJ1ZSxcblxuICAgICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJyaXZhbCcpLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HLFxuICAgICAgICB9LFxuICAgICAgICAocmVzcG9uc2UsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJPS1wiKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJEaXJlY3Rpb25zIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==