import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  route(){
    this.router.navigate(['./add']).then(() => {
          window.location.reload();
        });

  }

}
