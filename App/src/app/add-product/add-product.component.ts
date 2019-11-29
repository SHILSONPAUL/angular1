import { Component, OnInit } from '@angular/core';
import {Iproduct} from  '../products/product.model'
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private prod: ProductsService) { }
  productItem= new Iproduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
  AddProduct(){
    this.prod.newProduct(this.productItem);
    alert("Success");
  }

}
