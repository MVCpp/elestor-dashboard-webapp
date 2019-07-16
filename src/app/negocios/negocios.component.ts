import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Negocio } from '../models/negocio.model';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  negocioModel: Negocio[];

  constructor(public api: BackendApiService) 
  {    
  }

  ngOnInit() {
    this.getNegocios();
  }

  getNegocios()
  {
    this.api.obtenerNegocio().subscribe(
      (data: Negocio[]) => {
        if(data[0] !== null && data[0] !== undefined)
        {
          this.negocioModel = data;
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
}
