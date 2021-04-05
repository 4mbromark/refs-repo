import { UserService } from '../../refs-service/user.service';
import { MasterUser } from './../../refs-object/database/master/MasterUser';
import { RoutingService } from '../../refs-service/routing.service';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RoutingUrl } from '../../refs-routing/routing-url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private routingService: RoutingService
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then((user: MasterUser) => {
        this.userService.setUser(user);
        resolve(true);
      }).catch(() => {
        this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
        resolve(false);
      });
    });
  }
}
