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
    return this.http.get(this.basePath);
  }

  getCarById(id:any){
    return this.http.get(this.basePath+'/'+id);
  }

  createCar(car:any){
    return this.http.post(this.basePath, car);
  }

  updateCar(id:any){
    return this.http.put(this.basePath, id);
  }

  deleteCar(id:any){
    return this.http.delete(this.basePath);
  }

  getAuthHeader():any{
    let auth = localStorage.getItem('auth-token') || '';
    return 'Bearer '+auth;
  }
}
