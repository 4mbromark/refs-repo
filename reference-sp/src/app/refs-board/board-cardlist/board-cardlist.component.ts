import { StaticInfo } from './../../refs-utility/refs-static/StaticInfo';
import { Component, HostListener, OnInit } from '@angular/core';
import { ButtonTag } from 'src/app/refs-utility/refs-enum/button-tag';
import { CustomButton } from 'src/app/refs-utility/refs-object/CustomButton';
import { CustomInfo } from 'src/app/refs-utility/refs-object/CustomInfo';
import { InfoTag } from 'src/app/refs-utility/refs-enum/info-tag';

@Component({
  selector: 'app-board-cardlist',
  templateUrl: './board-cardlist.component.html',
  styleUrls: ['./board-cardlist.component.css']
})
export class BoardCardlistComponent implements OnInit {

  static = StaticInfo;

  smartphone = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.smartphone && window.innerWidth > 500) {
      this.smartphone = false;
    } else if (!this.smartphone && window.innerWidth < 500) {
      this.smartphone = true;
    }
  }
  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
  }

}
