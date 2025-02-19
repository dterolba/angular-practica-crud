import { HttpInterceptorFn } from '@angular/common/http';
import { CarsService } from '../services/cars.service';
import { inject } from '@angular/core';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {

  const carService = inject(CarsService);
  const test = carService.getAuthHeader();
  const authRequest = req.clone({
    setHeaders: {
      Authorization : test
    }
  });

  return next(authRequest);
};
