import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent implements OnInit {

  username: any;
  password: any;
  response = {
    "jwtToken" : "",
    "refreshToken" : "",
  }
  responsetext:any;
  credential: any;
  
  constructor(private service:ApisService,private router:Router) { }

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
        this.response = JSON.parse(JSON.stringify(data));
        this.responsetext = "";
        localStorage.setItem("token", this.response.jwtToken)
        this.router.navigate(['./printdata']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        this.responsetext = "Invalid credential";
        localStorage.removeItem("token");
      }
    )

  }

}
