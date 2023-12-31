(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-setting-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/index/index.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/index/index.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Setting </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\" mode=\"md\">\n\n  <ion-item  lines=\"none\" routerLink=\"../../edit-profile\" class=\"current-user\">\n    <ion-avatar>\n      <img src=\"./assets/images/contact_mascot.png\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\">Halo, {{ user.data?.user.name }}</p>\n    </ion-label>\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon> \n  </ion-item>\n\n  <ion-card class=\"welcome-card\">\n    <ion-item routerLink=\"../../my-card\">\n      <ion-img src=\"./assets/images/setting_menu_cards.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Kartu Saya</p>\n      </ion-label>\n    </ion-item>\n\n    <!-- <ion-item routerLink=\"../../faq\">\n      <ion-img src=\"./assets/images/setting_menu_faq.png\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>FAQ</p>\n      </ion-label>\n    </ion-item> -->\n\n    <ion-item routerLink=\"../../outlet\">\n      <ion-img src=\"./assets/images/setting_menu_outlets.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Service Center ZFix</p>\n      </ion-label>\n    </ion-item> \n    \n    <ion-item routerLink=\"../../call-us\">\n      <ion-img src=\"./assets/images/setting_menu_contact.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Hubungi Kami</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n<ion-card>\n    <ion-item routerLink=\"../../privacy-policy\">\n      <ion-img src=\"./assets/images/setting_menu_privacy.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <p>Kebijakan Privasi</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item routerLink=\"../../terms\">\n      <ion-img src=\"./assets/images/setting_menu_terms.png\" class=\"img-btn\"></ion-img> \n      <ion-label class=\"ion-text-nowrap\">\n        <p>Syarat & Ketentuan</p>\n      </ion-label>\n    </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-item (click)=\"logout()\">\n    <ion-img src=\"./assets/images/setting_menu_logout.png\" class=\"img-btn\"></ion-img>\n    <ion-label class=\"ion-text-nowrap\">\n      <p>Logout</p>\n    </ion-label>\n  </ion-item>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/setting/index/index-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/landing/setting/index/index-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/setting/index/index.page.ts");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/index/index.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/setting/index/index.module.ts ***!
  \*************************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/pages/landing/setting/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/pages/landing/setting/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ }),

/***/ "./src/app/pages/landing/setting/index/index.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/landing/setting/index/index.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  width: 15%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\nion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n\nion-item {\n  padding-right: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0NOOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsOEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZy9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1nIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCBwe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmltZy1idG4ge1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWltZyB7XG4gIHdpZHRoOiAxNSU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG5pb24tbGFiZWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1idG4ge1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/setting/index/index.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/setting/index/index.page.ts ***!
  \***********************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");







let IndexPage = class IndexPage {
    constructor(authService, storage, userApiService, utilsService) {
        this.authService = authService;
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getUser();
        console.log('ionViewWillEnter');
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
                // console.log(this.user);
                // console.log("image slides", this.listImageSlides);
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    logout() {
        this.authService.logout();
    }
};
IndexPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/index/index.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.page.scss */ "./src/app/pages/landing/setting/index/index.page.scss")).default]
    })
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-setting-index-index-module-es2015.js.map