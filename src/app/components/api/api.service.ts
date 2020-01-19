import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3600/";
  constructor(private http:HttpClient) { }
  authrization(req) {
    var data = this.http.post(`${this.url}auth`,req);
    return data;
  }
}
