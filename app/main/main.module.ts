import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MainComponent } from "./main-page/main.component";
import { FilmService } from "../film-catalog/film.service";

import { AppMaterialModule } from "../app-material.module";

@NgModule({
  imports: [CommonModule, FormsModule, AppMaterialModule],
  declarations: [MainComponent],
  providers: [FilmService]
})
export class MainModule {}
