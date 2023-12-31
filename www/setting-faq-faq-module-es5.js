function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-faq-faq-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingSettingFaqFaqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-buttons slot=\"start\" style=\"color: white;\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">FAQ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vl\" style=\"font-family: 'Arial' !important; margin-left: 10px;\">\n    <h2>Punya Pertanyaan Seputar ZFix?</h2>\n  </div>\n  <ion-text>\n  <p>Berikut merupakan pertanyaan yang paling sering diajukan seputar ZFix dan produknya</p>\n  </ion-text>\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/faq/faq-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/landing/setting/faq/faq-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FaqPageRoutingModule */

  /***/
  function srcAppPagesLandingSettingFaqFaqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () {
      return FaqPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/pages/landing/setting/faq/faq.page.ts");

    var routes = [{
      path: '',
      component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }];

    var FaqPageRoutingModule = function FaqPageRoutingModule() {
      _classCallCheck(this, FaqPageRoutingModule);
    };

    FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FaqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/faq/faq.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/setting/faq/faq.module.ts ***!
    \*********************************************************/

  /*! exports provided: FaqPageModule */

  /***/
  function srcAppPagesLandingSettingFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () {
      return FaqPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faq-routing.module */
    "./src/app/pages/landing/setting/faq/faq-routing.module.ts");
    /* harmony import */


    var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/pages/landing/setting/faq/faq.page.ts");

    var FaqPageModule = function FaqPageModule() {
      _classCallCheck(this, FaqPageModule);
    };

    FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]],
      declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })], FaqPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/faq/faq.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/setting/faq/faq.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingSettingFaqFaqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  justify-content: center;\n  --padding-top: 20px;\n}\n\n.vl {\n  border-left: 6px solid blue;\n  height: 60px;\n}\n\nh2 {\n  padding-left: 10px;\n}\n\np {\n  padding-left: 10px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL3NldHRpbmcvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvc2V0dGluZy9mYXEvZmFxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9zZXR0aW5nL2ZhcS9mYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnZsIHtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgYmx1ZTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5oMiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxucCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/setting/faq/faq.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/landing/setting/faq/faq.page.ts ***!
    \*******************************************************/

  /*! exports provided: FaqPage */

  /***/
  function srcAppPagesLandingSettingFaqFaqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPage", function () {
      return FaqPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FaqPage = /*#__PURE__*/function () {
      function FaqPage() {
        _classCallCheck(this, FaqPage);
      }

      _createClass(FaqPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqPage;
    }();

    FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faq.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/setting/faq/faq.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faq.page.scss */
      "./src/app/pages/landing/setting/faq/faq.page.scss"))["default"]]
    })], FaqPage);
    /***/
  }
}]);
//# sourceMappingURL=setting-faq-faq-module-es5.js.map