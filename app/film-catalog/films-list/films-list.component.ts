import { Component, OnInit } from "@angular/core";
import { FilmService } from "../film.service";
import { FilmModel } from "../../film.model";
@Component({
  selector: "app-films",
  templateUrl: "./films-list.component.html",
  styleUrls: ["./films-list.component.css"]
})
export class FilmsComponent implements OnInit {
  films: FilmModel[];
  selectedOption: string;
  favoriteCount = 0;
  options = [
    { name: "По алфавиту: A-Z", value: 1 },
    { name: "По алфавиту: Z-A", value: 2 },
    { name: "По дате: 0-9", value: 3 },
    { name: "По дате: 9-0", value: 4 }
  ];
  constructor(private svc: FilmService) {}

  ngOnInit() {
    this.films = this.svc.getFilms();
  }
  doSort() {
    this.films = this.svc.sortFilms(this.selectedOption);
  }
  addToFavorites(eventParam) {
    eventParam ? this.favoriteCount++ : this.favoriteCount--;
  }
}
