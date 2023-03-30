import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
  selector:  'app-property-card',
  // template:'<h1>CARD</h1>',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']

}


)
export class PropertyCardComponent {

  Property: any ={
    "Id":1,
    "Name":"Istoy BH",
    "Type":"House",
    "Price":12000
  }
}
