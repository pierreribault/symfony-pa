(self["webpackChunk"] = self["webpackChunk"] || []).push([["collection"],{

/***/ "./assets/js/collectionForm.js":
/*!*************************************!*\
  !*** ./assets/js/collectionForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
  var buttonCollectionDelete = $(".button-collection-delete");
  buttonCollectionDelete.map(function (key, button) {
    console.log(button);
    button.addEventListener("click", function () {
      $(this).parent().remove();
    });
  });
  $('.add-another-collection-widget').click(function (e) {
    var list = $($(this).attr('data-list-selector')); // Try to find the counter of the list or use the length of the list

    var counter = list.data('widget-counter') || list.children().length; // grab the prototype template

    var newWidget = list.attr('data-prototype'); // replace the "__name__" used in the id and name of the prototype
    // with a number that's unique to your emails
    // end name attribute looks like name="contact[emails][2]"

    newWidget = newWidget.replace(/__name__/g, counter); // Increase the counter

    counter++; // And store it, the length cannot be used if deleting widgets is allowed

    list.data('widget-counter', counter);
    var deleteBtn = document.createElement("button");
    deleteBtn.append(document.createTextNode("Supprimer"));
    deleteBtn.setAttribute("type", 'button');
    deleteBtn.addEventListener("click", function () {
      $(this).parent().remove();
    }); // create a new list element and add it to the list

    var newElem = $(list.attr('data-widget-tags')).html(newWidget);
    newElem.append(deleteBtn);
    newElem.appendTo(list);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-species-create_js-node_modules_core-js_internals-fc1c90","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-67d7e3","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_string_r-54d850"], () => (__webpack_exec__("./assets/js/collectionForm.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29sbGVjdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJidXR0b25Db2xsZWN0aW9uRGVsZXRlIiwibWFwIiwia2V5IiwiYnV0dG9uIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnQiLCJyZW1vdmUiLCJjbGljayIsImUiLCJsaXN0IiwiYXR0ciIsImNvdW50ZXIiLCJkYXRhIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwiZGVsZXRlQnRuIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwibmV3RWxlbSIsImh0bWwiLCJhcHBlbmRUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQixNQUFNQyxzQkFBc0IsR0FBR0gsQ0FBQyxDQUFDLDJCQUFELENBQWhDO0FBRUFHLHdCQUFzQixDQUFDQyxHQUF2QixDQUEyQixVQUFTQyxHQUFULEVBQWNDLE1BQWQsRUFBc0I7QUFDN0NDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FBLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6Q1QsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxNQUFSLEdBQWlCQyxNQUFqQjtBQUNILEtBRkQ7QUFHSCxHQUxEO0FBT0FYLEdBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DWSxLQUFwQyxDQUEwQyxVQUFVQyxDQUFWLEVBQWE7QUFDbkQsUUFBTUMsSUFBSSxHQUFHZCxDQUFDLENBQUNBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLG9CQUFiLENBQUQsQ0FBZCxDQURtRCxDQUVuRDs7QUFDQSxRQUFJQyxPQUFPLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxDQUFVLGdCQUFWLEtBQStCSCxJQUFJLENBQUNJLFFBQUwsR0FBZ0JDLE1BQTdELENBSG1ELENBS25EOztBQUNBLFFBQUlDLFNBQVMsR0FBR04sSUFBSSxDQUFDQyxJQUFMLENBQVUsZ0JBQVYsQ0FBaEIsQ0FObUQsQ0FPbkQ7QUFDQTtBQUNBOztBQUNBSyxhQUFTLEdBQUdBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQixXQUFsQixFQUErQkwsT0FBL0IsQ0FBWixDQVZtRCxDQVduRDs7QUFDQUEsV0FBTyxHQVo0QyxDQWFuRDs7QUFDQUYsUUFBSSxDQUFDRyxJQUFMLENBQVUsZ0JBQVYsRUFBNEJELE9BQTVCO0FBRUEsUUFBSU0sU0FBUyxHQUFHckIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBRCxhQUFTLENBQUNFLE1BQVYsQ0FBaUJ2QixRQUFRLENBQUN3QixjQUFULENBQXdCLFdBQXhCLENBQWpCO0FBQ0FILGFBQVMsQ0FBQ0ksWUFBVixDQUF1QixNQUF2QixFQUErQixRQUEvQjtBQUNBSixhQUFTLENBQUNiLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQVk7QUFDNUNULE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsTUFBUixHQUFpQkMsTUFBakI7QUFDSCxLQUZELEVBbkJtRCxDQXNCbkQ7O0FBQ0EsUUFBTWdCLE9BQU8sR0FBRzNCLENBQUMsQ0FBQ2MsSUFBSSxDQUFDQyxJQUFMLENBQVUsa0JBQVYsQ0FBRCxDQUFELENBQWlDYSxJQUFqQyxDQUFzQ1IsU0FBdEMsQ0FBaEI7QUFDQU8sV0FBTyxDQUFDSCxNQUFSLENBQWVGLFNBQWY7QUFDQUssV0FBTyxDQUFDRSxRQUFSLENBQWlCZixJQUFqQjtBQUNILEdBMUJEO0FBMkJILENBdENELEUiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbGxlY3Rpb25EZWxldGUgPSAkKFwiLmJ1dHRvbi1jb2xsZWN0aW9uLWRlbGV0ZVwiKVxuXG4gICAgYnV0dG9uQ29sbGVjdGlvbkRlbGV0ZS5tYXAoZnVuY3Rpb24oa2V5LCBidXR0b24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uKVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgJCgnLmFkZC1hbm90aGVyLWNvbGxlY3Rpb24td2lkZ2V0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9ICQoJCh0aGlzKS5hdHRyKCdkYXRhLWxpc3Qtc2VsZWN0b3InKSk7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3VudGVyIG9mIHRoZSBsaXN0IG9yIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0XG4gICAgICAgIGxldCBjb3VudGVyID0gbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicpIHx8IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gZ3JhYiB0aGUgcHJvdG90eXBlIHRlbXBsYXRlXG4gICAgICAgIGxldCBuZXdXaWRnZXQgPSBsaXN0LmF0dHIoJ2RhdGEtcHJvdG90eXBlJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIFwiX19uYW1lX19cIiB1c2VkIGluIHRoZSBpZCBhbmQgbmFtZSBvZiB0aGUgcHJvdG90eXBlXG4gICAgICAgIC8vIHdpdGggYSBudW1iZXIgdGhhdCdzIHVuaXF1ZSB0byB5b3VyIGVtYWlsc1xuICAgICAgICAvLyBlbmQgbmFtZSBhdHRyaWJ1dGUgbG9va3MgbGlrZSBuYW1lPVwiY29udGFjdFtlbWFpbHNdWzJdXCJcbiAgICAgICAgbmV3V2lkZ2V0ID0gbmV3V2lkZ2V0LnJlcGxhY2UoL19fbmFtZV9fL2csIGNvdW50ZXIpO1xuICAgICAgICAvLyBJbmNyZWFzZSB0aGUgY291bnRlclxuICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIC8vIEFuZCBzdG9yZSBpdCwgdGhlIGxlbmd0aCBjYW5ub3QgYmUgdXNlZCBpZiBkZWxldGluZyB3aWRnZXRzIGlzIGFsbG93ZWRcbiAgICAgICAgbGlzdC5kYXRhKCd3aWRnZXQtY291bnRlcicsIGNvdW50ZXIpO1xuXG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdG4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU3VwcHJpbWVyXCIpKVxuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCAnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBsaXN0IGVsZW1lbnQgYW5kIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgICBjb25zdCBuZXdFbGVtID0gJChsaXN0LmF0dHIoJ2RhdGEtd2lkZ2V0LXRhZ3MnKSkuaHRtbChuZXdXaWRnZXQpO1xuICAgICAgICBuZXdFbGVtLmFwcGVuZChkZWxldGVCdG4pXG4gICAgICAgIG5ld0VsZW0uYXBwZW5kVG8obGlzdCk7XG4gICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=