import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../components/api/api.service';
import { Router } from '@angular/router';
import {Cookie} from '../../components/cookies/cookie';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private apiservice: ApiService, public router: Router,private cookie:Cookie) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  login(login) {
    
    var req = { email: login.email, password: login.password }
    this.apiservice.authrization(req).subscribe(
        res => {
            var jwttoken=res['accessToken'];
            var reftoken=res['refreshToken'];
            this.cookie.setCookie('token',jwttoken,1);
            this.router.navigate(['dashboard']);
        },
        err => {
            Swal.fire('Oops...', err.error, 'error');
        });
}
}
