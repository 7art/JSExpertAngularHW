import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmsComponent } from "./film-catalog/films-list/films-list.component";
import { MainComponent } from "./main/main-page/main.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "main", component: MainComponent },
  { path: "films", component: FilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
