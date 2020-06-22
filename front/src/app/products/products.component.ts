import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products;




  constructor(private catalogService : CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }

 private getProducts(){
   this.catalogService.getResource("/products/search/selectedProducts")
   .subscribe(data=>{
     this.products=data;
   }), (err: any) =>{
     console.log(err);
   }
     
   }
 }

