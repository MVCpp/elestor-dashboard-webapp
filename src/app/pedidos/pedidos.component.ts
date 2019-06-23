import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private afdb: AngularFireDatabase) { }

  ngOnInit() {
    debugger
      this.afdb.list("pedidos").snapshotChanges().subscribe(data=>{
        data.map(data=>{
          debugger
          let info = data.payload.val();
          
        });
      });
  }

}
