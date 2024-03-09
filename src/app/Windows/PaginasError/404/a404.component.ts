import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ClientesListComponent } from '../../Clientes/clientes-list/clientes-list.component';

@Component({
  selector: 'app-a404',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, ClientesListComponent],
  templateUrl: './a404.component.html',
  styleUrl: './a404.component.css'
})
export class a404Component {

}
