import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";

@Component({
  selector: 'app-diseases-stage',
  templateUrl: './diseases-stage.component.html',
  styleUrls: ['./diseases-stage.component.scss']
})
export class DiseasesStageComponent implements OnInit {
  public diseasesArray;
  public diseasesStageArray;
  public data;
  public id;
  constructor(private apiservice: ApiService, public router: Router) { }
  public type;
  ngOnInit() {
    this.getdiseases();
    this.type = "0";
    this.getdiseasestage();
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
  adddiseasestage(value) {
    if (!!value) {
      console.log(value);
      this.apiservice.addDieaseStage(value).subscribe(
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
    else {
      Swal.fire('Oops...', "Name can't be empty", 'error');
    }
  }
  getdiseasestage() {
    this.apiservice.getAllDiseaseStage().subscribe(
      res => {
        this.diseasesStageArray = res;
        console.log(this.diseasesStageArray);
        //console.log(this.diseasesArray[0].diseaseName);
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  isActive(id, status) {
    //console.log(status);
    if (status) {
      status = false;
    }
    else {
      status = true;
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
          this.apiservice.updateDieaseStage(id, { isactive: status }).subscribe(
            res => {
              Swal.fire('Updated!', 'Your status has been updated.', 'success').then(function () {
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
  editData(_id, diseaseId) {
    $("#txt_Update").removeClass('d-none');
    $("#txt_Save").addClass('d-none');
    var diseasesStage = this.diseasesStageArray.find((s) => s.id === _id)
    this.data = diseasesStage.diseaseStageName;
    this.id = _id;
    this.type = diseaseId;
  }
  update(value, id) {
    if (!!value) {
      this.apiservice.updateDieaseStage(id, { diseaseStageName: value.txt_Name, diseaseId: value.ddl_Disease }).subscribe(
        res => {
          Swal.fire('Updated!', 'Your Disease has been updated.', 'success').then(function () {
            location.reload();
          });
        }
      )
    }
    else {
      Swal.fire('Oops...', "Name can't be empty", 'error');
    }
  }
  delete(id) {
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
          this.apiservice.updateDieaseStage(id, { isdeleted: true }).subscribe(
            res => {
              Swal.fire('Deleted!', 'Your Disease has been deleted.', 'success').then(function () {
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
