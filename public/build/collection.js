(self["webpackChunk"] = self["webpackChunk"] || []).push([["collection"],{

/***/ "./assets/js/collectionForm.js":
/*!*************************************!*\
  !*** ./assets/js/collectionForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
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
0,[["./assets/js/collectionForm.js","runtime","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_to-object_js--642f45","vendors-node_modules_core-js_modules_es_string_replace_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29sbGVjdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImUiLCJsaXN0IiwiYXR0ciIsImNvdW50ZXIiLCJkYXRhIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdXaWRnZXQiLCJyZXBsYWNlIiwiZGVsZXRlQnRuIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudCIsInJlbW92ZSIsIm5ld0VsZW0iLCJodG1sIiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixHQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0csS0FBcEMsQ0FBMEMsVUFBVUMsQ0FBVixFQUFhO0FBQ25ELFFBQU1DLElBQUksR0FBR0wsQ0FBQyxDQUFDQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxvQkFBYixDQUFELENBQWQsQ0FEbUQsQ0FFbkQ7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUwsQ0FBVSxnQkFBVixLQUErQkgsSUFBSSxDQUFDSSxRQUFMLEdBQWdCQyxNQUE3RCxDQUhtRCxDQUtuRDs7QUFDQSxRQUFJQyxTQUFTLEdBQUdOLElBQUksQ0FBQ0MsSUFBTCxDQUFVLGdCQUFWLENBQWhCLENBTm1ELENBT25EO0FBQ0E7QUFDQTs7QUFDQUssYUFBUyxHQUFHQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0JMLE9BQS9CLENBQVosQ0FWbUQsQ0FXbkQ7O0FBQ0FBLFdBQU8sR0FaNEMsQ0FhbkQ7O0FBQ0FGLFFBQUksQ0FBQ0csSUFBTCxDQUFVLGdCQUFWLEVBQTRCRCxPQUE1QjtBQUVBLFFBQUlNLFNBQVMsR0FBR1osUUFBUSxDQUFDYSxhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBQ0FELGFBQVMsQ0FBQ0UsTUFBVixDQUFpQmQsUUFBUSxDQUFDZSxjQUFULENBQXdCLFdBQXhCLENBQWpCO0FBQ0FILGFBQVMsQ0FBQ0ksWUFBVixDQUF1QixNQUF2QixFQUErQixRQUEvQjtBQUNBSixhQUFTLENBQUNLLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQVc7QUFDM0NsQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixNQUFSLEdBQWlCQyxNQUFqQjtBQUNILEtBRkQsRUFuQm1ELENBc0JuRDs7QUFDQSxRQUFNQyxPQUFPLEdBQUdyQixDQUFDLENBQUNLLElBQUksQ0FBQ0MsSUFBTCxDQUFVLGtCQUFWLENBQUQsQ0FBRCxDQUFpQ2dCLElBQWpDLENBQXNDWCxTQUF0QyxDQUFoQjtBQUNBVSxXQUFPLENBQUNOLE1BQVIsQ0FBZUYsU0FBZjtBQUNBUSxXQUFPLENBQUNFLFFBQVIsQ0FBaUJsQixJQUFqQjtBQUNILEdBMUJEO0FBMkJILENBNUJELEUiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuYWRkLWFub3RoZXItY29sbGVjdGlvbi13aWRnZXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBsaXN0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtbGlzdC1zZWxlY3RvcicpKTtcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvdW50ZXIgb2YgdGhlIGxpc3Qgb3IgdXNlIHRoZSBsZW5ndGggb2YgdGhlIGxpc3RcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJykgfHwgbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICAvLyBncmFiIHRoZSBwcm90b3R5cGUgdGVtcGxhdGVcbiAgICAgICAgbGV0IG5ld1dpZGdldCA9IGxpc3QuYXR0cignZGF0YS1wcm90b3R5cGUnKTtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgXCJfX25hbWVfX1wiIHVzZWQgaW4gdGhlIGlkIGFuZCBuYW1lIG9mIHRoZSBwcm90b3R5cGVcbiAgICAgICAgLy8gd2l0aCBhIG51bWJlciB0aGF0J3MgdW5pcXVlIHRvIHlvdXIgZW1haWxzXG4gICAgICAgIC8vIGVuZCBuYW1lIGF0dHJpYnV0ZSBsb29rcyBsaWtlIG5hbWU9XCJjb250YWN0W2VtYWlsc11bMl1cIlxuICAgICAgICBuZXdXaWRnZXQgPSBuZXdXaWRnZXQucmVwbGFjZSgvX19uYW1lX18vZywgY291bnRlcik7XG4gICAgICAgIC8vIEluY3JlYXNlIHRoZSBjb3VudGVyXG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgLy8gQW5kIHN0b3JlIGl0LCB0aGUgbGVuZ3RoIGNhbm5vdCBiZSB1c2VkIGlmIGRlbGV0aW5nIHdpZGdldHMgaXMgYWxsb3dlZFxuICAgICAgICBsaXN0LmRhdGEoJ3dpZGdldC1jb3VudGVyJywgY291bnRlcik7XG5cbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTdXBwcmltZXJcIikpXG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsICdidXR0b24nKVxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgbGlzdCBlbGVtZW50IGFuZCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9ICQobGlzdC5hdHRyKCdkYXRhLXdpZGdldC10YWdzJykpLmh0bWwobmV3V2lkZ2V0KTtcbiAgICAgICAgbmV3RWxlbS5hcHBlbmQoZGVsZXRlQnRuKVxuICAgICAgICBuZXdFbGVtLmFwcGVuZFRvKGxpc3QpO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9