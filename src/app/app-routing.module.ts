import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'home',
    component: MyFirstCompComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
