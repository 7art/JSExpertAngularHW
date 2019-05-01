import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";
import { FilmModel } from "../../film.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  pageName: string = "Film Catalog Dashboard";
  films: FilmModel[];
  constructor(private svc: FilmService) {}

  ngOnInit() {
    this.films = this.svc.getFilms();
  }
}
