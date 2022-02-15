import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { 
    var token = localStorage.getItem("token");
    if(token == null || token == undefined){
      this.router.navigate(['./userauth']);
    }
  }

  ngOnInit(): void {
  }

}
