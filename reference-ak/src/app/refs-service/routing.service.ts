import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RoutingUrl } from '../refs-domain/enum/RoutingUrl';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private path: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private location: Location,
  ) {
    this.router.events.subscribe(r => {
      const path = this.location.path();
      this.path.next(this.location.path());
    });
  }

  public goToBoard(): void {
    this.router.navigate([RoutingUrl]);
  }
  public goToPage(url: string): void {
    this.router.navigate([url]);
  }

  public getPath(): Observable<string> {
    return this.path.asObservable();
  }
}
