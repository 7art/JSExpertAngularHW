import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainComponent } from "./main/main.component";
import { FilmsComponent } from "./films-list/films-list.component";
import { FilmItemComponent } from "./films-list/film-item/film-item.component";
import { FormsModule } from "@angular/forms";
import { DetailsComponent } from "./details/details.component";
import { FilmService } from "./film.service";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonToggleModule } from "@angular/material";
import { MatSlideToggleModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  declarations: [
    MainComponent,
    FilmsComponent,
    DetailsComponent,
    FilmItemComponent
  ],
  providers: [FilmService]
})
export class FilmCatalogModule {}
