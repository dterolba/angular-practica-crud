import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private basePath:string = 'http://localhost:3000/brands';
  constructor(private http: HttpClient) {

  }

  getBrands(){
    return this.http.get(this.basePath);
  }

  getModelByBrand(id:any){
    return this.http.get(this.basePath, id);
  }
}
