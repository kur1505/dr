import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from './grid.model'; 
import { ApiService } from 'src/app/components/api/api.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddPatientComponent implements OnInit {
  public userArray:any={};
  public userTimeModel;
  public diseasesArray;
  public diseasesStageArray;
  public medicineArray;
  public gender;
  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  public type;
  public DiseaseStage;
  public Medicine;
  public hide=true;
  public Vhide=true;
  public vaccination;
  public model1;
  public age;
  public modelVFDate;
  public model;
  constructor(private apiservice: ApiService, public router: Router, public config :NgbTimepickerConfig) {
    //config.seconds = true;
    config.spinners = false;
   
   }

  ngOnInit() {
    this.gender="0";
    this.userArray.userTimeModel={hour: 13, minute: 30, second: 0};
    this.newDynamic = {MeName:"",HMTimes: "", NODays: "",SPInstruction:""};  
    this.dynamicArray.push(this.newDynamic); 
    this.getdiseases();
    this.type = "0";
    this.DiseaseStage="0"; 
    this.Medicine="0"
    this.getvaccination(); 
    console.log(this.model1);
  }
  addRow(index) {    
    console.log(this.dynamicArray);  
    this.newDynamic = {MeName:"",HMTimes: "", NODays: "",SPInstruction:""};  
    this.dynamicArray.push(this.newDynamic);  
    return true;  
}  
  
deleteRow(index) {  
    if(this.dynamicArray.length ==1) {  
      Swal.fire("Can't delete the row when there is only one row", 'Warning',"error");  
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
        Swal.fire('Row deleted successfully', 'Delete row',"success");  
        return true;  
    }  
  }
  getdiseases() {
    this.apiservice.getAllDiseases().subscribe(
      res => {
        this.diseasesArray = res;
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  getdiseasestage() {
    
    let Did=$("#ddl_Disease").val();
    this.apiservice.getAllDiseaseStagebyDID(Did).subscribe(
      res => {
       
        this.diseasesStageArray = res;
        this.DiseaseStage="0";
        this.getmedicine(false);
        //console.log(res);
      },
      err => {
      });
  }
  getmedicine(flag){
    let Did=$("#ddl_Disease").val();
    let DSid=null;
    if(flag){
       DSid=$("#ddl_DiseaseStage").val();
    }
    
    this.apiservice.getMedicineByDSID({ddl_Disease:Did,ddl_DiseaseStage:DSid}).subscribe(res=>{
      this.medicineArray=res;
      this.Medicine=0;
    })
  }
  getvaccination(){
    this.apiservice.getAllVaccination().subscribe(res=>{
      console.log(res);
      this.vaccination=res;
    })
  }
  hideoption(option,value){
    if(value===1){
      this.hide=option;
    }
    else if(value===2){
      this.Vhide=option;
    }
  }
  addpatient(value) {
    value.age=this.age;
    value.followupNeed=this.hide
    value.vaccinationRequired=this.Vhide
    value.dosasge=this.dynamicArray
    console.log(value);
   console.log(this.dynamicArray);
    this.apiservice.addPatient(value).subscribe(res => {
      if (res["Success"]) {
        Swal.fire('Success', res["Message"], 'success').then(function () {
          location.reload();
        });
      }
    });
  }
  convertobjtodate(dId){
    // if(dId===1){
    //   this.model=new Date(this.model.month+"/"+this.model.day+"/"+this.model.year);
    // }
    // if(dId===2){
    //   this.modelVFDate=new Date(this.modelVFDate.month+"/"+this.modelVFDate.day+"/"+this.modelVFDate.year);
    // }
  }
  setage(){
    debugger;
    var date=new Date();
    var mn=date.getMonth()+1-this.model1.month;
    var dd=date.getDate()-this.model1.day;
    var yr=date.getFullYear()-this.model1.year;
    var dtaa=new Date(date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear())
    var age=new Date(this.model1.month+"/"+this.model1.day+"/"+this.model1.year);
    //this.model1=age;
    var Difference_In_Time = age.getTime() - dtaa.getTime();
    console.log(dd+'DY'+mn+'MN'+yr+'YR');
    this.age='';
    if(dd>0){
      this.age +=dd+'DY '; 
    }
    if(mn>0){
      this.age +=mn+'MN '; 
    }
    if(yr>0){
      this.age +=yr+'YR ';
    }
   //this.age=dd+'D'+mn+'M'+yr; 
  }
}
