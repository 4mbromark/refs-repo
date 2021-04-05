import { RoutingUrl } from '../refs-routing/routing-url';
import { StorageTag } from '../refs-enum/storage-tag';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private path: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {
    this.router.events.subscribe(r => {
      const path = this.location.path();
      if (path !== this.storageService.get(StorageTag.STORAGE_URL)) {
        this.path.next(this.location.path());
      }
    });
  }

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  public goToHome(): void {
    this.router.navigate([RoutingUrl.HOME]);
  }
  public goToBoard(): void {
    const alix = this.getAlixFromPath();
    this.router.navigate([alix]);
  }
  public goToPage(url: string): void {
    const alix = this.getAlixFromPath();
    this.router.navigate([alix, url]);
  }
  public goToNotFound(): void {
    this.router.navigate([RoutingUrl.NOTFOUND], { skipLocationChange: true });
    this.location.replaceState(this.storageService.get(StorageTag.STORAGE_URL));
  }

  public goBack(): void {
    this.location.back();
  }

  public getUrl(): string {
    return this.location.path();
  }
  public getPath(): Observable<string> {
    return this.path.asObservable();
  }

  public getAlixFromPath(): string {
    return this.getUrl().split('/')[1];
  }

  public reload(): void {
    window.location.reload();
  }
}
