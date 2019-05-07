import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FilmModel } from "../../../film.model";
@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.css"]
})
export class FilmItemComponent implements OnInit {
  @Input() film = <any>{}; // Film[];
  @Output() markFavorite = new EventEmitter<number>();

  checked: boolean;
  constructor() {}
  ngOnInit() {}
  sendToParents(_filmId) {
    this.markFavorite.emit(_filmId);
  }
}
