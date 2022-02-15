import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topheadnav',
  templateUrl: './topheadnav.component.html',
  styleUrls: ['./topheadnav.component.scss']
})
export class TopheadnavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['./userauth']);
  }

}
