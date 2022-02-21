import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  saveCountryDetails :any ={
    "countryName": "string",
    "is_Active": 0
  }

  updateCountryDetails :any ={
    "countryId": 3,
    "countryName": "Sri Lanka"
  }
  
  constructor(private service:ApisService,private router:Router) { 
    // this.getCountry();
  }

  ngOnInit(): void {
  }

  getCountry(){
    let resp = this.service.getCountry();
    resp.subscribe((data)=>{
      console.log(data);
    })
  }

  saveCountry(){
    let resp = this.service.addCountry(this.saveCountryDetails);
    resp.subscribe((data)=>{
      console.log(data);
    })
  }

  updateCountry(){
    let resp = this.service.updateCountry(this.updateCountryDetails);
    resp.subscribe((data)=>{
      console.log(data);
    })
  }

}
