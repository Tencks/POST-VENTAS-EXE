import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpresaI } from '../../../Core/Interfaces/Ohter/Empresa.interface';
import { ApiDRFService } from '../../../Core/Services/api-drf.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from '../../../Core/Services/local-storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  Empresa:EmpresaI[]=[];

  User:string = 'Tencks';

  urlActual!:string;
  constructor(private router:Router, private api:ApiDRFService,private coolStorage:LocalStorageService) {}
  ngOnInit(): void {
    this.urlActual = this.router.url;

    this.api.GetEmpresa().subscribe(data =>{
      console.log(data)

      this.Empresa = data
    })




  }
  
  generateTicket: boolean = false;


  
  submitForm() {
    // Aquí puedes agregar la lógica para generar un ticket si la casilla de verificación está activa
    if (this.generateTicket) {
      this.generateTicketFunction();
    } else{
      window.location.reload();
    }
    // Aquí puedes agregar la lógica para enviar el formulario
  }
  
  generateTicketFunction() {
    // Aquí puedes agregar la lógica para generar el ticket
    window.print();
    alert('Se ha generado un ticket');
    window.location.reload();
  }
  
  
  Options(){
  
    const contentHtml = `
      <p>
          Modificaciones básicas
      </p>
      <br>
  
          <form id="Config">
  
          <div class="col">
               <mat-label>Modo Oscuro</mat-label>
            <select class="form-select" id="FondoColor">
                   <option value="black">Sí</option>
                   <option value="white">No</option>
                   <option value="otro">Sorpresa</option>
            </select>
          </div>
  
          <hr class="mx-n3">
  
          <div class="col">
           <mat-label>Fondo animado</mat-label>
              <select class="form-select" id="Animado">
                  <option value="False">No</option>
                  <option value="True">Sí</option>
              </select>
          </div>
  
        <hr class="mx-n3">
  
          </form> 
      `;
  
    Swal.fire({
      title: 'Configuraciones',
      icon: 'info',
      html:
       contentHtml,
      background: `#5a5c69`,
      color:`#f8f9fc`,
      confirmButtonColor:`#f6c23e`, 
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Confirmar',
      cancelButtonText:
        'Cancelar',
    }).then((result) =>{
        if(result.isConfirmed){
          const formulario = document.querySelector('#Config') as HTMLFormElement;
          if(formulario){
            const ConfigData:any  = {};
            const elementos = Array.from(formulario.elements);

            for (let elemento of elementos){
              if(elemento instanceof HTMLSelectElement){
                let nombre = elemento.getAttribute('id');
                let valor = elemento.value;
                if(nombre){
                  ConfigData[nombre] = valor;
                  // localStorage.setItem(nombre, valor)
                  let nose = this.coolStorage.setFondoColor(nombre, valor);
                  console.log(nose, 'Nose se como sale ')

                }
              }
            }

            console.log(ConfigData, 'funcionando 1');
            location.reload();
          }
        }
    });

  
  }
  
  }
  