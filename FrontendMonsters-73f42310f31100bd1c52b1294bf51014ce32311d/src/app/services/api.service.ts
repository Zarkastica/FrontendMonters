import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  crearDisfraz(Disfraz: any): Observable<any>{
    return this.http.post(`${this.urlApi}/Disfraz`, Disfraz)
  }

  getDisfraces(): Observable <any>{
    return this.http.get(`${this.urlApi}/Disfraz`)
  }

  getDisfrazPorId(id:string): Observable<any>{
    return this.http.get(`${this.urlApi}/Disfraz/${id}`)
  }

  updateDisfraz(id: string, Disfraz: any): Observable<any>{
    return this.http.put(`${this.urlApi}/notas/${id}`, Disfraz)
  }

  deleteDisfraz(id:string): Observable<any>{
    return this.http.delete(`${this.urlApi}/Disfraz/${id}`)
  }

}
