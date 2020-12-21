import { Injectable } from '@angular/core';
import { Maqola } from './maqola.model';

@Injectable({
  providedIn: 'root'
})
export class MaqolaService {
  maqolalar: Array<any[]> = [];
  public vaqtincha = JSON.parse(localStorage.getItem('maqolalar'));
  maqolaqosh(maqola: Array<any[]>) {
    if (localStorage.getItem('maqolalar')) {
      this.maqolalar = JSON.parse(localStorage.getItem('maqolalar'));
      this.maqolalar.push(maqola);
      localStorage.setItem('maqolalar', JSON.stringify(this.maqolalar));
    } else {
      this.maqolalar.push(maqola);
      return localStorage.setItem('maqolalar', JSON.stringify(this.maqolalar))
    }
  }
  constructor() { }
}
