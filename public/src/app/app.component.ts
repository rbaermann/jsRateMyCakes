import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  cakes = [];
  newCake : any;
  selectedCake : any;
  newRating : any;

  constructor(private _httpService: HttpService) {
    
  }

  ngOnInit() {
    this.newCake = { baker : "", image : "" };
    this.newRating = { rating : 1, comment : "" };
    this.getCakesFromService();
  }

  getCakesFromService() {
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      console.log("Got our data!", data)
      this.cakes = data["Cake"];
    })
  }

  onSubmit() {
    let obs = this._httpService.addCake(this.newCake);
    obs.subscribe(data => {
      console.log("Got data from post back", data);
      this.newCake = { baker : "", image : "" }
    })
  }

  showCake(cake : any) {
    this.selectedCake = cake;
  }

  createRating(cakeId : any) {
    let obs = this._httpService.addRating(this.newRating, cakeId);
    obs.subscribe(data => {
      console.log("Got data from post back", data)
      this.newRating = { rating : 1, comment : "" }
    })
  }

  // deleteCake(cake) {
  //   let obs = this._httpService.deleteCake(cake);
  //   obs.subscribe(data => {
  //     console.log("Deleted selected cake", data);
  //     this.getCakesFromService();
  //   })
  // }
}
