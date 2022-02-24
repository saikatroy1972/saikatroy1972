import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userList : any;

  constructor(private service: ApisService, private router: Router) { 
    let resp = service.getUserList();
    resp.subscribe((data)=>{
      this.userList = data;
      console.log(data);
    });
  }

  update(id: any){
    localStorage.setItem("userid", id);
    this.router.navigate(['./update'])
    //console.log(localStorage.getItem("userid"));
  }

  ngOnInit(): void {
  }

}
