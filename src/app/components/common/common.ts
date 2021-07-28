import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cookie } from '../../components/cookies/cookie';
@Injectable({
  providedIn: 'root'
})
export class Common {
  url = "https://hkhdrapi.herokuapp.com/";
  public headers = new HttpHeaders();
  
  constructor(public router: Router, private cookie: Cookie) { }
  getToken() {
    return this.cookie.getCookie('access_token');
  }

  getisLoggedIn(): boolean {
    let authToken = this.cookie.getCookie('access_token');
    return (authToken !== null && authToken!=="") ? true : false;
  }

  doLogout() {
    let removeToken = this.cookie.deleteCookie('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
}
