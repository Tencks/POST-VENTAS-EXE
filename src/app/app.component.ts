import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesListComponent } from './Windows/Clientes/clientes-list/clientes-list.component';
import { NavbarComponent } from './Shared/Components/navbar/navbar.component';
import { LocalStorageService } from './Core/Services/local-storage.service';
import { CoolStorageModule } from '@angular-cool/storage';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Shared/Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientesListComponent,NavbarComponent,CoolStorageModule, CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private coolStorage:LocalStorageService){}
  title = 'PostVentasEXE';
  fondoColor!:string;

  ngOnInit(): void {

      // this.localStorageS.getFondoColor().subscribe((color:string)  =>{
      //   this.fondoColor = color;
      // });

         // Obtiene un valor
          const dato = this.coolStorage.getFondoColor('FondoColor');
          console.log(dato, 'Esto sale de app.component'); // { key: 'valor' }
          this.fondoColor = dato;
      }

}
  
   
  

