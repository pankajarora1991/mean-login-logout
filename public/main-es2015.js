(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Start Header -->\n    <header>\n      <nav class=\"navbar\">\n        <span class=\"navbar-brand\" href=\"#\">Login/Logout Workflow</span>\n        <span  class=\"navbar-status\">User Status : {{user.status || \"LOGGED OUT\"}} </span>\n      </nav>\n    </header>\n    <!-- End Header -->\n\n    <div class=\"primary-section\">\n      <app-toast></app-toast>\n      <router-outlet></router-outlet>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"listing-page-container\">\n\n    <h3>Login</h3>\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                <div *ngIf=\"f.username.errors.pattern\">Special Character are not allowed</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.pattern\">Special Character are not allowed</div>\n            </div>\n        </div>\n        <div class=\"form-group \">\n            <button [disabled]=\"loading\" class=\"btn btn-primary button-margin\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Login\n            </button>\n            <button [disabled]=\"loading\" class=\"btn btn-light\" routerLink=\"/welcome\">\n                Cancel\n            </button>\n        </div>\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/private/private.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/private/private.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"intro-block\">\n    <h1>Hi User!</h1>\n  </div>\n\n  <div class=\"col text-center\">\n    <a class=\"btn btn-light btn-lg\" (click)=\"logout()\" role=\"button\">Logout</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toast/toast.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toast/toast.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"styleClass\">{{message.errorMessage}}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"intro-block\">\n    <h1 class=\"display-4 text-center mb-4\">Single Page Application</h1>\n    <p class=\"lead text-center\">A Single-Page Application driving users through a simple Login/Logout workflow.</p>\n    <hr class=\"my-4\">\n  </div>\n\n  <div class=\"col text-center\">\n    <a class=\"btn btn-dark btn-lg\" routerLink=\"/login\" routerLinkActive=\"active\" role=\"button\">Login</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");







const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'private', component: _private_private_component__WEBPACK_IMPORTED_MODULE_5__["PrivateComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nbody{\n\tmin-height: 100vh;\n\tpadding-bottom: 60px;\n\tposition: relative;\n}\nheader .navbar{\n\tbackground-color: #4f7c3d;\n    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);\n\ttext-align: center;\n\tpadding: .1rem 1rem;\n}\nheader .navbar-brand{\n\tdisplay: inline-block;\n    margin: 0 auto;\n    color: #ffffff;\n    font-size: 30px;\n}\nheader .navbar-status{\n  color: #ffffff;\n}\n.primary-section{\n\tpadding: 50px 0;\n\tbackground: #ffffff;\n}\n.intro-block{\n\tpadding: 20px 0 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHlCQUF5QjtJQUN0Qix3RUFBd0U7Q0FDM0Usa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5e1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciAubmF2YmFye1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGY3YzNkO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMDUpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4xKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAuMXJlbSAxcmVtO1xufVxuXG5oZWFkZXIgLm5hdmJhci1icmFuZHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaGVhZGVyIC5uYXZiYXItc3RhdHVze1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnByaW1hcnktc2VjdGlvbntcblx0cGFkZGluZzogNTBweCAwO1xuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uaW50cm8tYmxvY2t7XG5cdHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _data_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data_model/user */ "./src/app/data_model/user.ts");





let AppComponent = class AppComponent {
    constructor(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        // current url.
        this.user = new _data_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.authservice.currentUserSub.subscribe((value) => {
            // delay to show changes in UI.
            setTimeout(() => this.user = value, 1000);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
            _private_private_component__WEBPACK_IMPORTED_MODULE_7__["PrivateComponent"],
            _toast_toast_component__WEBPACK_IMPORTED_MODULE_10__["ToastComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data_model/status.ts":
/*!**************************************!*\
  !*** ./src/app/data_model/status.ts ***!
  \**************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status["LOGGED_IN"] = "LOG IN";
    Status["LOGGED_OUT"] = "LOG OUT";
    Status["LOGGED_IN_PROGRESS"] = "LOG IN PROGRESS";
    Status["LOGGED_OUT_PROGRESS"] = "LOG OUT PROGRESS";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/data_model/user.ts":
/*!************************************!*\
  !*** ./src/app/data_model/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route) {
        const userName = this.authService.currentUserName;
        if (userName) {
            // if user logged in return true
            return true;
        }
        // redirect url if user not logged in
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-margin{\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLW1hcmdpbntcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/toast.service */ "./src/app/service/toast.service.ts");






const invalidMessage = 'Alert! Invalid username or password';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService, toastService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
                ])]
        });
    }
    // get login form in HTML.
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // clear toast service.
        this.toastService.clear();
        // invalidation form check
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .subscribe(data => {
            if (!data.id) {
                this.toastService.error(invalidMessage);
                this.loading = false;
            }
            else {
                this.toastService.success('Successful login');
                this.router.navigate(['/private']);
            }
        }, error => {
            this.toastService.error(error);
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/toast.service */ "./src/app/service/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PrivateComponent = class PrivateComponent {
    constructor(authService, toastService, router) {
        this.authService = authService;
        this.toastService = toastService;
        this.router = router;
    }
    ngOnInit() { }
    logout() {
        this.authService.logout();
        this.toastService.success('Successful logout');
        this.router.navigate(['/login']);
    }
};
PrivateComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _service_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PrivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private',
        template: __webpack_require__(/*! raw-loader!./private.component.html */ "./node_modules/raw-loader/index.js!./src/app/private/private.component.html")
    })
], PrivateComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data_model/user */ "./src/app/data_model/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_model_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data_model/status */ "./src/app/data_model/status.ts");







