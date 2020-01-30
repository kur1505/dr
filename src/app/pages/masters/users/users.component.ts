import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/components/api/api.service';
import { Router } from '@angular/router';
import $ from "jquery";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public userArray;
public type;
  constructor(private modalService: NgbModal,private apiservice: ApiService, public router: Router) { }

  ngOnInit() {
    this.getuser();
    this.type="0";
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }
  adduser(value){
    var msg=this.validation(value);
    if(msg.length<=0){
      //console.log(value);
      var permissionLevel;
      if(value.ddl_usertype==="1"){
        permissionLevel=2048
      }
      else if(value.ddl_usertype==="2"){
        permissionLevel=4
      }
      else if(value.ddl_usertype==="3"){
        permissionLevel=1
      }
      var req={
        name:value.txt_Name,
        email:value.txt_Email,
        mobile:value.txt_Mobile,
        permissionLevel:permissionLevel,
      }
      //console.log(req);  
      this.apiservice.addUser(req).subscribe(res=>{
        if (res["Success"]) {
          Swal.fire('Success', res["Message"], 'success').then(function () {
            location.reload();
          });
        }
      });
      
    }
    else{
      Swal.fire("Error",msg,"error");
    }
  }
  validation(value){
    var msg="";
    if(value.txt_Name===null || value.txt_Name==="" || value.txt_Name===undefined){
      return msg="Enter Name"
    }  
    if(value.txt_Email===null || value.txt_Email==="" || value.txt_Email===undefined){
      return msg="Enter Email"
    }
    if((value.txt_Mobile+"").length<10 || (value.txt_Mobile+"").length>10){
      return msg="Enter 10 digit mobile"
    }
    if(value.ddl_usertype===null || value.ddl_usertype==="" || value.ddl_usertype===undefined || value.ddl_usertype==="0"){
      return msg="Select user type"
    }
    return msg;
  }
  getuser() {
    this.apiservice.getAllUser().subscribe(
      res => {
        this.userArray=res;
        console.log(res);
      },
      err => {
        Swal.fire('Oops...', 'Please try Again', 'error');
      });
  }
}
