import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public router: Router) { }
  name;
  ngOnInit() {
    if (this.storage.get("key") == null) {
      this.router.navigate([""]);
    }

    this.name = this.storage.get("userName");
  }
  clickFun() {
    this.storage.remove("userName")
    this.storage.remove("key");
    this.router.navigate([""]);
    alert("Logout Success" + this.storage.get("key"));
  }
}
