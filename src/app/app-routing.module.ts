import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatistiqueComponent} from './statistique/statistique.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  { path: 'show-statistiques', component: StatistiqueComponent},
  { path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
