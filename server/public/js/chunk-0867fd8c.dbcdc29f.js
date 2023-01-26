(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0867fd8c"],{1195:function(e,a,s){e.exports=s.p+"img/avatar.0eec5455.png"},c7e0:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e._self._c;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("v-card",{staticStyle:{width:"100%","max-width":"600px"}},[a("v-card-text",[a("div",{staticClass:"mb-4 d-flex justify-center"},[a("v-avatar",{staticStyle:{border:"5px solid rgba(0, 0, 0, 0.1)"},attrs:{size:"150"}},[a("img",{attrs:{src:s("1195"),alt:"Avatar"}})])],1),a("v-tabs",{attrs:{color:"primary",centered:"","background-color":"transparent","hide-slider":"",height:32},model:{value:e.activeTab,callback:function(a){e.activeTab=a},expression:"activeTab"}},e._l(e.tabItems,(function(s){return a("v-tab",{key:s},[e._v(" "+e._s(s)+" ")])})),1),a("v-tabs-items",{model:{value:e.activeTab,callback:function(a){e.activeTab=a},expression:"activeTab"}},e._l(e.tabItems,(function(e){return a("v-tab-item",{key:e},[a("profile"===e?"ProfileForm":"PasswordForm")],1)})),1)],1)],1)],1)],1)],1)},r=[],n=function(){var e=this,a=e._self._c;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[a("v-text-field",{attrs:{color:"primary",label:"Email",disabled:"",rules:e.rules.email,required:""},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),a("v-text-field",{attrs:{color:"primary",label:"Name",rules:e.rules.name,required:""},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}}),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary",loading:e.loading},nativeOn:{click:function(a){return e.handleUpdate.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:""}},[e._v("mdi-check")]),e._v(" Save Changes ")],1),a("v-snackbar",{attrs:{timeout:"3000",color:e.snackBar.type,top:"",right:""},model:{value:e.snackBar.enabled,callback:function(a){e.$set(e.snackBar,"enabled",a)},expression:"snackBar.enabled"}},[e._v(" "+e._s(e.snackBar.message)+" ")])],1)},o=[],i={name:"ProfileForm",components:{},data(){return{form:{name:this.$store.state.auth.user.name,email:this.$store.state.auth.user.email},rules:{name:[e=>!!e||"Name is required"],email:[e=>!!e||"Email is required",e=>!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"]},valid:!0,loading:!1,snackBar:{type:"default",enabled:!1,message:""}}},methods:{handleUpdate(){this.loading=!0,this.$http.post("user/updateProfile",this.form).then(e=>{if(console.log(e),200===e.status){this.loading=!1;const e=this.$store.state.auth;e.user.name=this.form.name,this.$store.dispatch("setAuth",e),this.snackBar.type="success",this.snackBar.enabled=!0,this.snackBar.message="Successfully updated the profile"}}).catch(e=>{this.snackBar.type="error",this.snackBar.enabled=!0,this.snackBar.message="Cannot update profile"})}}},l=i,c=s("2877"),d=Object(c["a"])(l,n,o,!1,null,null,null),u=d.exports,m=function(){var e=this,a=e._self._c;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(a){return a.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[a("v-text-field",{attrs:{"append-icon":e.showCurrent?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.showCurrent?"text":"password",name:"current-password",label:"Current Password"},on:{"click:append":function(a){e.showCurrent=!e.showCurrent}},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}}),a("v-text-field",{attrs:{"append-icon":e.showNew?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min,e.rules.duplicate],type:e.showNew?"text":"password",name:"new-password",label:"New Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(a){e.showNew=!e.showNew}},model:{value:e.form.newPassword,callback:function(a){e.$set(e.form,"newPassword",a)},expression:"form.newPassword"}}),a("v-text-field",{attrs:{"append-icon":e.showConfirm?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min,e.rules.confirm],type:e.showConfirm?"text":"password",name:"confirm-password",label:"Confirm Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(a){e.showConfirm=!e.showConfirm}},model:{value:e.form.confirmPassword,callback:function(a){e.$set(e.form,"confirmPassword",a)},expression:"form.confirmPassword"}}),a("v-btn",{staticClass:"mt-3",attrs:{color:"primary",loading:e.loading},nativeOn:{click:function(a){return e.handleUpdate.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:""}},[e._v("mdi-check")]),e._v(" Save Changes ")],1),a("v-snackbar",{attrs:{timeout:"3000",color:e.snackBar.type,top:"",right:""},model:{value:e.snackBar.enabled,callback:function(a){e.$set(e.snackBar,"enabled",a)},expression:"snackBar.enabled"}},[e._v(" "+e._s(e.snackBar.message)+" ")])],1)},f=[],p={name:"ProfileForm",components:{},data(){return{form:{password:"",newPassword:"",confirmPassword:""},rules:{required:e=>!!e||"This field is Required.",min:e=>!e||e.length>=8||"Min 8 characters",duplicate:e=>e!==this.form.password||"You are using same password!",confirm:e=>e===this.form.newPassword||"The password confirmation does not match."},showCurrent:!1,showNew:!1,showConfirm:!1,valid:!0,loading:!1,snackBar:{type:"default",enabled:!1,message:""}}},methods:{async handleUpdate(){this.loading=!0,this.$http.post("user/updatePassword",this.form).then(e=>{this.loading=!1,"error"===e.data.status?(this.snackBar.type="error",this.snackBar.enabled=!0,this.snackBar.message=e.data.message):(this.snackBar.type="success",this.snackBar.enabled=!0,this.snackBar.message=e.data.message)}).catch(e=>{this.snackBar.type="error",this.snackBar.enabled=!0,this.snackBar.message="Cannot update password"})}}},h=p,v=Object(c["a"])(h,m,f,!1,null,null,null),w=v.exports,b={pageTitle:"My Profile",components:{ProfileForm:u,PasswordForm:w},data(){return{activeTab:null,tabItems:["profile","password"]}},methods:{}},k=b,y=Object(c["a"])(k,t,r,!1,null,null,null);a["default"]=y.exports}}]);
//# sourceMappingURL=chunk-0867fd8c.dbcdc29f.js.map