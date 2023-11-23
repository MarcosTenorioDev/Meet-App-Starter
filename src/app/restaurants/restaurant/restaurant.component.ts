import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

  /* A classe do componente, que recebe a interface
  como propriedade a ser utilizada no template html */
  @Input() restaurant: Restaurant

  constructor() {

  }

  ngOnInit() {
  }

}
