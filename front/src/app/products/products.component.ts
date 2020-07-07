import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products;




  constructor(public catalogService : CatalogueService,
     private rout : ActivatedRoute) { }

  ngOnInit(): void {
    let p1=this.rout.snapshot.params.p1;
   
    if (p1==1){
      this.getProducts('/products/search/selectedProducts');
    }
  else if(p1==2){
    let idCat=this.rout.snapshot.params.p2;
this.getProducts('/categories/'+idCat +'/products');
  }
  
    
  }

 private getProducts(url){
   this.catalogService.getResource(url)
   .subscribe(data=>{
     this.products=data;
   }), (err: any) =>{
     console.log(err);
   }
     
   }
 }

