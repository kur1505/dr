import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from './grid.model'; 
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddPatientComponent implements OnInit {
  public diseasesArray;
  public diseasesStageArray;
  public medicineArray;
  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  public type;
  public DiseaseStage;
  public Medicine;
  constructor(private apiservice: ApiService, public router: Router) { }

  ngOnInit() {
    this.newDynamic =  {HMTimes: "", NODays: "",SPInstruction:""};  
    this.dynamicArray.push(this.newDynamic); 
    this.getdiseases();
    this.type = "0";
    this.DiseaseStage="0"; 
    this.Medicine="0"
    console.log(this.dynamicArray);  
  }
  addRow(index) {    
    console.log(this.dynamicArray);  
    this.newDynamic = {HMTimes: "", NODays: "",SPInstruction:""};  
    this.dynamicArray.push(this.newDynamic);  
    Swal.fire('New row added successfully', 'New Row',"success");  
    
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
  
}
