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
  title = 'reference-sp';

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
    private pageTitle: Title,
    private alixService: AlixService,
    private storageService: StorageService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.alixService.getAlix().subscribe((alix: string) => {
      if (alix) {
        this.pageTitle.setTitle(alix + ' - Reference');
      }
    });
  }

  ngOnDestroy(): void {
  }
}
