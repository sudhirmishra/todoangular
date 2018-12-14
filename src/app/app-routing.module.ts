import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';

const routes: Routes = [
  {path:'home', component:ToDoItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
