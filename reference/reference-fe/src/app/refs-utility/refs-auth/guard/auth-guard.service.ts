import { RoutingService } from '../../refs-service/routing.service';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingUrl } from '../../refs-routing/routing-url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private routingService: RoutingService
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then(() => {
        resolve(true);
      }).catch(() => {
        this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
        resolve(false);
      });
    });
  }
}
