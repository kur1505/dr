import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import $ from "jquery";
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  public diseasesArray;
  public diseasesStageArray;
  public medicineArray;
  public data;
  public id;
  constructor(private apiservice: ApiService, public router: Router) { }
  public type;
  public DiseaseStage;
  ngOnInit() {
    this.getdiseases();
    this.type = "0";
    this.DiseaseStage="0";
    this.getMedicine();
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
        console.log(res);
      },
      err => {
      });
  }
  addmedicine(value) {
    if (!!value) {
     
      console.log(value);
      this.apiservice.addMedicine(value).subscribe(
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
  getMedicine() {
    this.apiservice.getMedicine().subscribe(
      res => {
        this.medicineArray = res;
        console.log(res);
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
          this.apiservice.updateMedicine(id, { isactive: status }).subscribe(
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
  editData(_id, diseaseId,diseaseStageId) {
    $("#txt_Update").removeClass('d-none');
    $("#txt_Save").addClass('d-none');
    var medicine = this.medicineArray.find((s) => s.id === _id)
    this.data = medicine.medicineName;
    this.id = _id;
    this.type = diseaseId;
    this.apiservice.getAllDiseaseStagebyDID(diseaseId).subscribe(
      res => {
        
        this.diseasesStageArray = res;
        this.DiseaseStage=diseaseStageId;
      },
      err => {
      });
  }
  update(value, id) {
    if (!!value) {
      this.apiservice.updateMedicine(id, { medicineName: value.txt_Name, diseaseId: value.ddl_Disease,diseaseStageId:value.ddl_DiseaseStage }).subscribe(
        res => {
          Swal.fire('Updated!', 'Your Medicine has been updated.', 'success').then(function () {
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
          this.apiservice.updateMedicine(id, { isdeleted: true }).subscribe(
            res => {
              Swal.fire('Deleted!', 'Your Medicine has been deleted.', 'success').then(function () {
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
