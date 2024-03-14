import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  counter:number=0;
  
  max() {
    this.counter++
  }
  min() {
    this.counter--;
    }
  reset() {
    this.counter=0
  }   

}