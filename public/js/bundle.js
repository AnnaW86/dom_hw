/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const cricketer = __webpack_require__(/*! ./helpers/cricketers */ \"./src/helpers/cricketers.js\");\nconst button = __webpack_require__(/*! ./helpers/buttons */ \"./src/helpers/buttons.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log('Javascript loaded');\n\n    const cricketerList = document.querySelector('#cricketer-list');\n\n    const createCricketerListItem = form => {\n        const cricketerListItem = document.createElement('li');\n        cricketerListItem.classList.add('list-item')\n    \n        cricketerListItem.appendChild(cricketer.getName(form));\n        cricketerListItem.appendChild(cricketer.getTeam(form));\n        cricketerListItem.appendChild(cricketer.getRole(form));\n        cricketerListItem.appendChild(cricketer.getAppearances(form));\n        cricketerListItem.appendChild(cricketer.getRuns(form));\n        cricketerListItem.appendChild(cricketer.getWickets(form));\n\n        // const deleteButtonContainer = document.createElement(\"div\");\n        // deleteButtonContainer.classList.add('delete-button-container');\n        // cricketerListItem.appendChild(deleteButtonContainer)\n\n        // const deleteListItemButton = document.createElement(\"button\");\n        // deleteListItemButton.textContent = \"Remove\";\n        // deleteListItemButton.setAttribute(\"id\", \"delete-list-item\")\n        // deleteButtonContainer.appendChild(deleteListItemButton);\n\n        deleteListItemButton = button.createRemoveButton(cricketerListItem);\n\n        const handleRemoveButton = () => {\n            cricketerListItem.parentNode.removeChild(cricketerListItem);\n        }\n        \n        deleteListItemButton.addEventListener(\"click\", handleRemoveButton);\n\n        return cricketerListItem;\n    }\n\n    const handleNewCricketerSubmit = e => {\n        e.preventDefault();\n\n        const cricketerListItem = createCricketerListItem(e.target);\n        cricketerList.appendChild(cricketerListItem);\n\n        e.target.reset();\n    }\n\n    const newCricketer = document.querySelector('#new-item-form');\n    newCricketer.addEventListener('submit', handleNewCricketerSubmit);\n\n    const deleteButton = document.querySelector(\"#delete-button\");\n\n    const handleDeleteButton = () => {\n        while (cricketerList.firstChild) {\n            cricketerList.removeChild(cricketerList.firstChild);\n        }\n      }\n    \n      deleteButton.addEventListener(\"click\", handleDeleteButton);\n\n\n})\n\n//# sourceURL=webpack://dom_hw/./src/app.js?");

/***/ }),

/***/ "./src/helpers/buttons.js":
/*!********************************!*\
  !*** ./src/helpers/buttons.js ***!
  \********************************/
/***/ ((module) => {

eval("const createRemoveButton = (cricketerListItem) => {\n    const deleteButtonContainer = document.createElement(\"div\");\n    deleteButtonContainer.classList.add('delete-button-container');\n    cricketerListItem.appendChild(deleteButtonContainer)\n    \n    const deleteListItemButton = document.createElement(\"button\");\n    deleteListItemButton.textContent = \"Remove\";\n    deleteListItemButton.setAttribute(\"id\", \"delete-list-item\")\n    deleteButtonContainer.appendChild(deleteListItemButton);\n    return deleteListItemButton;\n\n}\n\n\n\nmodule.exports = {createRemoveButton};\n\n\n//# sourceURL=webpack://dom_hw/./src/helpers/buttons.js?");

/***/ }),

/***/ "./src/helpers/cricketers.js":
/*!***********************************!*\
  !*** ./src/helpers/cricketers.js ***!
  \***********************************/
/***/ ((module) => {

eval("const getName = form => {\n    const name = document.createElement('h2');\n    form.wicket_keeper.checked ? name.textContent = form.name.value + ' (WK)' : name.textContent = form.name.value; \n    return name;\n}\n\nconst getTeam = form => {\n    const team = document.createElement('p');\n    team.textContent = `Team: ${form.team.value}`;\n    return team;\n}\n\nconst getRole = form => {\n    const role = document.createElement('p');\n    role.textContent = `Role: ${form.role.value}`;  \n    return role;\n}\n\nconst getAppearances = form => {\n    const appearances = document.createElement('p');\n    appearances.textContent = `Number of appearances: ${form.appearances.value}`;\n    return appearances;\n}\n\nconst getRuns = form => {\n    const runs = document.createElement('p');\n    runs.textContent = `Runs scored: ${form.runs.value}`;\n    return runs;\n}\n\nconst getWickets = form => {\n    const wickets = document.createElement('p');\n    wickets.textContent = `Wickets taken: ${form.wickets.value}`;\n    return wickets;\n}\n\nmodule.exports = {getName, getTeam, getRole, getAppearances, getRuns, getWickets};\n\n//# sourceURL=webpack://dom_hw/./src/helpers/cricketers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;