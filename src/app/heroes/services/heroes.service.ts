import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Heroe } from '../interface/heroes.interface';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }


  getHeroe(id_heroe:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id_heroe}`);
  }

  getSugerencias(termino:string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }


  guardarHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  editaHeroe(id: string, heroe:Heroe): Observable<Heroe>{
    return this.http.patch<Heroe>(`${this.baseUrl}/heroes/${id}`, heroe);
  }

  deleteHeroe(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }


}
