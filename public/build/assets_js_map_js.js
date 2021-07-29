(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_map_js"],{

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
var thread = false;
var route;

if (activitiesList) {
  if (document.getElementById('show_thread')) {
    thread = true;
  } // Make a request for a user with a given ID


  departure = document.getElementById('map-container').getAttribute('data-departure');
  arrival = document.getElementById('map-container').getAttribute('data-arrival');

  if (!thread) {
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
  }

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

  if (!thread) {
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
  }
};

var submitGenerator = function submitGenerator() {
  var waypointsOrder = [];

  var _iterator2 = _createForOfIteratorHelper(route.routes[0].waypoint_order),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var index = _step2.value;
      waypointsOrder.push(waypointsSaved[index]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/roadtrip/", qs__WEBPACK_IMPORTED_MODULE_5___default().stringify({
    departure: departure,
    arrival: arrival,
    activities: waypointsOrder
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

  console.log(waypointsSaved);
};

var createMarker = function createMarker(data) {
  var marker = new google.maps.Marker(data);
  marker.addListener('click', function () {
    resetBackgroundActivities();
    var activity = document.getElementById("listing-".concat(marker.id));
    activity.classList.add('bg-gray-200');
    activity.scrollIntoView({
      behavior: "smooth"
    });
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
  return marker;
};

var resetBackgroundActivities = function resetBackgroundActivities() {
  var activities = document.getElementsByClassName('listing');

  var _iterator3 = _createForOfIteratorHelper(activities),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var activity = _step3.value;
      activity.classList.remove('bg-gray-200');
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};

var addMarker = function addMarker(location) {
  var marker = createMarker(location);
  markers[location.id] = marker;
};

var restoreMarker = function restoreMarker(event) {
  var btn = document.getElementById(event.target.id);
  btn.innerHTML = '+';
  btn.classList.toggle('bg-green-500');
  btn.classList.toggle('bg-carnation');
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
  btn.classList.toggle('bg-carnation');
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
    route = response;

    if (status === "OK") {
      directionsRenderer.setDirections(response);
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
};

var clipboard = document.getElementById('clipboard');

if (clipboard) {
  clipboard.addEventListener('click', function () {
    document.getElementById('copy').select();
    document.execCommand('copy');
    document.getElementById('clipboard-icon').classList.add('bg-pastel-green');
    document.getElementById('clipboard-icon').classList.remove('bg-gigas');
    document.getElementById('copy').classList.add('border-pastel-green');
    document.getElementById('copy').classList.remove('border-gigas');
  });
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFwLmpzIiwid2VicGFjazovLy9pZ25vcmVkfC9Vc2Vycy9mbG9yaWFucGF1bWllci9Eb2N1bWVudHMvZGV2L3N5bWZvbnktcGEvbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sIm5hbWVzIjpbImFjdGl2aXRpZXNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsIm1hcmtlcnMiLCJ3YXlwb2ludHMiLCJ3YXlwb2ludHNTYXZlZCIsInJheW9uIiwiY2l0eSIsImNhdGVnb3J5IiwiZnJvbUxhdGl0dWRlIiwiZnJvbUxvbmdpdHVkZSIsInRvTGF0aXR1ZGUiLCJ0b0xvbmdpdHVkZSIsImRlcGFydHVyZSIsImFycml2YWwiLCJ0aHJlYWQiLCJyb3V0ZSIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkIiwic3VibWl0R2VuZXJhdG9yIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwiYWRkcmVzcyIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwibGF0IiwibG5nIiwibG9hZEFjdGl2aXRpZXMiLCJyZXN0b3JlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFjdGl2aXR5IiwiaW5kZXgiLCJhY3Rpdml0eUV2ZW50IiwiY2xpY2siLCJheGlvcyIsInFzIiwiaW5pdE1hcCIsImRhdGEiLCJjcmVhdGVBY3Rpdml0eSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndheXBvaW50c09yZGVyIiwicm91dGVzIiwid2F5cG9pbnRfb3JkZXIiLCJwdXNoIiwiYWN0aXZpdGllcyIsIndpbmRvdyIsImhyZWYiLCJ1bGlkIiwiaWQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJodG1sIiwiYWRkTWFya2VyIiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImljb24iLCJtYXJrZXIiLCJpbm5lckhUTUwiLCJ0cmltIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlTWFya2VyIiwiYWRkV2F5cG9pbnQiLCJhZGQiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVzdG9yZU1hcmtlciIsInJlbW92ZVdheXBvaW50IiwiZGlyZWN0aW9uc1NlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsImRpcmVjdGlvbnNSZW5kZXJlciIsIkRpcmVjdGlvbnNSZW5kZXJlciIsIk1hcCIsImNlbnRlciIsInNldE1hcCIsImNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSIsImkiLCJsZW5ndGgiLCJjcmVhdGVNYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsInJlc2V0QmFja2dyb3VuZEFjdGl2aXRpZXMiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2V0Wm9vbSIsInNldENlbnRlciIsImdldFBvc2l0aW9uIiwiYnRuIiwidG9nZ2xlIiwicGFyc2VGbG9hdCIsImtleSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm9yaWdpbiIsInF1ZXJ5Iiwib3B0aW1pemVXYXlwb2ludHMiLCJkZXN0aW5hdGlvbiIsInRyYXZlbE1vZGUiLCJUcmF2ZWxNb2RlIiwiRFJJVklORyIsInN0YXR1cyIsInNldERpcmVjdGlvbnMiLCJhbGVydCIsImNsaXBib2FyZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFDQSxJQUFJQyxHQUFKO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxJQUFJ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USxDQUFDcUgsV0FBVCxDQUFxQixNQUFyQjtBQUVBckgsWUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ3NFLFNBQTFDLENBQW9ESSxHQUFwRCxDQUF3RCxpQkFBeEQ7QUFDQTNFLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENzRSxTQUExQyxDQUFvREMsTUFBcEQsQ0FBMkQsVUFBM0Q7QUFDQXhFLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ3NFLFNBQWhDLENBQTBDSSxHQUExQyxDQUE4QyxxQkFBOUM7QUFDQTNFLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ3NFLFNBQWhDLENBQTBDQyxNQUExQyxDQUFpRCxjQUFqRDtBQUNILEdBUkQ7QUFTSCxDOzs7Ozs7Ozs7O0FDbFRELGUiLCJmaWxlIjoiYXNzZXRzX2pzX21hcF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSBcInFzXCI7XG5cbmNvbnN0IGFjdGl2aXRpZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2aXR5LWxpc3QnKTtcbmxldCBtYXBcbmxldCBtYXJrZXJzID0gW11cbmxldCB3YXlwb2ludHMgPSBbXVxubGV0IHdheXBvaW50c1NhdmVkID0gW11cbmxldCByYXlvblxubGV0IGNpdHlcbmxldCBjYXRlZ29yeVxubGV0IGZyb21MYXRpdHVkZVxubGV0IGZyb21Mb25naXR1ZGVcbmxldCB0b0xhdGl0dWRlXG5sZXQgdG9Mb25naXR1ZGVcbmxldCBkZXBhcnR1cmVcbmxldCBhcnJpdmFsXG5sZXQgdGhyZWFkID0gZmFsc2VcbmxldCByb3V0ZVxuXG5pZiAoYWN0aXZpdGllc0xpc3QpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dfdGhyZWFkJykpIHtcbiAgICAgICAgdGhyZWFkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIE1ha2UgYSByZXF1ZXN0IGZvciBhIHVzZXIgd2l0aCBhIGdpdmVuIElEXG4gICAgZGVwYXJ0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVwYXJ0dXJlJylcbiAgICBhcnJpdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcC1jb250YWluZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXJyaXZhbCcpXG5cbiAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICByYXlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXlvbicpLnZhbHVlXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNpdHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2aXRpZXNOb3RTZWxlY3RlZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JheW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICByYXlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZpdGllc05vdFNlbGVjdGVkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0b3Itc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN1Ym1pdEdlbmVyYXRvcigpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgZ2VvY29kZXIuZ2VvY29kZSh7YWRkcmVzczogZGVwYXJ0dXJlfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBmcm9tTGF0aXR1ZGUgPSByZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpXG4gICAgICAgICAgICBmcm9tTG9uZ2l0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7YWRkcmVzczogYXJyaXZhbH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTGF0aXR1ZGUgPSByZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpXG4gICAgICAgICAgICAgICAgICAgIHRvTG9uZ2l0dWRlID0gcmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKVxuXG4gICAgICAgICAgICAgICAgICAgIGxvYWRBY3Rpdml0aWVzKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxufVxuXG4gY29uc3QgbG9hZEFjdGl2aXRpZXMgPSAoKSA9PiB7XG4gICAgIGNvbnN0IHJlc3RvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tbGlzdGluZycpXG5cbiAgICAgaWYgKHJlc3RvcmUpIHtcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN0b3JlKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBhY3Rpdml0eS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuXG4gICAgICAgICAgICBhY3Rpdml0eUV2ZW50KGluZGV4KVxuXG4gICAgICAgICAgICBhY3Rpdml0eS5jbGljaygpXG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2FjdGl2aXRpZXMvJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICBmcm9tTG9uZ2l0dWRlOiBmcm9tTG9uZ2l0dWRlLFxuICAgICAgICAgICAgIGZyb21MYXRpdHVkZTogZnJvbUxhdGl0dWRlLFxuICAgICAgICAgICAgIHRvTG9uZ2l0dWRlOiB0b0xvbmdpdHVkZSxcbiAgICAgICAgICAgICB0b0xhdGl0dWRlOiB0b0xhdGl0dWRlLFxuICAgICAgICAgICAgIHJheW9uOiByYXlvbixcbiAgICAgICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxuICAgICAgICAgfSkpXG4gICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgIGluaXRNYXAoKTtcbiAgICAgICAgICAgICAgICAgZm9yIChsZXQgYWN0aXZpdHkgaW4gcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWN0aXZpdHkocmVzcG9uc2UuZGF0YVthY3Rpdml0eV0pXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICB9KVxuICAgICB9XG4gfVxuXG5jb25zdCBzdWJtaXRHZW5lcmF0b3IgPSAoKSA9PiB7XG4gICAgbGV0IHdheXBvaW50c09yZGVyID0gW11cblxuICAgIGZvciAobGV0IGluZGV4IG9mIHJvdXRlLnJvdXRlc1swXS53YXlwb2ludF9vcmRlcikge1xuICAgICAgICB3YXlwb2ludHNPcmRlci5wdXNoKHdheXBvaW50c1NhdmVkW2luZGV4XSlcbiAgICB9XG5cbiAgICBheGlvcy5wb3N0KGAvYXBpL3JvYWR0cmlwL2AsIHFzLnN0cmluZ2lmeSh7XG4gICAgICAgZGVwYXJ0dXJlOiBkZXBhcnR1cmUsXG4gICAgICAgYXJyaXZhbDogYXJyaXZhbCxcbiAgICAgICBhY3Rpdml0aWVzOiB3YXlwb2ludHNPcmRlcixcbiAgICB9KSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL3JvYWR0cmlwLyR7cmVzcG9uc2UuZGF0YS51bGlkfS9kZXRhaWxzYFxuICAgIH0pXG59XG5cbmNvbnN0IGNyZWF0ZUFjdGl2aXR5ID0gKGRhdGEpID0+IHtcbiAgICBpZiAobnVsbCA9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdGluZy0keyBkYXRhLmlkIH1gKSkge1xuICAgICAgICBheGlvcy5nZXQoYC9hcGkvYWN0aXZpdGllcy8keyBkYXRhLmlkIH1gKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZpdGllc0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByZXNwb25zZS5kYXRhLmh0bWwpO1xuXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlFdmVudChkYXRhLmlkKVxuXG4gICAgICAgICAgICAgICAgYWRkTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OiByZXNwb25zZS5kYXRhLmRhdGEubGF0aXR1ZGUsIGxuZzogcmVzcG9uc2UuZGF0YS5kYXRhLmxvbmdpdHVkZX0sXG4gICAgICAgICAgICAgICAgICAgIGljb246IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXJrZXIsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBhY3Rpdml0eUV2ZW50ID0gKGluZGV4KSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi0nICsgaW5kZXgpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlubmVySFRNTC50cmltKCkgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpc3RpbmctJHsgaW5kZXggfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3RpbmcnKVxuICAgICAgICAgICAgICAgIHdheXBvaW50c1NhdmVkLnB1c2goaW5kZXgpXG4gICAgICAgICAgICAgICAgcmVtb3ZlTWFya2VyKGV2ZW50KVxuICAgICAgICAgICAgICAgIGFkZFdheXBvaW50KGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdGluZy0keyBpbmRleCB9YCkuY2xhc3NMaXN0LmFkZCgnbGlzdGluZycpXG4gICAgICAgICAgICAgICAgd2F5cG9pbnRzU2F2ZWQuc3BsaWNlKHdheXBvaW50c1NhdmVkLmluZGV4T2YoYCR7aW5kZXh9YCksIDEpXG4gICAgICAgICAgICAgICAgcmVzdG9yZU1hcmtlcihldmVudClcbiAgICAgICAgICAgICAgICByZW1vdmVXYXlwb2ludChldmVudClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5pdE1hcCgpXG4gICAgICAgIH0pXG59XG5cbmNvbnN0IGluaXRNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICBjb25zdCBkaXJlY3Rpb25zUmVuZGVyZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKCk7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgICBjZW50ZXI6IHsgbGF0OiA0OC44NjY2NjcsIGxuZzogMi4zMyB9LFxuICAgIH0pO1xuICAgIGRpcmVjdGlvbnNSZW5kZXJlci5zZXRNYXAobWFwKTtcblxuICAgIGNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZShkaXJlY3Rpb25zU2VydmljZSwgZGlyZWN0aW9uc1JlbmRlcmVyKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWFya2Vyc1tpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXJrZXJzW2ldLnNldE1hcChtYXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cod2F5cG9pbnRzU2F2ZWQpXG59XG5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihkYXRhKTtcblxuICAgIG1hcmtlci5hZGRMaXN0ZW5lciAoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXNldEJhY2tncm91bmRBY3Rpdml0aWVzKClcbiAgICAgICAgY29uc3QgYWN0aXZpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGlzdGluZy0ke21hcmtlci5pZCB9YClcbiAgICAgICAgYWN0aXZpdHkuY2xhc3NMaXN0LmFkZCgnYmctZ3JheS0yMDAnKVxuICAgICAgICBhY3Rpdml0eS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcbiAgICAgICAgbWFwLnNldFpvb20oOClcbiAgICAgICAgbWFwLnNldENlbnRlcihtYXJrZXIuZ2V0UG9zaXRpb24oKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1hcmtlclxufVxuXG5jb25zdCByZXNldEJhY2tncm91bmRBY3Rpdml0aWVzID0gKCkgPT4ge1xuICAgIGxldCBhY3Rpdml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdGluZycpXG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICAgICAgYWN0aXZpdHkuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ3JheS0yMDAnKVxuICAgIH1cbn1cblxuXG5jb25zdCBhZGRNYXJrZXIgPSAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVNYXJrZXIobG9jYXRpb24pXG5cbiAgICBtYXJrZXJzW2xvY2F0aW9uLmlkXSA9IG1hcmtlcjtcbn1cblxuY29uc3QgcmVzdG9yZU1hcmtlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5pZCk7XG5cbiAgICBidG4uaW5uZXJIVE1MID0gJysnXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLWdyZWVuLTUwMCcpXG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2JnLWNhcm5hdGlvbicpXG5cbiAgICBtYXJrZXJzW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKV0gPSBjcmVhdGVNYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0aXR1ZGUnKSksXG4gICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXJrZXInKSxcbiAgICAgICAgbWFwOiBtYXBcbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVNYXJrZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuaWQpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9ICctJ1xuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1ncmVlbi01MDAnKVxuICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdiZy1jYXJuYXRpb24nKVxuXG4gICAgbWFya2Vyc1tldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldID0gbnVsbFxufVxuXG5jb25zdCBhZGRXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIHdheXBvaW50cy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhdGl0dWRlJykpLFxuICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9uZ2l0dWRlJykpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmVXYXlwb2ludCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGxhdCA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXRpdHVkZScpKVxuICAgIGNvbnN0IGxuZyA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sb25naXR1ZGUnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHdheXBvaW50cykge1xuICAgICAgICBpZiAod2F5cG9pbnRzW2tleV0ubG9jYXRpb24ubGF0ID09IGxhdCAmJiB3YXlwb2ludHNba2V5XS5sb2NhdGlvbi5sbmcgPT0gbG5nKSB7XG4gICAgICAgICAgICB3YXlwb2ludHMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVBY3Rpdml0aWVzTm90U2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2aXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0aW5nJylcblxuICAgIHdoaWxlKGFjdGl2aXRpZXNbMF0pIHtcbiAgICAgICAgbWFya2Vyc1thY3Rpdml0aWVzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSA9IG51bGxcbiAgICAgICAgYWN0aXZpdGllc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2aXRpZXNbMF0pXG4gICAgfVxuXG4gICAgbG9hZEFjdGl2aXRpZXMoKVxufVxuXG53aW5kb3cuY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlID0gKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgb3JpZ2luOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAtY29udGFpbmVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWRlcGFydHVyZScpLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXG5cbiAgICAgICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hcnJpdmFsJyksXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICByb3V0ZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zUmVuZGVyZXIuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkRpcmVjdGlvbnMgcmVxdWVzdCBmYWlsZWQgZHVlIHRvIFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG5cbmxldCBjbGlwYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpcGJvYXJkJyk7XG5cbmlmKGNsaXBib2FyZCkge1xuICAgIGNsaXBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHknKS5zZWxlY3QoKVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaXBib2FyZC1pY29uJykuY2xhc3NMaXN0LmFkZCgnYmctcGFzdGVsLWdyZWVuJylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaXBib2FyZC1pY29uJykuY2xhc3NMaXN0LnJlbW92ZSgnYmctZ2lnYXMnKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1wYXN0ZWwtZ3JlZW4nKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlci1naWdhcycpXG4gICAgfSlcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=