(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Qc79:function(t,e,n){"use strict";n.r(e),n.d(e,"IndexPageModule",(function(){return h}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),b=n("Iuce"),c=n("fXoL"),a=n("ej43"),u=n("e8h1"),g=n("sA++"),l=n("tNc6");function m(t,e){if(1&t&&(c.Qb(0,"p"),c.Ac(1),c.Pb()),2&t){const t=c.ec();c.zb(1),c.Cc("Halo, ",null==t.user.data?null:t.user.data.user.name,"")}}const p=function(){return{}},P=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.authService=t,this.storage=e,this.userApiService=n,this.utilsService=i,this.user={}}ngOnInit(){}ionViewWillEnter(){this.getUser(),console.log("ionViewWillEnter")}getUser(){this.storage.get(b.d).then(t=>{this.userApiService.userDetail(t).subscribe(t=>{this.user=t},t=>{this.user=[],this.utilsService.showToast("There is a problem.")})})}logout(){this.authService.logout()}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(a.a),c.Lb(u.b),c.Lb(g.a),c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-index"]],decls:40,vars:3,consts:[["mode","md",3,"fullscreen"],["lines","none","routerLink","../../edit-profile",1,"current-user"],["src","./assets/images/contact_mascot.png"],[1,"ion-text-nowrap"],[4,"ngIf"],["name","chevron-forward-outline"],[1,"welcome-card"],["routerLink","../../my-card"],["src","./assets/images/setting_menu_cards.png",1,"img-btn"],["routerLink","../../outlet"],["src","./assets/images/setting_menu_outlets.png",1,"img-btn"],["routerLink","../../call-us"],["src","./assets/images/setting_menu_contact.png",1,"img-btn"],["routerLink","../../privacy-policy"],["src","./assets/images/setting_menu_privacy.png",1,"img-btn"],["routerLink","../../terms"],["src","./assets/images/setting_menu_terms.png",1,"img-btn"],[3,"click"],["src","./assets/images/setting_menu_logout.png",1,"img-btn"]],template:function(t,e){1&t&&(c.Qb(0,"ion-content",0),c.Qb(1,"ion-item",1),c.Qb(2,"ion-avatar"),c.Mb(3,"img",2),c.Pb(),c.Qb(4,"ion-label",3),c.yc(5,m,2,1,"p",4),c.Pb(),c.Mb(6,"ion-icon",5),c.Pb(),c.Qb(7,"ion-card",6),c.Qb(8,"ion-item",7),c.Mb(9,"ion-img",8),c.Qb(10,"ion-label",3),c.Qb(11,"p"),c.Ac(12,"Kartu Saya"),c.Pb(),c.Pb(),c.Pb(),c.Qb(13,"ion-item",9),c.Mb(14,"ion-img",10),c.Qb(15,"ion-label",3),c.Qb(16,"p"),c.Ac(17,"Service Center ZFix"),c.Pb(),c.Pb(),c.Pb(),c.Qb(18,"ion-item",11),c.Mb(19,"ion-img",12),c.Qb(20,"ion-label",3),c.Qb(21,"p"),c.Ac(22,"Hubungi Kami"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(23,"ion-card"),c.Qb(24,"ion-item",13),c.Mb(25,"ion-img",14),c.Qb(26,"ion-label",3),c.Qb(27,"p"),c.Ac(28,"Kebijakan Privasi"),c.Pb(),c.Pb(),c.Pb(),c.Qb(29,"ion-item",15),c.Mb(30,"ion-img",16),c.Qb(31,"ion-label",3),c.Qb(32,"p"),c.Ac(33,"Syarat & Ketentuan"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(34,"ion-card"),c.Qb(35,"ion-item",17),c.cc("click",(function(){return e.logout()})),c.Mb(36,"ion-img",18),c.Qb(37,"ion-label",3),c.Qb(38,"p"),c.Ac(39,"Logout"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.jc("fullscreen",!0),c.zb(5),c.jc("ngIf",e.user!=c.mc(2,p)))},directives:[s.p,s.w,s.U,r.h,s.e,s.x,i.j,s.t,s.j,s.u],styles:["ion-img[_ngcontent-%COMP%]{width:15%;padding-top:3%;padding-bottom:3%}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:10px;font-weight:700}.img-btn[_ngcontent-%COMP%]{max-width:80px}ion-item[_ngcontent-%COMP%]{padding-right:20px!important}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.j.forChild(P)],r.j]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.b,s.P,d]]}),t})()}}]);