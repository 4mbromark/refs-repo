import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CustomHeader } from 'src/app/refs-utility/refs-object/database/custom/CustomHeader';

@Component({
  selector: 'app-context-header',
  templateUrl: './context-header.component.html',
  styleUrls: ['./context-header.component.css']
})
export class ContextHeaderComponent implements OnInit {
  @Input() alix: string;
  @Input() header: CustomHeader;

  constructor() { }

  ngOnInit(): void {
  }

  showDivider(): boolean {
    return (
      this.header.bio !== null ||
      this.header.infoList && this.header.infoList.length > 0 ||
      this.header.buttonList && this.header.buttonList.length > 0
    );
  }
}
