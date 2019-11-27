import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  registerForm: FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  //convenient getter fo easy access to form fields
get f() {return this.registerForm.controls}
onSubmit(){
  console.log(this.f);
  this.submitted=true;
  //stop if the form is invalid
  if(this.registerForm.invalid){
    return;
  }
  alert('Success!:-)'+this.registerForm.get('firstName').value);
  //console.log(f.firstName.value);
}
}
