import { AdminManagerComponent } from './refs-admin/admin-manager.component';
import { LoginComponent } from './refs-login/login.component';
import { HomeComponent } from './refs-home/home.component';
import { RoutingUrl } from './refs-utility/refs-routing/routing-url';
import { BoardNotfoundComponent } from './refs-utility/refs-notfound/notfound.component';
import { BoardComponent } from './refs-board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardPageComponent } from './refs-board/board-page/board-page.component';

import { LoginGuardService as LoginGuard } from './refs-utility/refs-auth/guard/login-guard.service';
import { AuthenticationGuardService as AuthGuard } from './refs-utility/refs-auth/guard/auth-guard.service';

const routes: Routes = [
  { path: RoutingUrl.HOME, component: HomeComponent },
  { path: RoutingUrl.LOGIN_PAGE, component: LoginComponent, canActivate: [LoginGuard] },
  { path: RoutingUrl.ADMIN_MANAGER, component: AdminManagerComponent, canActivate: [AuthGuard] },

  { path: RoutingUrl.NOTFOUND, component: BoardNotfoundComponent },

  { path: ':alix', children: [
    { path: RoutingUrl.BOARD, component: BoardComponent },
    { path: ':page', component: BoardPageComponent },
  ]},

  { path: RoutingUrl.EVERYTHING, component: BoardNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
