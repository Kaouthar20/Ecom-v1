import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products;
 public editPhoto : boolean;
  currentProduct : any;
  selctedFiles : any;




  constructor(public catalogService : CatalogueService,
     private route : ActivatedRoute, private router : Router) { 

    }
  
     

  ngOnInit(): void {
    
    //beaucoup d'evenement se produit dans le retour
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);
        let p1=this.route.snapshot.params.p1;

if(p1==1){
//all productes
this.getProducts('/products/search/selectedProducts');
}
else if(p1==2){
let idCat=this.route.snapshot.params.p2;
// recuperer la liste des produits de category
this.getProducts('/categories/'+idCat+'/products');
}
       //console.log(this.activatedRoute.snapshot.data['asdf']); // data is defined but asdf is not :(
      }
    });
    }
   
  

 private getProducts(url){
   this.catalogService.getResource(url)
   .subscribe(data=>{
     this.products=data;
   }), (err: any) =>{
     console.log(err);
   }
     
   }
   onEditPhoto(p){
     this.currentProduct=p;
     this.editPhoto=true;
   }
   onSelectedFile(event){
     this.selctedFiles=event.tagrget.files;
   }
 }

