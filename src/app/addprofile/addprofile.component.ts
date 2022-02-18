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
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    state: new FormControl('2'),
    roleName: new FormControl('Admin'),
    companyEmail: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL)]),
    pin: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]),
    country: new FormControl('1'),
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

  add(){

  }

  prints(){
    console.log(this.form.value)
    console.log(this.form.value.state);
    console.log(this.form.value.country);
    console.log(this.form.value.roleName);
  }

  state_details = 
  [
    {
      "stateId": 2,
      "countryId": 1,
      "stateName": "West Bengal",
      "countryName": "India",
      "is_Active": 1,
      "code": 19,
      "stateUniversalCode": null
    },
    {
      "stateId": 3,
      "countryId": 1,
      "stateName": "Bihar",
      "countryName": "India",
      "is_Active": 1,
      "code": 10,
      "stateUniversalCode": null
    },
    {
      "stateId": 4,
      "countryId": 1,
      "stateName": "Andhra Pradesh",
      "countryName": "India",
      "is_Active": 1,
      "code": 37,
      "stateUniversalCode": null
    },
    {
      "stateId": 5,
      "countryId": 1,
      "stateName": "Arunachal Pradesh",
      "countryName": "India",
      "is_Active": 1,
      "code": 12,
      "stateUniversalCode": null
    },
    {
      "stateId": 6,
      "countryId": 1,
      "stateName": "Assam",
      "countryName": "India",
      "is_Active": 1,
      "code": 18,
      "stateUniversalCode": null
    },
    {
      "stateId": 7,
      "countryId": 1,
      "stateName": "Chhattisgarh",
      "countryName": "India",
      "is_Active": 1,
      "code": 22,
      "stateUniversalCode": null
    },
    {
      "stateId": 8,
      "countryId": 1,
      "stateName": "Gujarat",
      "countryName": "India",
      "is_Active": 1,
      "code": 24,
      "stateUniversalCode": null
    },
    {
      "stateId": 9,
      "countryId": 1,
      "stateName": "Goa",
      "countryName": "India",
      "is_Active": 1,
      "code": 30,
      "stateUniversalCode": null
    },
    {
      "stateId": 10,
      "countryId": 1,
      "stateName": "Haryana",
      "countryName": "India",
      "is_Active": 1,
      "code": 6,
      "stateUniversalCode": null
    },
    {
      "stateId": 11,
      "countryId": 1,
      "stateName": "Himachal Pradesh",
      "countryName": "India",
      "is_Active": 1,
      "code": 2,
      "stateUniversalCode": null
    },
    {
      "stateId": 12,
      "countryId": 1,
      "stateName": "Jharkhand",
      "countryName": "India",
      "is_Active": 1,
      "code": 20,
      "stateUniversalCode": null
    },
    {
      "stateId": 13,
      "countryId": 1,
      "stateName": "Karnataka",
      "countryName": "India",
      "is_Active": 1,
      "code": 29,
      "stateUniversalCode": null
    },
    {
      "stateId": 14,
      "countryId": 1,
      "stateName": "Madhya Pradesh",
      "countryName": "India",
      "is_Active": 1,
      "code": 23,
      "stateUniversalCode": null
    },
    {
      "stateId": 15,
      "countryId": 1,
      "stateName": "Maharashtra",
      "countryName": "India",
      "is_Active": 1,
      "code": 27,
      "stateUniversalCode": null
    },
    {
      "stateId": 16,
      "countryId": 1,
      "stateName": "Manipur",
      "countryName": "India",
      "is_Active": 1,
      "code": 14,
      "stateUniversalCode": null
    },
    {
      "stateId": 17,
      "countryId": 1,
      "stateName": "Meghalaya",
      "countryName": "India",
      "is_Active": 1,
      "code": 17,
      "stateUniversalCode": null
    },
    {
      "stateId": 18,
      "countryId": 1,
      "stateName": "Mizoram",
      "countryName": "India",
      "is_Active": 1,
      "code": 15,
      "stateUniversalCode": null
    },
    {
      "stateId": 19,
      "countryId": 1,
      "stateName": "Nagaland",
      "countryName": "India",
      "is_Active": 1,
      "code": 13,
      "stateUniversalCode": null
    },
    {
      "stateId": 20,
      "countryId": 1,
      "stateName": "Odisha",
      "countryName": "India",
      "is_Active": 1,
      "code": 21,
      "stateUniversalCode": null
    },
    {
      "stateId": 21,
      "countryId": 1,
      "stateName": "Punjab",
      "countryName": "India",
      "is_Active": 1,
      "code": 3,
      "stateUniversalCode": null
    },
    {
      "stateId": 22,
      "countryId": 1,
      "stateName": "Rajasthan",
      "countryName": "India",
      "is_Active": 1,
      "code": 8,
      "stateUniversalCode": null
    },
    {
      "stateId": 23,
      "countryId": 1,
      "stateName": "Sikkim",
      "countryName": "India",
      "is_Active": 1,
      "code": 11,
      "stateUniversalCode": null
    },
    {
      "stateId": 24,
      "countryId": 1,
      "stateName": "Tamil Nadu",
      "countryName": "India",
      "is_Active": 1,
      "code": 33,
      "stateUniversalCode": null
    },
    {
      "stateId": 25,
      "countryId": 1,
      "stateName": "Telangana",
      "countryName": "India",
      "is_Active": 1,
      "code": 36,
      "stateUniversalCode": null
    },
    {
      "stateId": 26,
      "countryId": 1,
      "stateName": "Tripura",
      "countryName": "India",
      "is_Active": 1,
      "code": 16,
      "stateUniversalCode": null
    },
    {
      "stateId": 27,
      "countryId": 1,
      "stateName": "Uttar Pradesh",
      "countryName": "India",
      "is_Active": 1,
      "code": 9,
      "stateUniversalCode": null
    },
    {
      "stateId": 28,
      "countryId": 1,
      "stateName": "Uttarakhand",
      "countryName": "India",
      "is_Active": 1,
      "code": 5,
      "stateUniversalCode": null
    },
    {
      "stateId": 29,
      "countryId": 1,
      "stateName": "Jammu ",
      "countryName": "India",
      "is_Active": 1,
      "code": 1,
      "stateUniversalCode": null
    },
    {
      "stateId": 30,
      "countryId": 1,
      "stateName": "Chandigarh",
      "countryName": "India",
      "is_Active": 1,
      "code": 4,
      "stateUniversalCode": null
    },
    {
      "stateId": 31,
      "countryId": 1,
      "stateName": "Delhi",
      "countryName": "India",
      "is_Active": 1,
      "code": 7,
      "stateUniversalCode": null
    },
    {
      "stateId": 32,
      "countryId": 1,
      "stateName": "Daman Diu",
      "countryName": "India",
      "is_Active": 1,
      "code": 25,
      "stateUniversalCode": null
    },
    {
      "stateId": 33,
      "countryId": 1,
      "stateName": "Dadra Nagar Haveli",
      "countryName": "India",
      "is_Active": 1,
      "code": 26,
      "stateUniversalCode": null
    },
    {
      "stateId": 34,
      "countryId": 1,
      "stateName": "Lakshadeep",
      "countryName": "India",
      "is_Active": 1,
      "code": 31,
      "stateUniversalCode": null
    },
    {
      "stateId": 35,
      "countryId": 1,
      "stateName": "Kerala",
      "countryName": "India",
      "is_Active": 1,
      "code": 32,
      "stateUniversalCode": null
    },
    {
      "stateId": 36,
      "countryId": 1,
      "stateName": "Poducherry",
      "countryName": "India",
      "is_Active": 1,
      "code": 34,
      "stateUniversalCode": null
    },
    {
      "stateId": 37,
      "countryId": 1,
      "stateName": "Andaman and Nicobar",
      "countryName": "India",
      "is_Active": 1,
      "code": 35,
      "stateUniversalCode": null
    },
    {
      "stateId": 38,
      "countryId": 1,
      "stateName": "Ladakh",
      "countryName": "India",
      "is_Active": 1,
      "code": 38,
      "stateUniversalCode": null
    },
    {
      "stateId": 39,
      "countryId": 1,
      "stateName": "Other Teritory",
      "countryName": "India",
      "is_Active": 1,
      "code": 97,
      "stateUniversalCode": null
    }
  ]


}