let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUser = new _data_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.currentUser.status = _data_model_status__WEBPACK_IMPORTED_MODULE_6__["Status"].LOGGED_OUT;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.currentUser);
    }
    get currentUserSub() {
        return this.currentUserSubject;
    }
    get currentUserName() {
        return this.currentUser.username;
    }
    login(username, password) {
        this.currentUser.status = _data_model_status__WEBPACK_IMPORTED_MODULE_6__["Status"].LOGGED_IN_PROGRESS;
        this.currentUserSubject.next(this.currentUser);
        return this.http.post(`http://localhost:3000/api/login`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(message => {
            if (message.id) {
                this.currentUser = {
                    id: message.id,
                    username,
                    password,
                    status: _data_model_status__WEBPACK_IMPORTED_MODULE_6__["Status"].LOGGED_IN,
                };
            }
            else {
                this.currentUser.status = _data_model_status__WEBPACK_IMPORTED_MODULE_6__["Status"].LOGGED_OUT;
            }
            this.currentUserSubject.next(this.currentUser);
            return message;
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        this.currentUser = new _data_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.currentUser.status = _data_model_status__WEBPACK_IMPORTED_MODULE_6__["Status"].LOGGED_OUT;
        this.currentUserSubject.next(this.currentUser);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/toast.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/toast.service.ts ***!
  \******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ToastService = class ToastService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    showToast() {
        return this.subject.asObservable();
    }
    success(message) {
        this.subject.next({ success: true, errorMessage: message });
    }
    error(message) {
        this.subject.next({ success: false, errorMessage: message });
    }
    clear() {
        this.subject.next();
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/toast/toast.component.ts":
/*!******************************************!*\
  !*** ./src/app/toast/toast.component.ts ***!
  \******************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/toast.service */ "./src/app/service/toast.service.ts");



let ToastComponent = class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
        this.subscription = this.toastService.showToast()
            .subscribe(message => {
            if (message && message.success) {
                this.styleClass = 'alert alert-success';
            }
            else {
                this.styleClass = 'alert alert-danger';
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ToastComponent.ctorParameters = () => [
    { type: _service_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/toast/toast.component.html"),
    })
], ToastComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html")
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pankaj/Documents/workspace/mean/mean-login-logout/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map