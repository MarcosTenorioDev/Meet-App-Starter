import { Component, OnInit } from '@angular/core';
import { restaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: restaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params.id)

    /* this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params.id)
    .subscribe(response => this.reviews = response)
    
      ----------- alternativa utilizando subscribe ---------------
    */
  }

}
