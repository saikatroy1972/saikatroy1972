import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { User } from '../user';
import { updateuser } from '../Updateuser';
import { adduser } from '../adduser';

@Component({
  selector: 'app-printdata',
  templateUrl: './printdata.component.html',
  styleUrls: ['./printdata.component.css']
})
export class PrintdataComponent implements OnInit {

  response:any;
  userarray: User[]=[];

  constructor(private service:ApisService) { 
    //var userarray: User[] = [];
    let resp = this.service.printData();
    resp.subscribe(
      (data)=>{
        this.response= data;
        for(var i=0; i < this.response.length; i++){
          this.userarray[i] = new User(
            this.response[i]["id"],
            this.response[i]["userName"],
            this.response[i]["email"],
            this.response[i]["roleName"],
            this.response[i]["emailConfirmed"],
            this.response[i]["firstName"],
            this.response[i]["surName"],
            this.response[i]["organizationName"],
            this.response[i]["organizationAddress"],
            this.response[i]["gstNumber"],
            this.response[i]["panNumber"],
            this.response[i]["phoneNumber"],
            this.response[i]["state"],
            this.response[i]["companyEmail"],
            this.response[i]["pin"],
            this.response[i]["country"],
            this.response[i]["poolingStationId"],
            this.response[i]["areaId"],
            this.response[i]["poolingStationName"],
            this.response[i]["stateName"],
            this.response[i]["areaName"],
            this.response[i]["countryName"],
            this.response[i]["subscriptionEndDate"],
            this.response[i]["isActive"],
            this.response[i]["orginazationStateId"],
            this.response[i]["orginazationStateName"]
          );
        }

        console.log(this.userarray);

        for(var i=0; i < this.userarray.length; i++){
          console.log("-----------");
          console.log(this.userarray[i]["emailConfirmed"])
          console.log(this.userarray[i]["pin"])
          console.log(this.userarray[i]["isActive"])
          console.log(this.userarray[i]["orginazationStateId"])
        }

      }
    );
  }

  update(){

    var updatedUser = new updateuser(
      "59db1034-afdc-4128-8dfa-08d987d2cb5f",
      "asdasdasdasdas",
      "newstring",
      "newstring",
      "string",
      "6565665",
      "6565665",
      "6658455545",
      "24",
      "company@yopmail.com",
      0,
      "1",
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      0
    );

    var data = updatedUser.toJson();
    
    let resp = this.service.updateProfile(data);
    resp.subscribe();

  }

  add(){

    var addeduser = new adduser(
      "paul",
      "paul@gmail.com",
      "dib",
      "paul",
      "Paul@123",
      "Ins",
      "Kol",
      "6565665",
      "6565665",
      "6658455545",
      "24",
      "Admin",
      "company@yopmail.com",
      1234,
      "1",
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      1234
    );

    var data = addeduser.toJson();
    
    let resp = this.service.updateProfile(data);
    resp.subscribe();
    
  }

  ngOnInit(): void {

  }

}

