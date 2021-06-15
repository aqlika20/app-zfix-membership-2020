function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{XTwU:function(e,t,i){"use strict";i.r(t),i.d(t,"DeviceDetailPageModule",(function(){return v}));var n,o,a,r=i("ofXK"),s=i("3Pt+"),c=i("TEn/"),l=i("tyNb"),b=i("fXoL"),u=i("xS7M"),h=i("xyIN"),m=[{path:"",component:(n=function(){function e(t,i,n,o){_classCallCheck(this,e),this.device=t,this.membership=i,this.router=n,this.activatedRoute=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.getType(),this.getManufacturer(),this.getModel(),this.getRam(),this.getStorage(),this.getVersion(),this.activatedRoute.queryParams.subscribe((function(t){e.code=t.code,e.imei=t.imei,e.lokasi_beli_voucher=t.lokasi_beli_voucher,console.log(e.lokasi_beli_voucher)}))}},{key:"getType",value:function(){this.type=this.device.platform}},{key:"getVersion",value:function(){this.version=this.device.version}},{key:"getManufacturer",value:function(){this.manufacturer=this.device.manufacturer}},{key:"getModel",value:function(){this.model=this.device.model}},{key:"getRam",value:function(){var e=cordova.plugins["extended-device-information"].memory;(e=e.replace(",","."))<=256?this.ram="256 MB":e<=512?this.ram="512 MB":e<=768?this.ram="768 MB":e<=1e3?this.ram="1 GB":e<=1500?this.ram="1.5 GB":e<=2e3?this.ram="2 GB":e<=3e3?this.ram="3 GB":e<=4e3?this.ram="4 GB":e<=6e3?this.ram="6 GB":e<=8e3?this.ram="8 GB":e<=1e4?this.ram="10 GB":e<=12e3?this.ram="12 GB":e<=14e3?this.ram="14 GB":e<=16e3?this.ram="16 GB":e<=18e3?this.ram="18 GB":e<=2e4&&(this.ram="20 GB")}},{key:"getStorage",value:function(){var e=cordova.plugins["extended-device-information"].totalstorage;(e=e.replace(",","."))<=1e3?this.storage="1 GB":e<=2e3?this.storage="2 GB":e<=4e3?this.storage="4 GB":e<=8e3?this.storage="8 GB":e<=16e3?this.storage="16 GB":e<=32e3?this.storage="32 GB":e<=64e3?this.storage="64 GB":e<=128e3?this.storage="128 GB":e<=256e3?this.storage="256 GB":e<=512e3?this.storage="512 GB":e<=768e3?this.storage="768 GB":e<=1e6?this.storage="1 TB":e<=15e5?this.storage="1.5 TB":e<=2e6&&(this.storage="2 TB")}},{key:"submit",value:function(){this.membership.setMembershipActivation({code:this.code,imei:this.imei,lokasi_beli_voucher:this.lokasi_beli_voucher,type:this.type,version:this.version,manufacturer:this.manufacturer,model:this.model,ram:this.ram,storage:this.storage}),this.router.navigate(["/landing/membership-activation/device-detail/screen-testing"])}}]),e}(),n.\u0275fac=function(e){return new(e||n)(b.Lb(u.a),b.Lb(h.a),b.Lb(l.g),b.Lb(l.a))},n.\u0275cmp=b.Fb({type:n,selectors:[["app-device-detail"]],decls:42,vars:7,consts:[["mode","md",3,"translucent"],[1,"toolbar-color"],["slot","start",2,"color","white"],[2,"color","white"],["fullscreen",""],[1,"middle-page"],[1,"text-align-center",2,"text-align","center"],["position","floating"],["readonly","",3,"value"],[1,"ion-padding"],["expand","block",1,"ion-margin",3,"click"],["name","chevron-forward-outline"]],template:function(e,t){1&e&&(b.Qb(0,"ion-header",0),b.Qb(1,"ion-toolbar",1),b.Qb(2,"ion-buttons",2),b.Mb(3,"ion-back-button"),b.Pb(),b.Qb(4,"ion-title",3),b.Ac(5,"Device Detail"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content",4),b.Qb(7,"div",5),b.Qb(8,"ion-card"),b.Qb(9,"ion-card-header"),b.Qb(10,"ion-card-title"),b.Qb(11,"h3",6),b.Ac(12," Device Details"),b.Pb(),b.Pb(),b.Pb(),b.Qb(13,"ion-card-content"),b.Qb(14,"ion-item"),b.Qb(15,"ion-label",7),b.Ac(16,"Type:"),b.Pb(),b.Mb(17,"ion-input",8),b.Pb(),b.Qb(18,"ion-item"),b.Qb(19,"ion-label",7),b.Ac(20,"Android Version:"),b.Pb(),b.Mb(21,"ion-input",8),b.Pb(),b.Qb(22,"ion-item"),b.Qb(23,"ion-label",7),b.Ac(24,"Manufacturer:"),b.Pb(),b.Mb(25,"ion-input",8),b.Pb(),b.Qb(26,"ion-item"),b.Qb(27,"ion-label",7),b.Ac(28,"Model:"),b.Pb(),b.Mb(29,"ion-input",8),b.Pb(),b.Qb(30,"ion-item"),b.Qb(31,"ion-label",7),b.Ac(32,"RAM:"),b.Pb(),b.Mb(33,"ion-input",8),b.Pb(),b.Qb(34,"ion-item"),b.Qb(35,"ion-label",7),b.Ac(36,"Storage:"),b.Pb(),b.Mb(37,"ion-input",8),b.Pb(),b.Qb(38,"div",9),b.Qb(39,"ion-button",10),b.cc("click",(function(){return t.submit()})),b.Ac(40,"Uji Layar "),b.Mb(41,"ion-icon",11),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.jc("translucent",!0),b.zb(17),b.kc("value",t.type),b.zb(4),b.kc("value",t.version),b.zb(4),b.kc("value",t.manufacturer),b.zb(4),b.kc("value",t.model),b.zb(4),b.kc("value",t.ram),b.zb(4),b.kc("value",t.storage))},directives:[c.s,c.O,c.i,c.f,c.g,c.N,c.p,c.j,c.l,c.n,c.k,c.w,c.x,c.v,c.W,c.h,c.t],styles:["ion-input[_ngcontent-%COMP%]{--text-transform:capitalize}"]}),n)}],d=((a=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:a}),a.\u0275inj=b.Ib({factory:function(e){return new(e||a)},imports:[[l.j.forChild(m)],l.j]}),a),v=((o=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({factory:function(e){return new(e||o)},imports:[[r.b,s.b,c.P,d]]}),o)}}]);