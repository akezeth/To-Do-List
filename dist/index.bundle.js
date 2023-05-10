"use strict";
(self["webpackChunkset_up_project_with_webpack"] = self["webpackChunkset_up_project_with_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks */ "./src/modules/tasks.js");


const displayTasks = () => {
  _modules_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((task) => {
    const taskContent = `
      <li class="taskContent">
        <div class="taskInfo">
          <input type="checkbox" class="completed-btn" ${
            task.completed ? "checked" : ""
          }>
          <p>${task.description}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical task-icon"></i>
      </li>
    `;
    document.querySelector(".tasks").innerHTML += taskContent;
  });
};

displayTasks();


/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tasks = [
  {
    description: "wash the dishes",
    completed: false,
    index: 0,
  },
  {
    description: "complete To Do list project",
    completed: false,
    index: 1,
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFza3MgZnJvbSBcIi4vbW9kdWxlcy90YXNrc1wiO1xyXG5cclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gYFxyXG4gICAgICA8bGkgY2xhc3M9XCJ0YXNrQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrSW5mb1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGVkLWJ0blwiICR7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID8gXCJjaGVja2VkXCIgOiBcIlwiXHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIHRhc2staWNvblwiPjwvaT5cclxuICAgICAgPC9saT5cclxuICAgIGA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTCArPSB0YXNrQ29udGVudDtcclxuICB9KTtcclxufTtcclxuXHJcbmRpc3BsYXlUYXNrcygpO1xyXG4iLCJjb25zdCB0YXNrcyA9IFtcclxuICB7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJ3YXNoIHRoZSBkaXNoZXNcIixcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICBpbmRleDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiBcImNvbXBsZXRlIFRvIERvIGxpc3QgcHJvamVjdFwiLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgIGluZGV4OiAxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9