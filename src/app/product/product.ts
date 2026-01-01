import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {ProductServices} from '../services/ProductServices';

@Component({
  selector: 'app-product',
  imports: [
    MatIcon
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone : true

})
export class Product implements OnInit{
   products: any=[];
   constructor(private productServices: ProductServices) {
   }
  ngOnInit() {
     this.getAllproduct();
  }
  getAllproduct(){
    this.productServices.getAllproducts().subscribe({
      next : resp => {
        this.products = resp
      },
      error : err => {
        console.log(err)
      },
    });
  }
  handleDeltet(id : number){
      let v=confirm("et vous sur de  suprrimer le produit ");
      if(v==true){
       this.productServices.deleteproduct(id).subscribe({
         next : resp =>{
           this.getAllproduct();
         },
         error : err => {
           console.log(err)
         }
       });

      }
  }
}
