import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profile-page',
  templateUrl: './add-profile-page.component.html',
  styleUrls: ['./add-profile-page.component.scss']
})
export class AddProfilePageComponent implements OnInit {

  constructor(private router:Router) { 
    var token = localStorage.getItem("token");
    if(token == null || token == undefined){
      this.router.navigate(['./userauth']);
    }
  }

  ngOnInit(): void {
  }

}
