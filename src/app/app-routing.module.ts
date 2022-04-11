import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DetailsComponent} from "./details/details.component";
import {MainpageComponent} from "./mainpage/mainpage.component";

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,

  },
  {
    path: 'details/:country',
    component: DetailsComponent,
    runGuardsAndResolvers: "always",
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
