import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films-list/films-list.component';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { FilmService } from './film.service';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,    
    MatTabsModule
  ],
  declarations: [
    MainComponent, 
    FilmsComponent, 
    DetailsComponent, FilmItemComponent
  ],
  providers:[FilmService]
})
export class FilmCatalogModule { }