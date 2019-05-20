import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FilmsComponent } from "./films-list/films-list.component";
import { FilmItemComponent } from "./films-list/film-item/film-item.component";
import { AppMaterialModule } from "../app-material.module";
import { FilmService } from "./film.service";

@NgModule({
  imports: [CommonModule, FormsModule, FlexLayoutModule, AppMaterialModule],
  declarations: [FilmsComponent, FilmItemComponent],
  providers: [FilmService]
})
export class FilmCatalogModule {}
