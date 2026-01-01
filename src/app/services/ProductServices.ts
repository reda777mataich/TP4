import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {

   constructor(private https : HttpClient) {
   }
   getAllproducts(){
    return this.https.get("http://localhost:8085/product")
   }
   deleteproduct(id : number){
     return this.https.delete("http://localhost:8085/delete/"+id);
   }
}
