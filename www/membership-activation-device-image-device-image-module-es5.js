function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membership-activation-device-image-device-image-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingMembershipActivationDeviceImageDeviceImagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar class=\"toolbar-color\">\n    <ion-title style=\"color: white\">Device Image</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"middle-page\">\n    <ion-card>\n      <ion-card-content>\n        <form>\n          <div class=\"ion-text-center ion-margin\">\n            <h1>Foto Gadget kamu</h1>\n          </div>\n          <div class=\"ion-text-center ion-margin\">\n            <p>Aktifkan membership kamu dengan foto Gadget kamu secara jelas menggunakan <b>Gadget lain</b></p>\n          </div>\n\n          <h3>Kode Unik</h3>\n\n          <ion-card>\n          <h1>{{code}}</h1>\n          </ion-card>\n\n          <div class=\"ion-text-center ion-margin\">\n            <p>Kode Unik, Stiker dan Kondisi Layar harus terlihat jelas saat foto cek fisik untuk verifikasi</p>\n          </div>\n\n          <div class=\"ion-text-center ion-margin\">\n            <p>Akses link di bawah ini untuk mengupload foto cek fisik untuk verifikasi</p>\n          </div>\n\n          <ion-card>\n            <ion-input [(ngModel)]=\"link\" name=\"link\" readonly></ion-input>\n          </ion-card>\n<!--           \n        <ion-card>\n          <ion-textarea [(ngModel)]=\"CopyText\" name=\"CopyText\"  disabled readonly></ion-textarea>\n        </ion-card> -->\n        <ion-button expand=\"block\" size=\"small\" float-right (click)=\"share()\">Bagikan Link</ion-button>\n\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DeviceImagePageRoutingModule */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceImageDeviceImageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceImagePageRoutingModule", function () {
      return DeviceImagePageRoutingModule;
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


    var _device_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-image.page */
    "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts");

    var routes = [{
      path: '',
      component: _device_image_page__WEBPACK_IMPORTED_MODULE_3__["DeviceImagePage"]
    }];

    var DeviceImagePageRoutingModule = function DeviceImagePageRoutingModule() {
      _classCallCheck(this, DeviceImagePageRoutingModule);
    };

    DeviceImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceImagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-image/device-image.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-image/device-image.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DeviceImagePageModule */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceImageDeviceImageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceImagePageModule", function () {
      return DeviceImagePageModule;
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


    var _device_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device-image-routing.module */
    "./src/app/pages/landing/membership-activation/device-image/device-image-routing.module.ts");
    /* harmony import */


    var _device_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-image.page */
    "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts");

    var DeviceImagePageModule = function DeviceImagePageModule() {
      _classCallCheck(this, DeviceImagePageModule);
    };

    DeviceImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceImagePageRoutingModule"]],
      declarations: [_device_image_page__WEBPACK_IMPORTED_MODULE_6__["DeviceImagePage"]]
    })], DeviceImagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-image/device-image.page.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-image/device-image.page.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceImageDeviceImagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  height: auto;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\nh1 {\n  text-align: center;\n  margin: 0 auto;\n  font-weight: bold;\n  color: black;\n}\n\nh3 {\n  text-align: center;\n  margin: 0 auto;\n}\n\nion-input {\n  text-align: center;\n  margin: 0 auto;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNhbi9EZXNrdG9wL3pmaXgtYXBwLXY1NDQvc3JjL2FwcC9wYWdlcy9sYW5kaW5nL21lbWJlcnNoaXAtYWN0aXZhdGlvbi9kZXZpY2UtaW1hZ2UvZGV2aWNlLWltYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vZGV2aWNlLWltYWdlL2RldmljZS1pbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9tZW1iZXJzaGlwLWFjdGl2YXRpb24vZGV2aWNlLWltYWdlL2RldmljZS1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59IiwiaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/membership-activation/device-image/device-image.page.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/landing/membership-activation/device-image/device-image.page.ts ***!
    \***************************************************************************************/

  /*! exports provided: DeviceImagePage */

  /***/
  function srcAppPagesLandingMembershipActivationDeviceImageDeviceImagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceImagePage", function () {
      return DeviceImagePage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../config/api */
    "./src/app/config/api.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api/membership-api.service */
    "./src/app/services/api/membership-api.service.ts");
    /* harmony import */


    var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/utilities.service */
    "./src/app/services/utilities.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DeviceImagePage = /*#__PURE__*/function () {
      function DeviceImagePage(storage, camera, membershipApiService, utilsService, router, activatedRoute, preview, socialSharing, clipboard, actionSheetController, platform, alertController, navCtrl, location) {
        _classCallCheck(this, DeviceImagePage);

        this.storage = storage;
        this.camera = camera;
        this.membershipApiService = membershipApiService;
        this.utilsService = utilsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.preview = preview;
        this.socialSharing = socialSharing;
        this.clipboard = clipboard;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.location = location;
        this.link = 'https://zfix.id/code/';
        this.response = {};
      }

      _createClass(DeviceImagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.screenHasProblem = params["screenHasProblem"];
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.getCode();
          this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["interval"])(2000).subscribe(function (x) {
            _this2.checkCode();
          });
          this.backButton();
        }
      }, {
        key: "share",
        value: function share() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Bagikan Link',
                      buttons: [{
                        text: 'Share via Whatsapp',
                        icon: 'logo-whatsapp',
                        cssClass: 'whatsappIcon',
                        handler: function handler() {
                          _this3.socialSharing.shareViaWhatsApp(_this3.link);
                        }
                      }, {
                        text: 'Copy Link',
                        icon: 'copy',
                        cssClass: 'copyIcon',
                        handler: function handler() {
                          _this3.clipboard.copy(_this3.link);
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCode",
        value: function getCode() {
          var _this4 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            _this4.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["membershipActivationKey"]).then(function (data) {
              var membershipActivation = {
                voucher_key: data.code,
                imei: data.imei,
                device_type: data.type,
                device_version: data.version,
                device_manufacturer: data.manufacturer,
                device_model: data.model,
                device_ram: data.ram,
                device_storage: data.storage,
                lokasi_beli_voucher: data.lokasi_beli_voucher,
                screen_has_problem: _this4.screenHasProblem
              };
              console.log(membershipActivation);

              _this4.membershipApiService.activation(token, membershipActivation).subscribe(function (response) {
                _this4.response = response;
                _this4.code = _this4.response.data.code;
                _this4.link = _this4.link + _this4.code;
              }, function (err) {
                console.log(err);

                _this4.utilsService.showToast(err.error.message);

                _this4.router.navigate(['landing', 'home']);
              });
            });
          });
        }
      }, {
        key: "checkCode",
        value: function checkCode() {
          var _this5 = this;

          this.storage.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]).then(function (token) {
            var membershipActivation = {
              request_code: -1,
              code: _this5.code
            };
            var status = {};

            _this5.membershipApiService.check(token, membershipActivation).subscribe(function (response) {
              status = response;
              if (status.received == true) _this5.utilsService.done("Data sudah diterima dan sedang diproses.");

              _this5.subscription.unsubscribe();
            }, function (err) {// console.log(err)
            });
          });
        }
      }, {
        key: "backButton",
        value: function backButton() {
          var _this6 = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            if (_this6.location.isCurrentPathEqualTo('/landing/membership-activation/device-detail/screen-testing/device-image')) {
              _this6.back();
            } else {
              // Navigate to back page
              console.log('Navigate to back page');

              _this6.location.back();
            }
          });
        }
      }, {
        key: "back",
        value: function back() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'ZFix',
                      message: 'Apakah anda yakin ingin kembali ke halaman awal?',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'yourClass',
                        handler: function handler() {}
                      }, {
                        text: 'Iya',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this8 = this;

                            var alert;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.alertController.create({
                                      header: 'ZFix',
                                      message: 'Jika anda kembali code voucher sudah tidak dapat digunakan kembali.',
                                      backdropDismiss: false,
                                      buttons: [{
                                        text: 'Tidak',
                                        role: 'cancel',
                                        handler: function handler() {}
                                      }, {
                                        text: 'Iya',
                                        handler: function handler() {
                                          _this8.navCtrl.navigateForward(["landing", 'home']);
                                        }
                                      }]
                                    });

                                  case 2:
                                    alert = _context2.sent;
                                    _context2.next = 5;
                                    return alert.present();

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return DeviceImagePage;
    }();

    DeviceImagePage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _services_api_membership_api_service__WEBPACK_IMPORTED_MODULE_5__["MembershipApiService"]
      }, {
        type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_8__["CameraPreview"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]
      }];
    };

    DeviceImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-image',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./device-image.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/membership-activation/device-image/device-image.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./device-image.page.scss */
      "./src/app/pages/landing/membership-activation/device-image/device-image.page.scss"))["default"]]
    })], DeviceImagePage); // copyText(){
    //   this.clipboard.copy(this.CopyTextAreaText);
    // }
    // ShareGeneric(parameter){
    //   const url = this.link
    //   const text = parameter+'\n'
    //   this.socialSharing.share(text, 'MEDIUM', null, url)
    // }
    // ShareWhatsapp(){
    //   this.socialSharing.shareViaWhatsApp(this.link)
    // }

    /***/
  }
}]);
//# sourceMappingURL=membership-activation-device-image-device-image-module-es5.js.map