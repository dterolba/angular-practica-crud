import { Component, OnInit } from '@angular/core';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CarsService } from '../services/cars.service';

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [CrudTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:  [ CarsService ],
})
export class HomeComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
    localStorage.setItem("auth-token", "mock-token");
  }

  createButton(){
    
  }
}
