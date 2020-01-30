import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.scss']
})
export class DiseasesComponent implements OnInit {

  public diseasesArray;
  public data;
  public id;
  constructor(private apiservice: ApiService, public router: Router) { }

  ngOnInit() {
    this.getdiseases();
  }
  adddiseases(value) {
    if(!!value){
      this.apiservice.addDiease(value).subscribe(
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
  getdiseases() {
    this.apiservice.getAllDiseases().subscribe(
      res => {
        this.diseasesArray = res;
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
          this.apiservice.updateDieases(id,{isactive:status}).subscribe(
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
  editData(_id){
    $("#txt_Update").removeClass('d-none');
    $("#txt_Save").addClass('d-none');
    var diseasesData= this.diseasesArray.find((s) => s._id === _id)
    this.data=diseasesData.diseaseName;
    this.id=_id;
    //console.log();
    //$("#txt_Name").value=this.data;
  }
  update(value,id){
    if(!!value){
      this.apiservice.updateDieases(id,{diseaseName:value.txt_Name}).subscribe(
        res=>{
          Swal.fire('Updated!','Your Disease has been updated.','success').then(function(){
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
          this.apiservice.updateDieases(id,{isdeleted:true}).subscribe(
            res=>{
              Swal.fire('Deleted!','Your Disease has been deleted.','success').then(function(){
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
