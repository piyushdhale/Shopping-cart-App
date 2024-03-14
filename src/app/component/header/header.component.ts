import { Component } from '@angular/core';
import { CartservicesService } from '../../services/cartservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  public totalItem : number = 0;
  constructor(private cartService : CartservicesService){

  }

  ngOnInit(): void{
    this.cartService.getProduct()
    .subscribe((res:any)=>{
      this.totalItem =res.length;
    })
  }

}
