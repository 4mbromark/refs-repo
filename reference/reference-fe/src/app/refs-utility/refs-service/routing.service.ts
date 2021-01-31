import { StorageTag } from './../refs-enum/storage-tag';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  path: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {
    this.router.events.subscribe(r => {
      if (location.path() !== this.storageService.get(StorageTag.STORAGE_URL)) {
        this.path.next(this.location.path());
      }
    });
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
  goToPage(url: string): void {
    const user = this.getUrl().split('/')[1];
    this.router.navigate([user, url]);
  }
  goToNotFound(): void {
    this.router.navigate(['404'], { skipLocationChange: true });
    this.location.replaceState(this.storageService.get(StorageTag.STORAGE_URL));
  }

  goBack(): void {
    this.location.back();
  }

  getUrl(): string {
    return this.location.path();
  }
  getPath(): Observable<string> {
    return this.path.asObservable();
  }

}
