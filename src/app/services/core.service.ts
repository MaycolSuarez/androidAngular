import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public urlServicesBD = 'https://backend-ws-notes.onrender.com/api';

  constructor() {
    console.log('Aplication ready ✅');
   }
}
