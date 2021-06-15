(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-claim-overview-overview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/overview/overview.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/overview/overview.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">Pengajuan Perbaikan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n    <h2>Bagaimana Cara Mengajukan Perbaikan Gadget di ZFix?</h2>\n  </div>\n  \n  <ion-card>\n  <ion-item lines=\"none\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"./assets/images/claim_step_1.png\">\n    </ion-thumbnail>\n    <ion-text>\n      <h5>Laporkan Kerusakan Gadget Anda</h5>\n      <a>Ketika terjadi kerugian atau kerusakan pada gadget anda, laporkanlah hal tersebut maksimal 7 hari setelah kejadian</a>\n    </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"./assets/images/claim_step_2.png\">\n    </ion-thumbnail>\n    <ion-text>\n      <h5>Isi Formulir Pengajuan Perbaikan</h5>\n      <a>Isilah formulir data pengajuan perbaikan sebagaimana tertera</a>\n    </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" style=\"padding-bottom: 40px;\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"./assets/images/claim_step_3alt.png\">\n    </ion-thumbnail>\n    <ion-text>\n      <h5>ZFix Siap Memperbaiki</h5>\n      <a>Kami akan menghubungi anda dalam waktu dekat untuk verifikasi kerusakan</a>\n    </ion-text>\n  </ion-item>\n\n<hr>\n    <div class=\"ion-text-center\" style=\"padding-top: 40px;\">\n      <a>Kami akan menghubungi anda dalam waktu dekat untuk verifikasi kerusakan</a>\n    </div>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" (click)=\"submit()\"  class=\"ion-margin\">Ajukan Perbaikan\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button expand=\"block\" (click)=\"riwayat()\"  class=\"ion-margin\">Riwayat Perbaikan\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/overview/overview-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/overview/overview-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: OverviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageRoutingModule", function() { return OverviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.page */ "./src/app/pages/landing/membership-claim/overview/overview.page.ts");




const routes = [
    {
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPage"]
    }
];
let OverviewPageRoutingModule = class OverviewPageRoutingModule {
};
OverviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OverviewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/overview/overview.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/overview/overview.module.ts ***!
  \****************************************************************************/
/*! exports provided: OverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview-routing.module */ "./src/app/pages/landing/membership-claim/overview/overview-routing.module.ts");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "./src/app/pages/landing/membership-claim/overview/overview.page.ts");







let OverviewPageModule = class OverviewPageModule {
};
OverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _overview_routing_module__WEBPACK_IMPORTED_MODULE_5__["OverviewPageRoutingModule"]
        ],
        declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
    })
], OverviewPageModule);



/***/ }),

/***/ "./src/app/pages/landing/membership-claim/overview/overview.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/overview/overview.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  width: 80%;\n  height: 20%;\n  align-content: center;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 60px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\nhr {\n  border-top: solid #bbb;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-text {\n  padding-top: 5%;\n  margin-bottom: 10%;\n}\n\nion-thumbnail {\n  width: 90px;\n  height: 90px;\n}\n\nion-thumbnail img {\n  width: auto !important;\n  height: auto !important;\n}\n\nion-img {\n  width: 20%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\na {\n  font-size: 15px;\n  color: #3c3c3a;\n}\n\nh5 {\n  color: black;\n  font-weight: bold;\n}\n\nion-card {\n  border-radius: 15px !important;\n}\n\nion-card-title {\n  white-space: normal;\n  padding-top: 5%;\n  margin-left: 10%;\n  color: #000080;\n  font-weight: bold;\n}\n\nion-card-content {\n  white-space: normal;\n  color: #808080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtY2xhaW0vb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtY2xhaW0vb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksc0JBQUE7RUFDRixpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDQUE7O0FEQ0E7RUFFQSxzQkFBQTtFQUNBLHVCQUFBO0FDQUE7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FESUE7RUFDRSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWNsYWltL292ZXJ2aWV3L292ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi52bCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBibHVlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5ocntcclxuICAgIGJvcmRlci10b3A6IHNvbGlkICNiYmI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbFxyXG57XHJcbndpZHRoOjkwcHg7XHJcbmhlaWdodDo5MHB4O1xyXG5pbWdcclxue1xyXG53aWR0aDphdXRvICFpbXBvcnRhbnQ7XHJcbmhlaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzNjM2MzYTtcclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGNvbG9yOiAjMDAwMDgwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcblxyXG4iLCJpb24tc2xpZGUge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiBzb2xpZCAjYmJiO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbmlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbWcge1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzYzNjM2E7XG59XG5cbmg1IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBjb2xvcjogIzAwMDA4MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogIzgwODA4MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/membership-claim/overview/overview.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/landing/membership-claim/overview/overview.page.ts ***!
  \**************************************************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












let OverviewPage = class OverviewPage {
    constructor(storage, uid, androidPermissions, platform, membershipApiService, utilsService, membership, navCtrl, router, activatedRoute) {
        this.storage = storage;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.membership = membership;
        this.navCtrl = navCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.imei = (params["imei"]);
        });
    }
    submit() {
        this.router.navigate([
            "/landing/membership-claim/index",
        ]);
    }
    riwayat() {
        this.router.navigate([
            "/landing/membership-claim/riwayat-pengajuan",
        ]);
    }
};
OverviewPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_3__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_6__["MembershipApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_8__["MembershipService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
OverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./overview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-claim/overview/overview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./overview.page.scss */ "./src/app/pages/landing/membership-claim/overview/overview.page.scss")).default]
    })
], OverviewPage);



/***/ })

}]);
//# sourceMappingURL=membership-claim-overview-overview-module-es2015.js.map