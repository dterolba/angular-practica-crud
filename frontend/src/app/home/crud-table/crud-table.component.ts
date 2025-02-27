import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  standalone:true,
  selector: 'app-crud-table',
  imports: [],
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.css',
})
export class CrudTableComponent implements OnInit{

  cars:Array<any>=[];

  constructor(private carService: CarsService){
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((data:any) => {
      this.cars = data
    });
  }
}
