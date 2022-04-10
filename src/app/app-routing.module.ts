import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthContextComponent} from "./core/auth/auth-context/auth-context.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {IsLoggedGuard} from "./guards/is-logged.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AuthContextComponent},
  {
    path: 'dashboard', canActivate: [IsLoggedGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
