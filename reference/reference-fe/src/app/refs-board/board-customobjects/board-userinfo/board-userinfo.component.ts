import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CustomUserinfo } from 'src/app/refs-utility/refs-object/custom/CustomUserinfo';

@Component({
  selector: 'app-board-userinfo',
  templateUrl: './board-userinfo.component.html',
  styleUrls: ['./board-userinfo.component.css']
})
export class BoardUserinfoComponent implements OnInit {
  @Input() alix: string;
  @Input() userinfo: CustomUserinfo;

  constructor() { }

  ngOnInit(): void {
  }

  showDivider(): boolean {
    return (
      this.userinfo.bio !== null ||
      this.userinfo.infoList && this.userinfo.infoList.length > 0 ||
      this.userinfo.buttonList && this.userinfo.buttonList.length > 0
    );
  }
}
