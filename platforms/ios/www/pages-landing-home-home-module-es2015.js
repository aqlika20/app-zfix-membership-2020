(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"md\" [fullscreen]=\"true\">\n  <ion-item lines=\"none\" class=\"current-user\">\n    <ion-avatar>\n      <img src=\"./assets/images/contact_mascot.png\" />\n    </ion-avatar>\n    <ion-label class=\"ion-text-nowrap\">\n      <p *ngIf=\"user != {}\">Halo, {{ user.data?.user.name }}</p>\n    </ion-label>\n  </ion-item>\n\n  <!-- <ion-slides pager=\"true\">\n    <ion-slide> -->\n      <img src=\"./assets/images/2.0x/header.png\" class=\"img-header\"/>\n    <!-- </ion-slide>\n  </ion-slides> -->\n\n  <ion-card>\n    <ion-item (click)=\"goTo(1)\">\n      <ion-img src=\"./assets/images/cta_activation.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> AKTIVASIKAN MEMBERSHIP ANDA </ion-card-title>\n        <ion-card-content>\n          Satu langkah lagi untuk menikmati berbagai keuntungan Membership ZFix\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item (click)=\"goTo(2)\">\n      <ion-img src=\"./assets/images/cta_activation.png\" class=\"img-btn\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> PENGAJUAN PERBAIKAN </ion-card-title>\n        <ion-card-content>\n          Silahkan ajukan permintaan perbaikan jika gadget Anda mengalami\n          kendala\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-item (click)=\"goTo(3)\">\n      <ion-img src=\"./assets/images/cta_buy_plan.png\"></ion-img>\n      <ion-label class=\"ion-text-nowrap\">\n        <ion-card-title> LINDUNGI GADGET TERBARU ANDA </ion-card-title>\n        <ion-card-content>\n          Beli Membership ZFix secara langsung di berbagai partner resmi kami\n        </ion-card-content>\n      </ion-label>\n    </ion-item>\n  </ion-card> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/home/home-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/landing/home/home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/landing/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/home/home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/landing/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/landing/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/landing/home/home.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/landing/home/home.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  width: 80%;\n  height: 20%;\n  align-content: center;\n}\n\nion-label p {\n  margin-left: 10px;\n  font-weight: bold;\n}\n\nion-text {\n  padding-top: 5%;\n  margin-bottom: 10%;\n}\n\nion-img {\n  width: 20%;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\nion-card {\n  border-radius: 10px !important;\n}\n\nion-card-title {\n  white-space: normal;\n  padding-top: 15px;\n  margin-left: 20px;\n  color: #000080;\n  font-weight: bold;\n}\n\nion-card-content {\n  white-space: normal;\n  margin-left: 5px;\n  color: #808080;\n}\n\n.img-header {\n  width: 100%;\n}\n\n.img-btn {\n  max-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCBwe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBjb2xvcjogIzAwMDA4MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcblxyXG4uaW1nLWhlYWRlciB7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmltZy1idG4ge1xyXG4gIG1heC13aWR0aDogODBweDtcclxufSIsImlvbi1zbGlkZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG5pb24taW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMwMDAwODA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5pbWctaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctYnRuIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/landing/home/home.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/home/home.page.ts ***!
  \*************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/api */ "./src/app/config/api.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api/user-api.service */ "./src/app/services/api/user-api.service.ts");
/* harmony import */ var _services_api_app_version_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/app-version-api.service */ "./src/app/services/api/app-version-api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/api/membership-api.service */ "./src/app/services/api/membership-api.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");















let HomePage = class HomePage {
    constructor(storage, userApiService, utilsService, membership, toastCtrl, router, MembershipService, LocalNotifications, backgroundMode, appVersion, appVersionApiService, alertController) {
        this.storage = storage;
        this.userApiService = userApiService;
        this.utilsService = utilsService;
        this.membership = membership;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.MembershipService = MembershipService;
        this.LocalNotifications = LocalNotifications;
        this.backgroundMode = backgroundMode;
        this.appVersion = appVersion;
        this.appVersionApiService = appVersionApiService;
        this.alertController = alertController;
        this.user = {};
        this.claim = [];
    }
    ngOnInit() {
        // this.notification();
    }
    ionViewWillEnter() {
        this.membership.removeMembershipActivation();
        this.getUser();
        this.appVersion.getVersionNumber().then(version => {
            var check = {};
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
                this.appVersionApiService.detail(token).subscribe((response) => {
                    var _a;
                    check = response;
                    if (((_a = check.data) === null || _a === void 0 ? void 0 : _a.version) != version) {
                        this.needUpdate();
                    }
                }, (err) => {
                    check = [];
                    this.utilsService.showToast("There is a problem.");
                });
            });
        });
    }
    needUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ZFix',
                message: 'Mohon perbarui ke versi terbaru.',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            navigator["app"].exitApp();
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    getUser() {
        this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
            this.userApiService.userDetail(token).subscribe((response) => {
                this.user = response;
            }, (err) => {
                this.user = [];
                this.utilsService.showToast("There is a problem.");
            });
        });
    }
    goTo(id) {
        if (id == 1) {
            var check = {};
            this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then((token) => {
                this.userApiService.userDetail(token).subscribe((response) => {
                    var _a, _b;
                    check = response;
                    if (((_a = check.data) === null || _a === void 0 ? void 0 : _a.customer.contact) != '' && ((_b = check.data) === null || _b === void 0 ? void 0 : _b.customer.address)) {
                        this.router.navigate(['landing', 'membership-activation']);
                    }
                    else {
                        this.utilsService.showToast("Lengkapi profile dahulu.");
                        this.router.navigate(['landing', 'edit-profile']);
                    }
                }, (err) => {
                    check = [];
                    this.utilsService.showToast("There is a problem.");
                });
            });
        }
        else if (id == 2) {
            this.router.navigate(['landing', 'membership-claim']);
        }
        else if (id == 3) {
            this.router.navigate(["/landing/membership-activation/device-detail/screen-testing/device-image"]);
            this.utilsService.showToast("Coming soon.");
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _services_membership_service__WEBPACK_IMPORTED_MODULE_7__["MembershipService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_10__["MembershipApiService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"] },
    { type: _services_api_app_version_api_service__WEBPACK_IMPORTED_MODULE_5__["AppVersionApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/landing/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/api/app-version-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/api/app-version-api.service.ts ***!
  \*********************************************************/
/*! exports provided: AppVersionApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppVersionApiService", function() { return AppVersionApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/api */ "./src/app/config/api.js");




let AppVersionApiService = class AppVersionApiService {
    constructor(http) {
        this.http = http;
    }
    detail(token) {
        return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["apiUrl"] + "app-version", {
            headers: Object(_config_api__WEBPACK_IMPORTED_MODULE_3__["setToken"])(token),
        });
    }
};
AppVersionApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppVersionApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppVersionApiService);



/***/ })

}]);
//# sourceMappingURL=pages-landing-home-home-module-es2015.js.map