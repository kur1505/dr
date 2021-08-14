import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import $ from "jquery";
@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnInit {
  public specializationArray;
  public data;
  public value;
  public id;
  public editProfileForm: FormGroup;
  constructor(private apiservice: ApiService, public router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.getspecialization();
  }
  addspecialization(value) {
    if(!!value){
      this.apiservice.addSpecialization(value).subscribe(
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
  getspecialization() {
    this.apiservice.getAllSpecialization().subscribe(
      res => {
        this.specializationArray = res;
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
          this.apiservice.updateSpecialization(id,{isactive:status}).subscribe(
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
    
    var specializationData= this.specializationArray.find((s) => s._id === _id)
    this.data=specializationData.specialization;
    this.value=specializationData.specialization;
    this.id=_id;
    debugger;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    //$("#txt_Name1").val(specializationData.specialization);
    console.log(this);
    $("#txt_Name1")[0].value=this.data;
  }
  update(value,id){
    console.log(value,id)
    if(!!value){
      this.apiservice.updateSpecialization(id,{specialization:value.txt_Name}).subscribe(
        res=>{
          Swal.fire('Updated!','Your Specialization has been updated.','success').then(function(){
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
          this.apiservice.updateSpecialization(id,{isdeleted:true}).subscribe(
            res=>{
              Swal.fire('Updated!','Your Specialization has been deleted.','success').then(function(){
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
