import { StaticInfo } from '../../refs-utility/refs-static/StaticInfo';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-board-userinfo',
  templateUrl: './board-userinfo.component.html',
  styleUrls: ['./board-userinfo.component.css']
})
export class BoardUserinfoComponent implements OnInit {
  @ViewChild('mainCard') mainCard: ElementRef;

  static = StaticInfo.USER_INFO;

  smallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.smallScreen && this.mainCard.nativeElement.offsetHeight < 200) {
      this.smallScreen = false;
    } else if (!this.smallScreen && this.mainCard.nativeElement.offsetHeight > 200) {
      this.smallScreen = true;
    }
  }
  constructor() {
    setTimeout(() => {
      this.onResize();
    }, 200);
  }

  ngOnInit(): void {
  }

}
