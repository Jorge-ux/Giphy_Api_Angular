import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Datum, GIFExpert } from '../interfaces/gif.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  baseUrl = environment.baseURL;
  apiKey = environment.apiKey;
  complement = environment.complement;
  fullApi = environment.baseURLFull;
  listaProductos = new EventEmitter<Datum[]>();

  constructor(private http: HttpClient) {}

  // Necesita traer un tipo de dato GIFExpert en el mejor de los casos (Todos Los GIFs).
  // any => en caso de que falle la respuesta, se tiene que capturar

  // pipe => para controlar la respuesta error, en este caso sera un array vacio
  getGifs(term: string): Observable<GIFExpert | any> {
    return this.http
      .get<GIFExpert>(
        `${this.baseUrl}${this.apiKey}&q=${term}${this.complement}`
      )
      .pipe(catchError(() => of([])));
  }
}
