import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

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
