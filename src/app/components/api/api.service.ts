import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cookie } from '../../components/cookies/cookie';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3600/";
  public headers = new HttpHeaders();
  
  constructor(private http:HttpClient, public router: Router, private cookie: Cookie) { }
  authrization(req) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    var data = this.http.post(`${this.url}auth`,req);
    return data;
  }
  addSpecialization(req){
    
    var data = this.http.post(`${this.url}specialization`,req);
    return data;
  } 
  getAllSpecialization(){
    
    var data = this.http.get(`${this.url}specialization`,{});
    return data;
  } 
  updateSpecialization(id,req){
    
    var data = this.http.patch(`${this.url}specialization/`+id,req);
    return data;
  } 

  // ====================================START USER===============================
  addUser(req){
    var data=this.http.post(`${this.url}users`,req);
    return data;
  }
  getAllUser(){
    
    var data = this.http.get(`${this.url}users`,{});
    return data;
  }
  getUserbyid(){
    
    var data = this.http.get(`${this.url}usersbyid`,{});
    return data;
  }  
  addUserProfile(req){
    var data=this.http.post(`${this.url}usersprofile`,req);
    return data;
  }
  getAllUserProfile(){
    
    var data = this.http.get(`${this.url}usersprofilebyid`,{});
    return data;
  }
  updateUserProfile(id,req){
    
    var data = this.http.patch(`${this.url}usersprofile/`+id,req);
    return data;
  } 
  // ====================================END USER===============================
  // ====================================START DISEASE===============================
  addDiease(req){
    
    var data = this.http.post(`${this.url}disease`,req);
    return data;
  } 
  getAllDiseases(){
    
    var data = this.http.get(`${this.url}disease`,{});
    return data;
  } 
  updateDieases(id,req){
    
    var data = this.http.patch(`${this.url}disease/`+id,req);
    return data;
  } 
  // ====================================END DISEASE===============================
    // ====================================START DISEASE STAGE===============================
    addDieaseStage(req){
    
      var data = this.http.post(`${this.url}diseasestage`,req);
      return data;
    } 
    getAllDiseaseStage(){
      
      var data = this.http.get(`${this.url}diseasestage`,{});
      return data;
    } 
    updateDieaseStage(id,req){
      
      var data = this.http.patch(`${this.url}diseasestage/`+id,req);
      return data;
    } 
    getAllDiseaseStagebyDID(id){
      
      var data = this.http.get(`${this.url}diseaseId/`+id,{});
      return data;
    } 
    // ====================================END DISEASE STAGE===============================
    // ====================================START MEDICINE===============================
    addMedicine(req){
    
      var data = this.http.post(`${this.url}medicine`,req);
      return data;
    } 
    getMedicine(){
      
      var data = this.http.get(`${this.url}medicine`,{});
      return data;
    } 
    updateMedicine(id,req){
      
      var data = this.http.patch(`${this.url}medicine/`+id,req);
      return data;
    } 
    getMedicineByDSID(req){
      console.log(req)
      var data = this.http.post(`${this.url}medicinebyDSID`,req);
      return data;
    } 
    // ====================================END MEDICINE===============================
}
