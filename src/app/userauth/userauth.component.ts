import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApisService } from '../apis.service';
import {JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent implements OnInit {

  username: any;
  password: any;
  login_token:any;
  jwt= new JwtHelperService();
  response = {
    "jwtToken" : "",
    "refreshToken" : "",
  }
  userData:any;
  responsetext:any;
  credential: any;
  // userarray: User[]=[];
  constructor(private service:ApisService,private router:Router) {

    var token = localStorage.getItem("token");
    if(!(token == null || token == undefined)){
      this.router.navigate(['./home']).then(() => {
        window.location.reload();
      });
    }

  }

  ngOnInit(): void {
  }

  prints(){
    console.log(this.username);
    console.log(this.password);
  }

  validate(){

    this.credential={
      "userName": this.username,
      "password": this.password,
      "isAppleLogin": 0
    }

    let resp = this.service.LoginCheck(this.credential)
    resp.subscribe(
      (data)=>{
        this.response= JSON.parse(JSON.stringify(data));
        console.log(this.response);
        this.responsetext = "";
        this.login_token=this.response.jwtToken;
        localStorage.setItem("token",this.login_token );

        environment.header= new HttpHeaders().set( 'Content-Type', 'application/json').set('Authorization', "Bearer " + this.login_token);
        console.log(environment.header);
        this.router.navigate(['./home']).then(() => {
          this.successRoute();
         // window.location.reload();
        });


      },
      (err) => {
        this.responsetext = "Invalid credential";
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
      }
    )

  }
successRoute(){
const jwtToken=this.jwt.decodeToken(this.login_token);

  let user_Data=this.service.getUserData(jwtToken.sub);


  user_Data.subscribe( (data)=>{
    this.userData=data;
    localStorage.setItem("userData",  btoa(JSON.stringify(data)));
    this.userData=localStorage.getItem("userData");

    let uData=JSON.parse(atob(this.userData));


  });


}
}

