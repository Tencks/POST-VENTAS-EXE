import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { listaClientesI } from '../Interfaces/Ohter/Productos.interface';
import { LoginI, RegisterI, ResponseI, TokenI } from '../Interfaces/Auth/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiDRFService {

  //METODO PARA CONECTAR A LA API DE RESTFRAMEWORK

  private urlApi = 'http://127.0.0.1:8000/api/';

  // private ProductoID: 
  // private userID : getUserDataI[] =[];


  constructor(private http: HttpClient) { }

  
  Clientes():Observable<listaClientesI[]>{
    let direccion = this.urlApi + "clientes/"
    return this.http.get <listaClientesI[]>(direccion);
  }

  GetEmpresa():Observable<any>{
    let direccion = this. urlApi + "empresa/"
    return this.http.get <any>  (direccion);
  }

  loginUser(form:LoginI):Observable<ResponseI>{
    let direccion = this.urlApi + "login/"
    return this.http.post<ResponseI>(direccion,form)
  }

  LogoutUser(form:TokenI):Observable<TokenI>{
    let direccion = this.urlApi + "logout/"
    return this.http.post<TokenI>(direccion,form)
  }

  // RegisterUser(form:RegisterI):Observable<RegisterI>{
  //   let direccion = this.urlApi + "addUser/"
   
  //   return this.http.post<RegisterI>(direccion,form )
  // }
  
  //  loginByEmail(form:LoginI):Observable<ResponseI> {
  //   let direccion = this.urlApi + "login/"
   
  //   return this.http.post<ResponseI>(direccion,form );
  //  }
  
  // Logout(form:TokenI):Observable<TokenI>{
  //   let direccion = this.urlApi + "logout/"
    
  //   return this.http.post<TokenI>(direccion,form);
  // }
  


}
