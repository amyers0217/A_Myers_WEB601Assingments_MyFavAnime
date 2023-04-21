import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContentListComponent} from "./content-list/content-list.component";
import { DetailContentComponent} from "./detail-content/detail-content.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'list', component: ContentListComponent},
  { path: 'content/:id', component: DetailContentComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
