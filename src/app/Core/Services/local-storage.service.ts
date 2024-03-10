import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoolLocalStorage } from '@angular-cool/storage';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  
  // private fondoColor:BehaviorSubject<string>;
  // private localStoragee = localStorage

  constructor(private coolLocalStorage: CoolLocalStorage) { 

    // const ColorAlmacenado = localStorage.getItem('FondoColor') || '#ffffff';
    // this.fondoColor = new BehaviorSubject<string>(ColorAlmacenado)
  }

  setFondoColor(key:any , color:string){
    this.coolLocalStorage.getObject('FondoColor');
    this.coolLocalStorage.setObject(key, color);
  }

  getFondoColor(key: any): any{
    return this.coolLocalStorage.getObject('FondoColor');
  }
}
