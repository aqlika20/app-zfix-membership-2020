(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <img src=\"./assets/images/2.0x/header.png\" class=\"img-header\">\n\n\n  <div class=\"middle\">\n    <ion-card>\n      <ion-card-content>\n        <form>\n          <ion-list lines=\"full\" >\n\n            <div class=\"ion-text-center ion-text-uppercase ion-margin\">\n              <h1>Register</h1>\n            </div>\n              \n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"credential.email\" pattern=\"[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"credential.name\" pattern=\"^\\w+( +\\w+)*$\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. Telepon</ion-label>\n              <ion-input name=\"contact\" type=\"text\" [(ngModel)]=\"credential.contact\" pattern=\"^\\w+( +\\w+)*$\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Alamat</ion-label>\n              <ion-input name=\"address\" type=\"text\" [(ngModel)]=\"credential.address\" pattern=\"^\\w+( +\\w+)*$\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. KTP(NIK)</ion-label>\n              <ion-input name=\"identity\" type=\"text\" [(ngModel)]=\"credential.identity\" pattern=\"^\\w+( +\\w+)*$\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Tanggal Lahir</ion-label>\n              <ion-input name=\"birth_date\" type=\"date\" [(ngModel)]=\"credential.birth_date\" pattern=\"^\\w+( +\\w+)*$\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Gender</ion-label>\n              <ion-select name=\"gender\" [(ngModel)]=\"credential.gender\">\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <!-- <ion-item>\n              <ion-list>\n                  <ion-label>Gender</ion-label>\n                  <ion-select  [(ngModel)]=\"credential.gender\" name=\"gender\" multiple=\"true\">\n                    <IonSelectOption value=\"bird\">Bird</IonSelectOption>\n                    <IonSelectOption value=\"cat\">Cat</IonSelectOption>\n                  </ion-select>\n              </ion-list>\n            </ion-item> -->\n\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"credential.password\" minlength=\"8\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label position=\"floating\">Confirm Password</ion-label>\n              <ion-input name=\"confirm_password\" type=\"password\" [(ngModel)]=\"credential.confirm_password\" minlength=\"8\" (keyup.enter)=\"hideKeyboard()\" required></ion-input>\n            </ion-item> \n  \n          </ion-list>\n  \n          <div class=\"ion-padding\">\n            <ion-button expand=\"block\" (click)=\"register()\" class=\"ion-margin\">Register</ion-button>\n          </div>\n        </form>\n        <div class=\"ion-text-center ion-margin\">\n          <p>Already have an Account? <a routerLink=\"/login\">Login</a></p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: black;\n  font-weight: bold;\n}\n\nion-card {\n  border-radius: 15xpx !important;\n}\n\n.middle {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.img-header {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWlkZGxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmltZy1oZWFkZXIge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn0iLCJoMSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTV4cHggIWltcG9ydGFudDtcbn1cblxuLm1pZGRsZSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmltZy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/authentication-api.service */ "./src/app/services/api/authentication-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utilities.service */ "./src/app/services/utilities.service.ts");





let RegisterPage = class RegisterPage {
    constructor(authApiService, authService, utilsService) {
        this.authApiService = authApiService;
        this.authService = authService;
        this.utilsService = utilsService;
        this.credential = {};
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.credential = {};
    }
    register() {
        if ((this.credential.email == null || this.credential.name == null || this.credential.contact == null || this.credential.address == null || this.credential.identity == null || this.credential.birth_date == null || this.credential.gender == null || this.credential.password == null || this.credential.confirm_password == null) || (this.credential.email.replace(/\s/g, "") == "" || this.credential.name.replace(/\s/g, "") == "" || this.credential.contact.replace(/\s/g, "") == "" || this.credential.address.replace(/\s/g, "") == "" || this.credential.identity.replace(/\s/g, "") == "" || this.credential.birth_date.replace(/\s/g, "") == "" || this.credential.gender.replace(/\s/g, "") == "" || this.credential.password.replace(/\s/g, "") == "" || this.credential.confirm_password.replace(/\s/g, "") == "")) {
            this.utilsService.showToast("Lengkapi pengisian form.");
        }
        else {
            this.utilsService.showToast('Tunggu Sebentar.');
            this.authApiService.register(this.credential).subscribe(response => {
                var raw = response;
                this.authService.login(raw.data.access_token);
            }, (err) => {
                var _a;
                var error = {};
                var errors = [];
                error = err.error.message;
                errors = (_a = err.error.messages) === null || _a === void 0 ? void 0 : _a.confirm_password[0];
                if (errors) {
                    this.utilsService.showToast(errors);
                    return;
                }
                if (error) {
                    this.utilsService.showToast(error);
                    return;
                }
            });
        }
    }
    hideKeyboard() {
        this.utilsService.hideKeyboard();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_api_authentication_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationApiService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map