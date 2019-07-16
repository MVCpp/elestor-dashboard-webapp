import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Negocio} from  '../models/negocio.model'
import { Observable } from 'rxjs';


const url = 'http://ec2-52-53-191-68.us-west-1.compute.amazonaws.com:5000';

// const url = 'https://localhost:5001';

// const url = 'http://192.168.0.15:5000';

const baseurlNegocioObtener: string = url + "/api/negocio/obtenerall";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {


  constructor(public http: HttpClient) {
      
  }

  obtenerNegocio(): Observable<Negocio[]>
  {
    return this.http.post<any>(baseurlNegocioObtener, httpOptions)
    .pipe(
      tap((data: any) => {

    }),
    catchError((err) => {

      throw 'Error in source. Details: ' + err.name; // Use console.log(err) for detail
        })
      );
  }
}
