import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: RoutingUrl.LOGIN_PAGE, component: BlueLoginComponent, canActivate: [LoginGuard] },

  { path: '4mbromark', component: AppComponent },

  /*{ path: RoutingUrl.TASKLIST_MODULE, redirectTo: RoutingUrl.TASKLIST_MODULE_USR, pathMatch: 'full' },*/

  { path: '', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'clsupproject', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'pholayider', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'char.snap', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'eraclea.in', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'bellowsgraphy', redirectTo: '4mbromark', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
