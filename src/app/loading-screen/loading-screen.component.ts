import { Component, OnInit } from '@angular/core';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  loading: boolean = false;

  constructor(private loadingScreenService: LoadingScreenService) { }
  
  ngOnInit() {
  }

}
