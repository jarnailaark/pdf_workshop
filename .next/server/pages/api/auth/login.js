"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\auth\\login.js */ \"(api)/./src/pages/api/auth/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/login\",\n        pathname: \"/api/auth/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyU1Q3BhZ2VzJTVDYXBpJTVDYXV0aCU1Q2xvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzhEO0FBQzlEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx5REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMseURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGVjLW5leHRqcy11cGRhdGUvPzdlYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyY1xcXFxwYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFxsb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email Already Exist!\"\n        ],\n        required: [\n            true,\n            \"Email is Required!\"\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"UserName is Required!\"\n        ]\n    },\n    image: {\n        type: String\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJRiw0Q0FBTUEsQ0FBRTtJQUMzQkcsT0FBTztRQUNIQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF1QjtRQUN0Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDMUM7SUFDQUMsVUFBVTtRQUNOSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUM3QztJQUNBRSxPQUFPO1FBQ0hMLE1BQU1DO0lBQ1Y7SUFDQUssVUFBVTtRQUNOTixNQUFNQztRQUNORSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLE1BQU1JLE9BQU9WLDRDQUFNQSxDQUFDVSxJQUFJLElBQUlaLCtDQUFLQSxDQUFDLFFBQVFHO0FBRTFDLGlFQUFlUyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGVjLW5leHRqcy11cGRhdGUvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsLCBTY2hlbWEsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSAoe1xuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgJ0VtYWlsIEFscmVhZHkgRXhpc3QhJ10sXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGlzIFJlcXVpcmVkISddXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1VzZXJOYW1lIGlzIFJlcXVpcmVkISddLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxufSlcblxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsibW9kZWwiLCJTY2hlbWEiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsImltYWdlIiwicGFzc3dvcmQiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/login.js":
/*!*************************************!*\
  !*** ./src/pages/api/auth/login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _utils_databasemongo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/databasemongo */ \"(api)/./utils/databasemongo.js\");\n\n\n\n\nasync function handler(req, res) {\n    await (0,_utils_databasemongo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        try {\n            const user = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email\n            });\n            if (!user) {\n                return res.status(400).json({\n                    message: \"User not found\"\n                });\n            }\n            // Compare password\n            const isMatch = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compareSync(password, user.password);\n            if (!isMatch) {\n                return res.status(400).json({\n                    message: \"Invalid credentials\"\n                });\n            }\n            // Generate JWT\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                userId: user._id,\n                email: user.email\n            }, process.env.JWT_SECRET, {\n                expiresIn: \"1h\"\n            });\n            const user_data = {\n                user_id: user._id,\n                email: user.email,\n                username: user.username\n            };\n            res.status(200).json({\n                success: true,\n                token,\n                user_data\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Server error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Only POST requests are allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QjtBQUNHO0FBQ0U7QUFDYTtBQUcvQixlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsTUFBTUgsZ0VBQVNBO0lBRWYsSUFBSUUsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1FBRXBDLElBQUk7WUFDRixNQUFNQyxPQUFPLE1BQU1ULDREQUFZLENBQUM7Z0JBQUVNO1lBQU07WUFDeEMsSUFBSSxDQUFDRyxNQUFNO2dCQUNULE9BQU9MLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQWlCO1lBQzFEO1lBRUEsbUJBQW1CO1lBQ25CLE1BQU1DLFVBQVVoQix5REFBa0IsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtZQUMxRCxJQUFJLENBQUNPLFNBQVM7Z0JBQ1osT0FBT1YsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBc0I7WUFDL0Q7WUFFQSxlQUFlO1lBQ2YsTUFBTUcsUUFBUWpCLHdEQUFRLENBQ3BCO2dCQUFFbUIsUUFBUVQsS0FBS1UsR0FBRztnQkFBRWIsT0FBT0csS0FBS0gsS0FBSztZQUFDLEdBQ3RDYyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFDdEI7Z0JBQUVDLFdBQVc7WUFBSztZQUVwQixNQUFNQyxZQUFZO2dCQUNoQkMsU0FBVWhCLEtBQUtVLEdBQUc7Z0JBQ2xCYixPQUFPRyxLQUFLSCxLQUFLO2dCQUNqQm9CLFVBQVVqQixLQUFLaUIsUUFBUTtZQUN6QjtZQUVBdEIsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRWUsU0FBUztnQkFBTVg7Z0JBQU1RO1lBQVU7UUFDeEQsRUFBRSxPQUFPSSxPQUFPO1lBQ2R4QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWU7UUFDakQ7SUFDRixPQUFPO1FBQ0xULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFpQztJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdGVjLW5leHRqcy11cGRhdGUvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/N2RmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL3V0aWxzL2RhdGFiYXNlbW9uZ29cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENvbXBhcmUgcGFzc3dvcmRcclxuICAgICAgY29uc3QgaXNNYXRjaCA9IGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgIGlmICghaXNNYXRjaCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgSldUXHJcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICAgICAgeyB1c2VySWQ6IHVzZXIuX2lkLCBlbWFpbDogdXNlci5lbWFpbCB9LFxyXG4gICAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICAgICAgeyBleHBpcmVzSW46ICcxaCcgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1c2VyX2RhdGEgPSB7XHJcbiAgICAgICAgdXNlcl9pZCA6IHVzZXIuX2lkLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4sdXNlcl9kYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnT25seSBQT1NUIHJlcXVlc3RzIGFyZSBhbGxvd2VkJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsImp3dCIsIlVzZXIiLCJkYkNvbm5lY3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZE9uZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaXNNYXRjaCIsImNvbXBhcmVTeW5jIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiX2lkIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJ1c2VyX2RhdGEiLCJ1c2VyX2lkIiwidXNlcm5hbWUiLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/login.js\n");

