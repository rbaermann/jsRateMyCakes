import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  @Input() 
  cakeToShow : any;
  cakeRating : any;
  constructor() { }

  ngOnInit() {
    let sum = 0;
    for(let rating of this.cakeToShow.rating) {
      sum += rating.rating
    }
    this.cakeRating = sum / this.cakeToShow.rating.length;
    //NOPE
  }

  

}
