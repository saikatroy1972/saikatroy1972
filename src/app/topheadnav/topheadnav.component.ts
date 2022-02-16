
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topheadnav',
  templateUrl: './topheadnav.component.html',
  styleUrls: ['./topheadnav.component.scss']
})
export class TopheadnavComponent implements OnInit {
  userData: any;
  userName: any;
  userID: any;
  uData: any;
  constructor(private router: Router) {
    try {
      this.userData = localStorage.getItem("userData");
  //    console.log(this.userData)
      this.uData = JSON.parse(atob(this.userData));

      this.userName = this.uData.firstName;
      this.userID = this.uData.id;
    } catch (error) {
      console.log(error)
    }


  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    this.router.navigate(['./userauth']);
  }

}
