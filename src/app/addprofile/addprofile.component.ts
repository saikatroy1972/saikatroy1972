import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {

  // userName: any;
  // email: any;
  // firstName: any;
  // surName: any;
  // password: any;
  // organizationName: any;
  // organizationAddress: any;
  // gstNumber: any;
  // panNumber: any;
  // phoneNumber: any;
  // state: any;
  // roleName: any;
  // companyEmail: any;
  // pin: any;
  // country: any;
  // poolingStationId: any;
  // areaId: any;
  // orginazationStateId: any;
  EMAIL: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  response = {
    "jwtToken" : "",
    "refreshToken" : "",
  }
  responsetext: any;
  credential: any;

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL)]),
    firstName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    organizationName: new FormControl('', Validators.required),
    organizationAddress: new FormControl('', Validators.required),
    gstNumber: new FormControl('', Validators.required),
    panNumber: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    roleName: new FormControl('', Validators.required),
    companyEmail: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    poolingStationId: new FormControl('', Validators.required),
    areaId: new FormControl('', Validators.required),
    orginazationStateId: new FormControl('', Validators.required),

    // name: new FormControl('', Validators.required),
    // mail: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL)]),
    // username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  
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

