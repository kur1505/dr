import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import { UserProfile } from './user-profile.model'
import { Users } from '../masters/users/users.model';
import Swal from 'sweetalert2';
import $ from "jquery";
import { from } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public specilizationArray;
  //public specialization;
  public userArray;
  //userArray: Users;
  userprofile: UserProfile;
  //public state;
  constructor(private apiservice: ApiService, public router: Router) {
    this.userprofile = new UserProfile();
  }

  ngOnInit() {
    this.getSpecilization();
    this.getuserbyid();
    this.userprofile.specialization = "0";
    this.userprofile.state = "0";
    this.getuserprofilebyid();

  }
  ngAfterViewInit() {

  }
  enableordisablefield(val) {

    var input = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select');
    var textarea = document.getElementsByTagName('textarea');
    if (val) {
      $("#btn_save").addClass('d-none');
      textarea[0].setAttribute('disabled', val);
      for (var j = 0; j < input.length; j++) {
        input[j].setAttribute('disabled', val);
      }
      for (var j = 0; j < select.length; j++) {
        select[j].setAttribute('disabled', val);
      }
    }
    else {
      $("#btn_update").removeClass('d-none');
      textarea[0].removeAttribute('disabled');
      for (var j = 0; j < input.length; j++) {
        input[j].removeAttribute('disabled');
      }
      for (var j = 0; j < select.length; j++) {
        select[j].removeAttribute('disabled');
      }
    }
  }
  getSpecilization() {
    this.apiservice.getAllSpecialization().subscribe(
      res => {
        this.specilizationArray = res;
        //console.log(this.specilizationArray);
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  getuserbyid() {
    this.apiservice.getUserbyid().subscribe(
      (res) => {
        this.userArray = res;

        //console.log(this);

      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  adduserprofile(value) {
    this.apiservice.addUserProfile(value).subscribe(res => {
      if (res["Success"]) {
        Swal.fire('Success', res["Message"], 'success').then(function () {
          location.reload();
        });
      }
    });
  }
  getuserprofilebyid() {
    this.apiservice.getAllUserProfile().subscribe(
      (res) => {
        Object.assign(this.userprofile, res);
        this.enableordisablefield(true);
        //console.log(this.userprofile);

      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
  update(value, id) {
    console.log(value);
    if (!!value) {
      this.apiservice.updateUserProfile(id, value).subscribe(
        res => {
          Swal.fire('Updated!', 'Your Profile has been updated.', 'success').then(function () {
            location.reload();
          });
        }
      )
    }
    else {
      Swal.fire('Oops...', "Details can't be empty", 'error');
    }

  }
  getstate = [{ id: 'AP', value: 'Andhra Pradesh' },
  { id: 'AR', value: 'Arunachal Pradesh' },
  { id: 'AS', value: 'Assam' },
  { id: 'BR', value: 'Bihar' },
  { id: 'CT', value: 'Chhattisgarh' },
  { id: 'GA', value: 'Goa' },
  { id: 'GJ', value: 'Gujarat' },
  { id: 'HR', value: 'Haryana' },
  { id: 'HP', value: 'Himachal Pradesh' },
  { id: 'JK', value: 'Jammu and Kashmir' },
  { id: 'JH', value: 'Jharkhand' },
  { id: 'KA', value: 'Karnataka' },
  { id: 'KL', value: 'Kerala' },
  { id: 'MP', value: 'Madhya Pradesh' },
  { id: 'MH', value: 'Maharashtra' },
  { id: 'MN', value: 'Manipur' },
  { id: 'ML', value: 'Meghalaya' },
  { id: 'MZ', value: 'Mizoram' },
  { id: 'NL', value: 'Nagaland' },
  { id: 'OR', value: 'Odisha' },
  { id: 'PB', value: 'Punjab' },
  { id: 'RJ', value: 'Rajasthan' },
  { id: 'SK', value: 'Sikkim' },
  { id: 'TN', value: 'Tamil Nadu' },
  { id: 'TG', value: 'Telangana' },
  { id: 'TR', value: 'Tripura' },
  { id: 'UT', value: 'Uttarakhand' },
  { id: 'UP', value: 'Uttar Pradesh' },
  { id: 'WB', value: 'West Bengal' },
  { id: 'AN', value: 'Andaman and Nicobar Islands' },
  { id: 'CH', value: 'Chandigarh' },
  { id: 'DN', value: 'Dadra and Nagar Haveli' },
  { id: 'DD', value: 'Daman and Diu' },
  { id: 'DL', value: 'Delhi' },
  { id: 'LD', value: 'Lakshadweep' },
  { id: 'PY', value: 'Puducherry' }]
}
