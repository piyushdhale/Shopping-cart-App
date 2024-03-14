import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartservicesService } from '../../services/cartservices.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor(private api : ApiService, private cartServices : CartservicesService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addtocart(item : any){
    this.cartServices.addtoCart(item);
  }

}
