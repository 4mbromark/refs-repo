import { RoutingService } from './routing.service';
import { AuthenticationService } from './../refs-auth/authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../refs-object/User';
import { RestUrl } from '../refs-rest/rest-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private userPropic: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private routingService: RoutingService
  ) { }

  login(uid: string, pwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.USER_AUTH, { uid: uid, pwd: pwd }, { responseType: 'json' }).subscribe(
        (user: User) => {
          this.authService.authenticate(user.token);
          this.routingService.reload();
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  logout(): void {
    this.authService.invalidate();
    this.routingService.reload();
  }

  setUser(user: User): void {
    this.user.next(user);
    this.loadUserPropic();
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  getUserPropic(): Observable<string> {
    return this.userPropic.asObservable();
  }

  loadUserPropic(): void {
    this.http.get(RestUrl.USER_GETPROPIC + this.user.value.id, { responseType: 'text' }).subscribe(
      (propic: string) => {
        this.userPropic.next(propic);
      },
      (error) => { }
    );
  }
}
