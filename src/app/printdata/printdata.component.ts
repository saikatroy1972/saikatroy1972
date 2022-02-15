import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { User } from '../user';

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

  ngOnInit(): void {

  }

}

