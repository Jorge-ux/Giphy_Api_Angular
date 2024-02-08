import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { GIFExpert } from '../interfaces/gif.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  // Necesita traer un tipo de dato GIFExpert en el mejor de los casos (Todos Los GIFs).
  // any => en caso de que falle la respuesta, se tiene que capturar

  // pipe => para controlar la respuesta error, en este caso sera un array vacio
  getGifs(): Observable<GIFExpert | any> {
    return this.http
      .get<GIFExpert>(this.baseUrl)
      .pipe(catchError(() => of([])));
  }
}
