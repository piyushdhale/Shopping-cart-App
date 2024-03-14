import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../../services/cartservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

public product : any = []
public grandTotal !: number;

constructor(private cartService : CartservicesService){ }

ngOnInit(): void {
  this.cartService.getProduct()
  .subscribe((res:any)=>{
    this.product =res;
    this.grandTotal = this.cartService.getTotalPrice();
  })
}
removeItem(item:any){

  this.cartService.removeCartItem(item);
}

}
