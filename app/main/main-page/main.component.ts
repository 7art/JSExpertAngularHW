import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../film-catalog/film.service";
import { FilmModel } from "../../film.model";

@Component({
  selector: "app-main-page",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";
  films: FilmModel[];
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.films = this.filmService.getFilms(0, 3);
  }
}
