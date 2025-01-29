import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private urlApi = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) { }
  
    getNotas(): Observable <any>{
      return this.http.get(`${this.urlApi}/notas`)
    }
    //getColor // arreglar tarde
    
}
