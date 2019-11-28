import { Component, OnInit,Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // user:String;
  // sessionVal;
 model: any = {};
  constructor(@Inject(LOCAL_STORAGE)private storage:WebStorageService,public router:Router) { }

ngOnInit() {
  var key=this.storage.get(key);
  if(key==true){
    this.router.navigate(["home"]);
  }
  else{
    this.router.navigate([""]);
  }

}
myFun(){
if(this.model.userName=="admina" && this.model.password==123456){
this.storage.set("userName", this.model.userName);
this.storage.set('key', true)
alert('Login success');
this.router.navigate(["home"]);
}
}
} 