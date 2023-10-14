import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public urlServicesBD = '/api';

  constructor() {
    console.log('Aplication ready ✅');
   }
}
