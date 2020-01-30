import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Common } from "../common/common";
import { Observable } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: Common) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
        const authToken = this.authService.getToken();
       // console.log(authToken);
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}