import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getCakes();
  }

  getCakes() {
    return this._http.get('/cakes')
  }

  addCake(newCake : any) {
    return this._http.post('/cakes', newCake)
  }

  editCake(editCake : any) {
    return this._http.put(`/cakes/${ editCake._id }`, editCake)
  }

  deleteCake(deleteCake : any) {
    return this._http.delete(`/cakes/${ deleteCake._id }`, deleteCake)
  }

  addRating(comment, cakeId) {
    return this._http.post(`cakes/${ cakeId }/rating`, comment)
  }
}
