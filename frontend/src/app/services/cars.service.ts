import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private basePath:string = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {
  }

  getCars(){
    return this.http.get(this.basePath, this.setAuthHeader());
  }

  getCarById(id:any){
    return this.http.get(this.basePath, this.setAuthHeader());
  }

  createCar(car:any){
    return this.http.post(this.basePath, car, this.setAuthHeader());
  }

  updateCar(id:any){
    return this.http.put(this.basePath, id, this.setAuthHeader());
  }

  deleteCar(id:any){
    return this.http.delete(this.basePath, this.setAuthHeader());
  }

  setAuthHeader():any{
    let auth = localStorage.getItem('auth-token')
    let headers={ 'Authorization': 'Bearer '+auth }
    return {headers};
  }
}
