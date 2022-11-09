import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', component: CorsiComponent},
  { path: 'countries', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
