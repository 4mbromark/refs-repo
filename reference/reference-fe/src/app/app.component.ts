import { StyleService } from './refs-utility/refs-service/style.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reference-fe';

  @HostListener('window:resize', ['$event'])
  onResize() {
    const size = window.innerWidth;
    this.styleService.checkSmartphone(size);
  }
  constructor(
    private styleService: StyleService
  ) { }

  ngOnInit(): void {
    this.onResize();
  }
}
