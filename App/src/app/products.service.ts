import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpObj:HttpClient) { }

  getProducts(){
    alert("through");
   return this.httpObj.get('http://localhost:3000/products');
  // return [
  //   {
  //     "productId": 1,
 
  }
  newProduct(item){
return this.httpObj.post('http://localhost:3000/insert',{"product":item})
.subscribe(data=>{console.log(data)});
  }
}
