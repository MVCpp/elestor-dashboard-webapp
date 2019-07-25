import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line: import-spacing
import {Negocio, CatNegocio} from  '../../models/negocio.model';
import { Observable } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


const url = 'http://ec2-52-53-191-68.us-west-1.compute.amazonaws.com:5000';
// const url = 'https://localhost:5001';
// const url = 'http://192.168.0.15:5000';

const baseurlNegocioObtener: string = url + '/api/negocio/obtenerall';
const baseurlCatNegocio: string = url + '/api/negocio/catnegocio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {


  constructor(public http: HttpClient,
              private spinnerService: Ng4LoadingSpinnerService) {

  }

  obtenerNegocio(): Observable<Negocio[]> {
    this.spinnerService.show();

    return this.http.post<any>(baseurlNegocioObtener, httpOptions)
    .pipe(
      tap((data: any) => {
        this.spinnerService.hide();
    }),
    catchError((err) => {
      this.spinnerService.hide();
      throw new Error('Error in source. Details: ' + err.name); // Use console.log(err) for detail
        })
      );
  }


  getCatNegocio(): Observable<CatNegocio[]> {
    this.spinnerService.show();
    return this.http.post<Observable<CatNegocio[]>>(baseurlCatNegocio, httpOptions)
    .pipe(
      tap((data: any) => {
        this.spinnerService.hide();
    }),
    catchError((err) => {
      this.spinnerService.hide();
      throw new Error('Error in source. Details: ' + err.name); // Use console.log(err) for detail
        })
      );
  }

}
