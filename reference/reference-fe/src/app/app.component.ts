import { AlixService } from './refs-utility/refs-service/alix.service';
import { StorageTag } from './refs-utility/refs-enum/storage-tag';
import { StorageService } from './refs-utility/refs-service/storage.service';
import { StaticInfo } from './refs-utility/refs-static/StaticInfo';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'reference-fe';

  smartphone = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.smartphone && window.innerWidth > 500) {
      this.smartphone = false;
    } else if (!this.smartphone && window.innerWidth < 500) {
      this.smartphone = true;
    }
  }
  constructor(
  ) {
    this.onResize();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
