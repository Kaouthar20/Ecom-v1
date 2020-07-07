import { Component, OnInit} from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 categories: any;
constructor( private catalogService : CatalogueService, private router :Router){
 
}

  ngOnInit(): void {
   this.getCategories();
  }
  private getCategories() {
  this.catalogService.getResource("/categories")
  .subscribe(data=> {
    this.categories=data;
  },err=>{

    console.log(err);
  }
  );
  }
  getProductByCategory(c){

    this.router.navigateByUrl('/products/2/'+c.id)
  }
}
