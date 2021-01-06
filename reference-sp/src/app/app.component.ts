import { StaticInfo } from './refs-utility/refs-static/StaticInfo';
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.pageTitle.setTitle(StaticInfo.PAGE_TITLE);
  }
}
