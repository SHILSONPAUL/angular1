import { Component, OnInit } from '@angular/core';
import {GetusersService} from '../getusers.service';
@Component({
  selector: 'app-student-user',
  templateUrl: './student-user.component.html',
  styleUrls: ['./student-user.component.css']
})
export class StudentUserComponent implements OnInit {

  constructor(public service:GetusersService) { }

  userdata;
  ngOnInit() {
  
    {
      this.service.getUserService().subscribe((data)=>{                     //observor
      this.userdata=data;
      console.log(this.userdata);
      });  
  }
}}
