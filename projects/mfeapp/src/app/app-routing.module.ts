import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'',redirectTo:'miniTv',pathMatch:'full'},
  {path:'miniTv',component:TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
