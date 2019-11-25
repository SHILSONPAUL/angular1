import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myFisrstAngApp';
  months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
  isavailable=false;
  a=10;
  b=20;
  name="Your Name";
  myClickFunction(event)
  {
    alert("button is clicked");
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