/***/ }),

/***/ "(api)/./utils/databasemongo.js":
/*!********************************!*\
  !*** ./utils/databasemongo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// import mongoose from \"mongoose\";\n// let isConnected = false;\n// export const connectToDB = async () => {\n//     mongoose.set('strictQuery', true);\n//     if(isConnected){\n//         console.log(\"mongodb already connected\");\n//         return;\n//     }\n//     try {\n//         await mongoose.connect( process.env.MONGO_URL , {\n//             dbName: \"pdf_work\",\n//             useNewUrlParser: true,\n//             useUnifiedTopology: true,\n//         })\n//         isConnected = true;\n//         console.log(\"mongodb connected\");\n//     } catch (error) {\n//         console.log(error);\n//     }\n// }\n// lib/dbConnect.js\n\nconst MONGODB_URI = process.env.MONGO_URL;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used to maintain a cached connection across hot reloads in development.\r\n * This prevents connections from growing exponentially during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"mongodb connected\");\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYXRhYmFzZW1vbmdvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFtQztBQUVuQywyQkFBMkI7QUFFM0IsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUV6Qyx1QkFBdUI7QUFDdkIsb0RBQW9EO0FBQ3BELGtCQUFrQjtBQUNsQixRQUFRO0FBRVIsWUFBWTtBQUNaLDREQUE0RDtBQUM1RCxrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUN4QyxhQUFhO0FBRWIsOEJBQThCO0FBQzlCLDRDQUE0QztBQUU1Qyx3QkFBd0I7QUFDeEIsOEJBQThCO0FBRTlCLFFBQVE7QUFDUixJQUFJO0FBRUosbUJBQW1CO0FBQ2E7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBRXpDLElBQUksQ0FBQ0gsYUFBYTtJQUNoQixNQUFNLElBQUlJLE1BQ1I7QUFFSjtBQUVBOzs7Q0FHQyxHQUNELElBQUlDLFNBQVNDLE9BQU9QLFFBQVE7QUFFNUIsSUFBSSxDQUFDTSxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9QLFFBQVEsR0FBRztRQUFFUSxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNDLGFBQWFVLE1BQU1HLElBQUksQ0FBQyxDQUFDZDtZQUN2RGUsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBT2hCO1FBQ1Q7SUFDRjtJQUVBTSxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2Z0ZWMtbmV4dGpzLXVwZGF0ZS8uL3V0aWxzL2RhdGFiYXNlbW9uZ28uanM/OTIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG4vLyBsZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb25uZWN0VG9EQiA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIG1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCB0cnVlKTtcclxuXHJcbi8vICAgICBpZihpc0Nvbm5lY3RlZCl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJtb25nb2RiIGFscmVhZHkgY29ubmVjdGVkXCIpO1xyXG4vLyAgICAgICAgIHJldHVybjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoIHByb2Nlc3MuZW52Lk1PTkdPX1VSTCAsIHtcclxuLy8gICAgICAgICAgICAgZGJOYW1lOiBcInBkZl93b3JrXCIsXHJcbi8vICAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4vLyAgICAgICAgIH0pXHJcblxyXG4vLyAgICAgICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIm1vbmdvZGIgY29ubmVjdGVkXCIpO1xyXG5cclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBsaWIvZGJDb25uZWN0LmpzXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTDtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzIGluIGRldmVsb3BtZW50LlxyXG4gKiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGZyb20gZ3Jvd2luZyBleHBvbmVudGlhbGx5IGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb25nb2RiIGNvbm5lY3RlZFwiKVxyXG4gICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/databasemongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();