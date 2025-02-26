import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './home/car-details/car-details.component';
import { NewCarComponent } from './home/new-car/new-car.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'cars/new', component: NewCarComponent},
    { path: 'cars/:carID', component: CarDetailsComponent},
    { path: '', redirectTo: 'home', pathMatch:'full'}
];
