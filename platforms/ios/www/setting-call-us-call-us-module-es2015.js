(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-call-us-call-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Hubungi Kami</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-content>\n      <p align=\"center\"><ion-img src=\"./assets/images/5.0x/contact_mascot.png\" width=\"128\"></ion-img></p>\n        <!-- <ion-img src=\"./assets/images/5.0x/contact_mascot.png\"></ion-img> -->\n      <div class=\"ion-text-center\">\n        Kami Siap Membantu Anda\n      </div>\n\n      <ion-text>\n        <p align=\"center\">\n          Silahkan menghubungi kami melalui beberapa pilihan opsi di bawah ini. Customer Service\n          kami siap melayani segala pernyataan setiap saat.\n        </p>\n      </ion-text>\n\n      <ion-grid style=\"padding-left: 20px; padding-top: 20px;\">\n        <ion-row> \n          <div class=\"span6\" style=\"padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"tel:+62 822-2999-1919\"><img src=\"./assets/images/3.0x/contact_call_icon.png\" /></a>\n            <!-- <img href=\"tel:555-555-5555\" src=\"./assets/images/3.0x/contact_call_icon.png\"> -->\n            <h3>Call</h3>\n          </div>\n        \n          <div class=\"span6\" style=\"padding-left:13px; padding-right:13px; border-right: 1px solid #ccc;\">\n            <a href=\"https://api.whatsapp.com/send?phone=6282229991919\" ><img src=\"./assets/images/3.0x/contact_chat_icon.png\"></a>\n              <h3>Chat</h3>\n          </div>\n\n          <div class=\"span6\" style=\"padding-left: 13px;\">\n            <a href=\"mailto:cs@zfix.id\" ><img src=\"./assets/images/3.0x/contact_email_icon.png\"></a>\n            <h3>Email</h3>\n          </div>\n\n          <!-- <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_call_icon.png\">\n              <h3>Call</h3>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_chat_icon.png\">\n              <h3>Chat</h3>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <img src=\"./assets/images/3.0x/contact_email_icon.png\">\n              <h3>Email</h3>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/setting/call-us/call-us-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/landing/setting/call-us/call-us-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CallUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageRoutingModule", function() { return CallUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/setting/call-us/call-us.page.ts");




const routes = [
    {
        path: '',
        component: _call_us_page__WEBPACK_IMPORTED_MODULE_3__["CallUsPage"]
    }
];
let CallUsPageRoutingModule = class CallUsPageRoutingModule {
};
CallUsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/call-us/call-us.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/setting/call-us/call-us.module.ts ***!
  \*****************************************************************/
/*! exports provided: CallUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function() { return CallUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./call-us-routing.module */ "./src/app/pages/landing/setting/call-us/call-us-routing.module.ts");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-us.page */ "./src/app/pages/landing/setting/call-us/call-us.page.ts");







let CallUsPageModule = class CallUsPageModule {
};
CallUsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _call_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallUsPageRoutingModule"]
        ],
        declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })
], CallUsPageModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/call-us/call-us.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/setting/call-us/call-us.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\nion-card {\n  border-radius: 15px !important;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n  display: flex;\n  width: 90% !important;\n  margin: 5% !important;\n}\n\n.ion-text-center {\n  padding-top: 20px;\n  font-weight: bold;\n  color: black;\n}\n\nion-text {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  text-align: center;\n  color: black;\n}\n\nion-img {\n  height: 250px;\n}\n\nimg {\n  width: 55px;\n  height: 55px;\n}\n\nh3 {\n  margin-left: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2NhbGwtdXMvY2FsbC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHRTtFQUNFLGFBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2NhbGwtdXMvY2FsbC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4gICAgXHJcbmlvbi1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIFxyXG4uaW9uLXRleHQtY2VudGVye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbiAgaW9uLWltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNSUgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/setting/call-us/call-us.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing/setting/call-us/call-us.page.ts ***!
  \***************************************************************/
/*! exports provided: CallUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPage", function() { return CallUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CallUsPage = class CallUsPage {
    constructor() { }
    ngOnInit() {
    }
};
CallUsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-call-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./call-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/call-us/call-us.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./call-us.page.scss */ "./src/app/pages/landing/setting/call-us/call-us.page.scss")).default]
    })
], CallUsPage);



/***/ })

}]);
//# sourceMappingURL=setting-call-us-call-us-module-es2015.js.map