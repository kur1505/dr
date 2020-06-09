import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from './grid.model'; 
import { ApiService } from 'src/app/components/api/api.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-newprescription',
  templateUrl: './newprescription.component.html',
  styleUrls: ['./newprescription.component.scss']
})
export class NewPrescriptionComponent implements OnInit {
  public userArray:any={};
  public userTimeModel;
  public diseasesArray;
  public diseasesStageArray;
  public disease;
  public medicineArray;
  public gender;
  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  public Medicine;
  public hide=true;
  public Vhide=true;
  public vaccination;
  public model1;
  public age;
  public modelVFDate;
  public model;
  public patients;
  constructor(private apiservice: ApiService, public router: Router, public config :NgbTimepickerConfig,public param:ActivatedRoute) {
    //config.seconds = true;
    config.spinners = false;
   
   }

  ngOnInit() {
    this.param.params.subscribe(params=>{
      let id = params['id'];
      this.getPrescription(id);
      this.dynamicArray.push(this.newDynamic); 
    });
    
  
    this.gender="0";
    this.userArray.userTimeModel={hour: 13, minute: 30, second: 0};
    // this.newDynamic = {MeName:"",HMTimes: "", NODays: "",SPInstruction:""};  
    // this.dynamicArray.push(this.newDynamic); 
    this.getdiseases();
    this.getvaccination(); 
    this.getdiseasestage();
    console.log(this.dynamicArray);
  }
  
  addRow(index) {    
   console.log(this.dynamicArray);  
    this.newDynamic = {MeName:"",HMTimes: "", NODays: "",SPInstruction:""};  
    this.dynamicArray.push(this.newDynamic);  
    return true;  
}  
getPrescription(id) {
  this.apiservice.getPatientbyid(id).subscribe(res => {
  this.patients=res;
  console.log(this.patients);
  });
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
    //debugger;
    let Did=$("#ddl_Disease").val();
    //console.log(Did);
    if(Did==null){
      Did=this.disease;
      console.log(Did);
    }
    this.apiservice.getAllDiseaseStagebyDID(Did).subscribe(
      res => {
        this.diseasesStageArray = res;
        this.getmedicine(false);
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
  addpatientprescription(value) {
    value.followupNeed=this.hide
    value.vaccinationRequired=this.Vhide
    value.dosasge=this.dynamicArray
    this.apiservice.addPatientPrescription(value).subscribe(res => {
      if (res["Success"]) {
        Swal.fire('Success', res["Message"], 'success').then(function () {
          location.reload();
        });
      }
    });
  }
}
