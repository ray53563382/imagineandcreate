import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './public/index/index.component';


const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
