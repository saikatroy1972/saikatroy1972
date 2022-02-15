import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {

  userName: any;
  email: any;
  firstName: any;
  surName: any;
  password: any;
  organizationName: any;
  organizationAddress: any;
  gstNumber: any;
  panNumber: any;
  phoneNumber: any;
  state: any;
  roleName: any;
  companyEmail: any;
  pin: any;
  country: any;
  poolingStationId: any;
  areaId: any;
  orginazationStateId: any;

  response = {
    "jwtToken" : "",
    "refreshToken" : "",
  }
  responsetext: any;
  credential: any;
  
  constructor(private service:ApisService,private router:Router) { 

    // var token = localStorage.getItem("token");
    // if(!(token == null || token == undefined)){
    //   this.router.navigate(['./home']).then(() => {
    //     window.location.reload();
    //   });
    // }

  }

  ngOnInit(): void {
  }

  prints(){

  }

  add(){

  }

}

