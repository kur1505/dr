import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import $ from "jquery";
@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {
  public vaccinationArray;
  public data;
  public id;
  constructor(private apiservice: ApiService, public router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.getvaccination();
  }
  addvaccination(value) {
    if(!!value){
      this.apiservice.addVaccination(value).subscribe(
        res => {
          console.log(res);
          if (res["Success"]) {
            Swal.fire('Success', res["Message"], 'success').then(function () {
              location.reload();
            });
          }
        },
        err => {
          Swal.fire('Oops...', 'Please try Again', 'error');
        });
    }
    else{
      Swal.fire('Oops...', "Name can't be empty", 'error');
    }

    
  }
  getvaccination() {
    this.apiservice.getAllVaccination().subscribe(
      res => {
        this.vaccinationArray = res;
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  isActive(id,status) {
    //console.log(status);
    if(status){
      status=false;
    }
    else{
      status=true;
    }
    if (!!id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you Want change status!',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.apiservice.updateVaccination(id,{isactive:status}).subscribe(
            res=>{
              Swal.fire('Updated!','Your status has been updated.','success').then(function(){
                location.reload();
              });
            }
          ) 
        }
      })
    }
    else {
      Swal.fire("Info", "Please Try Again", "warning");
    }
  }
  editData(_id,content){
    // $("#txt_Update").removeClass('d-none');
    // $("#txt_Save").addClass('d-none');
    var vaccinationData= this.vaccinationArray.find((s) => s._id === _id)
    this.data=vaccinationData.vaccination;
    this.id=_id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    //console.log();
    //$("#txt_Name").value=this.data;
  }
  update(value,id){
    if(!!value){
      this.apiservice.updateVaccination(id,{vaccination:value.txt_Name}).subscribe(
        res=>{
          Swal.fire('Updated!','Your Vaccination has been updated.','success').then(function(){
            location.reload();
          });
        }
      )
    }
    else{
      Swal.fire('Oops...', "Name can't be empty", 'error');
    }
   
  }
  delete(id){
    if (!!id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you Want delete!',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.apiservice.updateVaccination(id,{isdeleted:true}).subscribe(
            res=>{
              Swal.fire('Updated!','Your Vaccination has been deleted.','success').then(function(){
                location.reload();
              });
            }
          ) 
        }
      })
    }
    else {
      Swal.fire("Info", "Please Try Again", "warning");
    }
  }
}
