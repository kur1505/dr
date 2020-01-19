var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ApiService } from '../../components/api/api.service';
import { Router } from '@angular/router';
import { Cookie } from '../../components/cookies/cookie';
import Swal from 'sweetalert2';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiservice, router, cookie) {
        this.apiservice = apiservice;
        this.router = router;
        this.cookie = cookie;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.login = function (login) {
        var _this = this;
        var req = { email: login.email, password: login.password };
        this.apiservice.authrization(req).subscribe(function (res) {
            var jwttoken = res['accessToken'];
            var reftoken = res['refreshToken'];
            _this.cookie.setCookie('token', jwttoken, 1);
            _this.router.navigate(['dashboard']);
        }, function (err) {
            Swal.fire('Oops...', err.error, 'error');
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [ApiService, Router, Cookie])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map