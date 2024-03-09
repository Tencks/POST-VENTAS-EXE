import { Component, OnInit } from '@angular/core';
import { ApiDRFService } from '../../../Core/Services/api-drf.service';
import { listaClientesI } from '../../../Core/Interfaces/Ohter/Productos.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit{

  clientes:listaClientesI[]=[];

  constructor(private api :ApiDRFService) {}

  ngOnInit(): void {

    this.api.Clientes().subscribe((clientes =>{
      console.log(clientes);
      this.clientes = clientes
     }));



  }



}
