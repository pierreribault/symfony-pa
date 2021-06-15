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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz9hNTMzIiwid2VicGFjazovLy9pZ25vcmVkfC4vdXRpbC5pbnNwZWN0Il0sIm5hbWVzIjpbImFjdGl2aXRpZXNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIm1hcmtlcnMiLCJ3YXlwb2ludHMiLCJ3YXlwb2ludHNTYXZlZCIsInJheW9uIiwiY2l0eSIsImNhdGVnb3J5IiwiZnJvbUxhdGl0dWRlIiwiZnJvbUxvbmdpdHVkZSIsInRvTGF0aXR1ZGUiLCJ0b0xvbmdpdHVkZSIsImRlcGFydHVyZSIsImFycml2YWwiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCIsInN1Ym1pdEdlbmVyYXRvciIsImdlb2NvZGVyIiwiZ29vZ2xlIiwibWFwcyIsIkdlb2NvZGVyIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxhdCIsImxuZyIsImxvYWRBY3Rpdml0aWVzIiwicmVzdG9yZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhY3Rpdml0eSIsImluZGV4IiwiYWN0aXZpdHlFdmVudCIsImNsaWNrIiwiYXhpb3MiLCJxcyIsImluaXRNYXAiLCJkYXRhIiwiY3JlYXRlQWN0aXZpdHkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpdml0aWVzIiwid2luZG93IiwiaHJlZiIsInVsaWQiLCJpZCIsImluc2VydEFkamFjZW50SFRNTCIsImh0bWwiLCJhZGRNYXJrZXIiLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaWNvbiIsIm1hcmtlciIsImlubmVySFRNTCIsInRyaW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwdXNoIiwicmVtb3ZlTWFya2VyIiwiYWRkV2F5cG9pbnQiLCJhZGQiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVzdG9yZU1hcmtlciIsInJlbW92ZVdheXBvaW50IiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsImRpcmVjdGlvbnNSZW5kZXJlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsIk1hcCIsImNlbnRlciIsInNldE1hcCIsImNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSIsImkiLCJsZW5ndGgiLCJjcmVhdGVNYXJrZXIiLCJNYXJrZXIiLCJidG4iLCJ0b2dnbGUiLCJwYXJzZUZsb2F0Iiwia2V5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicm91dGUiLCJvcmlnaW4iLCJxdWVyeSIsIm9wdGltaXplV2F5cG9pbnRzIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJzdGF0dXMiLCJzZXREaXJlY3Rpb25zIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFDQSxJQUFJQyxHQUFKO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxJQUFJQyxLQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLFVBQUo7QUFDQSxJQUFJQyxXQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLE9BQUo7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ZUFBeEIsRUFBeUNjLFlBQXpDLENBQXNELGdCQUF0RDtBQURILEtBRFo7QUFLSVgsYUFBUyxFQUFFQSxTQUxmO0FBT0k0RixxQkFBaUIsRUFBRSxJQVB2QjtBQVNJQyxlQUFXLEVBQUU7QUFDVEYsV0FBSyxFQUFFL0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDYyxZQUF6QyxDQUFzRCxjQUF0RDtBQURFLEtBVGpCO0FBYUltRixjQUFVLEVBQUUzRSxNQUFNLENBQUNDLElBQVAsQ0FBWTJFLFVBQVosQ0FBdUJDO0FBYnZDLEdBREosRUFnQkksVUFBQ3ZFLFFBQUQsRUFBV3dFLE1BQVgsRUFBc0I7QUFDbEIsUUFBSUEsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakJ4Qix3QkFBa0IsQ0FBQ3lCLGFBQW5CLENBQWlDekUsUUFBakM7QUFDSCxLQUZELE1BRU87QUFDSHNCLFlBQU0sQ0FBQ29ELEtBQVAsQ0FBYSxzQ0FBc0NGLE1BQW5EO0FBQ0g7QUFDSixHQXRCTDtBQXdCSCxDQXpCRCxDOzs7Ozs7Ozs7Ozs7QUN0T0E7Ozs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCAnanF1ZXJ5J1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9qcy9tYXAuanMnXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHFzIGZyb20gXCJxc1wiO1xuXG5jb25zdCBhY3Rpdml0aWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0eS1saXN0Jyk7XG5sZXQgbWFwXG5sZXQgbWFya2VycyA9IFtdXG5sZXQgd2F5cG9pbnRzID0gW11cbmxldCB3YXlwb2ludHNTYXZlZCA9IFtdXG5sZXQgcmF5b25cbmxldCBjaXR5XG5sZXQgY2F0ZWdvcnlcbmxldCBmcm9tTGF0aXR1ZGVcbmxldCBmcm9tTG9uZ2l0dWRlXG5sZXQgdG9MYXRpdHVkZVxubGV0IHRvTG9uZ2l0dWRlXG5sZXQgZGVwYXJ0dXJlXG5sZXQgYXJyaXZhbFxuXG5cbmlmIChhY3Rpdml0aWVzTGlzdCkge1xuICAgIC8vIE1ha2UgYSByZXF1ZXN0IGZvciBhIHVzZXIgd2l0aCBhIGdpdmVuIElEXG4gICAgZGVwYXJ0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVwYXJ0dXJlJylcbiAgICBhcnJpdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJyaXZhbCcpXG4gICAgcmF5b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF5b24nKS52YWx1ZVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY2l0eSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQoKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF5b24nKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgcmF5b24gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkKClcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNhdGVnb3J5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCgpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0b3Itc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3VibWl0R2VuZXJhdG9yKClcbiAgICB9KVxuXG4gICAgbGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgZ2VvY29kZXIuZ2VvY29kZSh7YWRkcmVzczogZGVwYXJ0dXJlfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBmcm9tTGF0aXR1ZGUgPSByZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpXG4gICAgICAgICAgICBmcm9tTG9uZ2l0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7YWRkcmVzczogYXJyaXZhbH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTGF0aXR1ZGUgPSByZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpXG4gICAgICAgICAgICAgICAgICAgIHRvTG9uZ2l0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuXG4gICAgICAgICAgICAgICAgICAgIGxvYWRBY3Rpdml0aWVzKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxufVxuXG4gY29uc3QgbG9hZEFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gICAgIGNvbnN0IHJlc3RvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tbGlzdGluZycpXG5cbiAgICAgaWYgKHJlc3RvcmUpIHtcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN0b3JlKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBhY3Rpdml0eS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuXG4gICAgICAgICAgICBhY3Rpdml0eUV2ZW50KGluZGV4KVxuXG4gICAgICAgICAgICBhY3Rpdml0eS5jbGljaygpXG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGF4aW9zLnBvc3QoJy9hcGkvYWN0aXZpdGllcy8nLCBxcy5zdHJpbmdpZnkoe1xuICAgICAgICAgZnJvbUxvbmdpdHVkZTogZnJvbUxvbmdpdHVkZSxcbiAgICAgICAgIGZyb21MYXRpdHVkZTogZnJvbUxhdGl0dWRlLFxuICAgICAgICAgdG9Mb25naXR1ZGU6IHRvTG9uZ2l0dWRlLFxuICAgICAgICAgdG9MYXRpdHVkZTogdG9MYXRpdHVkZSxcbiAgICAgICAgIHJheW9uOiByYXlvbixcbiAgICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcbiAgICAgfSkpXG4gICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgICAgICAgZm9yIChsZXQgYWN0aXZpdHkgaW4gcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICBjcmVhdGVBY3Rpdml0eShyZXNwb25zZS5kYXRhW2FjdGl2aXR5XSlcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgIH0pXG4gfVxuXG5jb25zdCBzdWJtaXRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2F5cG9pbnRzU2F2ZWQpXG4gICAgY29uc29sZS5sb2coZGVwYXJ0dXJlLCBhcnJpdmFsKVxuXG4gICAgYXhpb3MucG9zdChgL2FwaS9yb2FkdHJpcC9gLCBxcy5zdHJpbmdpZnkoe1xuICAgICAgIGRlcGFydHVyZTogZGVwYXJ0dXJlLFxuICAgICAgIGFycml2YWw6IGFycml2YWwsXG4gICAgICAgYWN0aXZpdGllczogd2F5cG9pbnRzU2F2ZWQsXG4gICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9yb2FkdHJpcC8ke3Jlc3BvbnNlLmRhdGEudWxpZH0vZGV0YWlsc2BcbiAgICB9KVxufVxuXG5jb25zdCBjcmVhdGVBY3Rpdml0eSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKG51bGwgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgZGF0YS5pZCB9YCkpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2FjdGl2aXRpZXMvJHsgZGF0YS5pZCB9YClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVzcG9uc2UuZGF0YS5odG1sKTtcblxuICAgICAgICAgICAgICAgIGFjdGl2aXR5RXZlbnQoZGF0YS5pZClcblxuICAgICAgICAgICAgICAgIGFkZE1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge2xhdDogcmVzcG9uc2UuZGF0YS5kYXRhLmxhdGl0dWRlLCBsbmc6IHJlc3BvbnNlLmRhdGEuZGF0YS5sb25naXR1ZGV9LFxuICAgICAgICAgICAgICAgICAgICBpY29uOiByZXNwb25zZS5kYXRhLmRhdGEubWFya2VyLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgYWN0aXZpdHlFdmVudCA9IChpbmRleCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tJyArIGluZGV4KVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lckhUTUwudHJpbSgpID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaXN0aW5nLSR7IGluZGV4IH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0aW5nJylcbiAgICAgICAgICAgICAgICB3YXlwb2ludHNTYXZlZC5wdXNoKGluZGV4KVxuICAgICAgICAgICAgICAgIHJlbW92ZU1hcmtlcihldmVudClcbiAgICAgICAgICAgICAgICBhZGRXYXlwb2ludChldmVudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgaW5kZXggfWApLmNsYXNzTGlzdC5hZGQoJ2xpc3RpbmcnKVxuICAgICAgICAgICAgICAgIHdheXBvaW50c1NhdmVkLnNwbGljZSh3YXlwb2ludHNTYXZlZC5pbmRleE9mKGAke2luZGV4fWApLCAxKVxuICAgICAgICAgICAgICAgIHJlc3RvcmVNYXJrZXIoZXZlbnQpXG4gICAgICAgICAgICAgICAgcmVtb3ZlV2F5cG9pbnQoZXZlbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRNYXAoKVxuICAgICAgICB9KVxufVxuXG5jb25zdCBpbml0TWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgY29uc3QgZGlyZWN0aW9uc1JlbmRlcmVyID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNDguODY2NjY3LCBsbmc6IDIuMzMgfSxcbiAgICB9KTtcbiAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0TWFwKG1hcCk7XG5cbiAgICBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hcmtlcnNbaV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFya2Vyc1tpXS5zZXRNYXAobWFwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTWFya2VyID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihkYXRhKTtcbn1cblxuY29uc3QgYWRkTWFya2VyID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gY3JlYXRlTWFya2VyKGxvY2F0aW9uKVxuXG4gICAgbWFya2Vyc1tsb2NhdGlvbi5pZF0gPSBtYXJrZXI7XG59XG5cbmNvbnN0IHJlc3RvcmVNYXJrZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9ICcrJ1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1ncmVlbi01MDAnKVxuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1yZWQtNTAwJylcblxuICAgIG1hcmtlcnNbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IGNyZWF0ZU1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKSxcbiAgICAgICAgICAgIGxuZzogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvbmdpdHVkZScpKVxuICAgICAgICB9LFxuICAgICAgICBpY29uOiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcmtlcicpLFxuICAgICAgICBtYXA6IG1hcFxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZU1hcmtlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCk7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gJy0nXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLWdyZWVuLTUwMCcpXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLXJlZC01MDAnKVxuXG4gICAgbWFya2Vyc1tldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldID0gbnVsbFxufVxuXG5jb25zdCBhZGRXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJykpLFxuICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJykpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKVxuICAgIGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdheXBvaW50cykge1xuICAgICAgICBpZiAod2F5cG9pbnRzW2tleV0ubG9jYXRpb24ubGF0ID09IGxhdCAmJiB3YXlwb2ludHNba2V5XS5sb2NhdGlvbi5sbmcgPT0gbG5nKSB7XG4gICAgICAgICAgICB3YXlwb2ludHMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2aXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0aW5nJylcblxuICAgIHdoaWxlKGFjdGl2aXRpZXNbMF0pIHtcbiAgICAgICAgbWFya2Vyc1thY3Rpdml0aWVzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IG51bGxcbiAgICAgICAgYWN0aXZpdGllc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2aXRpZXNbMF0pXG4gICAgfVxuXG4gICAgbG9hZEFjdGl2aXRpZXMoKVxufVxuXG53aW5kb3cuY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgb3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXG5cbiAgICAgICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnJpdmFsJyksXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkRpcmVjdGlvbnMgcmVxdWVzdCBmYWlsZWQgZHVlIHRvIFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9