import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthContextComponent} from "./core/auth/auth-context/auth-context.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthContextComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
