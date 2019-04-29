import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {

  films:object[] = [];  
  
  constructor(private svc: FilmService) {     
  }

  ngOnInit() {
    this.films = this.svc.getFilms();   
  }

}
