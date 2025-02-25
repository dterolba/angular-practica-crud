import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { MileagePipe } from '../../pipe/mileage.pipe';
import { CarsService } from '../../services/cars.service';

@Component({
  standalone:true,
  selector: 'app-car-details',
  imports: [DecimalPipe, MileagePipe, CurrencyPipe],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit{
  @Input() carID?:string;
  car:any={};

  constructor(private carService: CarsService){
  }

  ngOnInit(): void {
    this.getCar();
  }

  async getCar(){
    await this.carService.getCarById(this.carID).subscribe((data:any) => {
      this.car = data;
    });
  }
}
