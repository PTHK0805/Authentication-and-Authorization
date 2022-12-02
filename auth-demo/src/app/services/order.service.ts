import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Injectable } from '@angular/core';


@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
