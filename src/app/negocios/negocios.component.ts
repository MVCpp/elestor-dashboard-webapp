import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api/backend-api.service';
import { Negocio, CatNegocio } from '../models/negocio.model';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  negocioModel: Negocio[];
  catnegocio: CatNegocio[];
  filteredNeg:Negocio[];

  constructor(public api: BackendApiService) 
  {    
  }

  ngOnInit() {
    this.getNegocios();
    this.getCatNegocio();
  }

  getNegocios()
  {
    this.api.obtenerNegocio().subscribe(
      (data: Negocio[]) => {
        if(data[0] !== null && data[0] !== undefined)
        {
          this.negocioModel = data;
          debugger
            if(data.length == 0)
            {
              
            }
            else
            {

            }
        }
        else
        {
      
        }
      },
       (error: any) =>  {
         console.log(error)
        });
  }

  getCatNegocio()
  {
    this.api.getCatNegocio().subscribe(
      (data: CatNegocio[]) => {
      if(data !== null)
        {
          this.catnegocio = data;     
        }
      else
      {
        
      }
      },
        (error: any) => {
      
      });
  }

  verEnMaps(biz, $event){
    var win = window.open('https://www.google.com/maps/@'+ biz.latitud+','+ biz.longitud+',981m/data=!3m1!1e3', '_blank');
    win.focus();
  }

  filtrarNegocios($event){
    let descripcion = $event.target.value;

      // this.getNegocios();

      if(descripcion === '-6'){
        
      }else{
        this.filteredNeg = this.negocioModel.filter(
          cat => cat.categoria === descripcion
        );  
        this.negocioModel = this.filteredNeg;      
    }
    debugger
  }
}
