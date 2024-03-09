import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesListComponent } from './Windows/Clientes/clientes-list/clientes-list.component';
import { NavbarComponent } from './Shared/Components/navbar/navbar.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientesListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(){}
  title = 'PostVentasEXE';
  Fondo:any = '';

  ngOnInit(): void {
   if(localStorage.getItem('FondoColor')){
      this.Fondo = localStorage.getItem('FondoColor');
      console.log(this.Fondo)
        
        // document.getElementById('BackgroundStyles').style.backgroundColor = this.Fondo.value;
      
   
    }
  
   }
  
}
