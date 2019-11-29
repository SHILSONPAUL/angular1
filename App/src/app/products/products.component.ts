import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import { Iproduct } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Iproduct[];
  
  flag: boolean=false;
  btn: any="show image";
Imagetoggle(){
  if(this.flag==false){
    this.btn="hide image";
    this.flag=true;
  }
  else{
  this.btn="show image";
  this.flag=false;
  }
  }
  constructor(public prod:ProductsService) { }
  ngOnInit(): void{
    // this.products=this.prod.getProducts();
    this.prod.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });

  }

}
