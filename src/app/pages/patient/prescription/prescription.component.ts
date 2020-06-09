import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from './grid.model'; 
import { ApiService } from 'src/app/components/api/api.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
public patients;
  
 
  constructor(private apiservice: ApiService, public router: Router,public param:ActivatedRoute) {
    //config.seconds = true;    
    
   }

  ngOnInit() {
    this.param.params.subscribe(params=>{
      let id = params['id'];
      console.log(id);
     this.getPrescription(id);
    });

  }
   getPrescription(id) {
    this.apiservice.getPatientbyid(id).subscribe(res => {
    this.patients=res;
    console.log(this.patients);
    });
    
  }
  copyPrescription(){

    console.log(this.patients);
  }
}
