import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
 public patientArray;
  

  constructor(private apiservice: ApiService, public router: Router) { }

  ngOnInit() {
    this.getpatient();
  }
 
  getpatient() {
    this.apiservice.getAllPatient().subscribe(
      res => {
        //console.log(res);
        this.patientArray = res;
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  viewprescription(id){
    console.log(id);
    this.router.navigate['prescription'];
  }
}
