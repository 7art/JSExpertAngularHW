import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FilmModel } from "../../../film.model";
@Component({
  selector: "app-film-item",
  templateUrl: "./film-item.component.html",
  styleUrls: ["./film-item.component.css"]
})
export class FilmItemComponent implements OnInit {
  @Input() film = <any>{};
  @Output() markFavorite = new EventEmitter();
  // film: Film[];
  checked: boolean;
  constructor() {}
  ngOnInit() {}
  addToFavorites() {
    this.markFavorite.emit(this.checked);
  }
}
