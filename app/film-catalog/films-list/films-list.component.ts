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
  selectedOption: number;
  favoriteCount = 0;
  filterOptions = [
    { name: "По алфавиту: A-Z", value: 1 },
    { name: "По алфавиту: Z-A", value: 2 },
    { name: "По дате: 0-9", value: 3 },
    { name: "По дате: 9-0", value: 4 }
  ];
  itemsInRow = 3;
  itemStart = 0;
  itemEnd = this.itemsInRow;
  value = "";
  searchStarted = false;
  notFoundFilm = false;
  showMoreBtnDis = false;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.films = this.filmService.getFilms(this.itemStart, this.itemEnd);
    this.getFavoritesCount();
  }
  doSort() {
    this.searchStarted = false;
    this.itemEnd = 3;
    this.showMoreBtnDis = false;
    this.filmService.sortFilms(this.selectedOption);
    this.films = this.filmService.getFilms(this.itemStart, this.itemEnd);
  }
  changeFavorites(filmId: number) {
    this.filmService.changeFavoriteProperty(filmId);
    this.films = this.searchStarted
      ? this.filmService.getSearchFilms(this.itemStart, this.itemEnd)
      : this.filmService.getFilms(this.itemStart, this.itemEnd);
    this.getFavoritesCount();
  }
  getFavoritesCount() {
    this.favoriteCount = this.filmService.countFavorites();
  }
  search(value: string) {
    this.itemEnd = 3;
    this.showMoreBtnDis = false;
    if (value.length >= 3) {
      this.searchStarted = true;
      this.filmService.searchFilms(value);
      this.films = this.filmService.getSearchFilms(
        this.itemStart,
        this.itemEnd
      );
    } else {
      this.searchStarted = false;
      this.films = this.filmService.getFilms(this.itemStart, this.itemEnd);
    }

    this.notFoundFilm = this.films.length === 0 ? true : false;
    this.toggleShowMoreBtn();
  }
  showMore() {
    this.itemEnd += this.itemsInRow;
    this.films = this.searchStarted
      ? this.filmService.getSearchFilms(this.itemStart, this.itemEnd)
      : this.filmService.getFilms(this.itemStart, this.itemEnd);
    this.toggleShowMoreBtn();
  }

  toggleShowMoreBtn() {
    let arrayLength = this.searchStarted
      ? this.filmService.getSearchFilmsLength()
      : this.filmService.getInitDataFilmsLength();
    if (this.itemEnd >= arrayLength) {
      this.showMoreBtnDis = true;
    }
  }
}
