import { Component, Input, OnInit } from '@angular/core';
import { InfoTag } from 'src/app/refs-utility/refs-enum/InfoTag';
import { CustomInfo } from 'src/app/refs-utility/refs-object/CustomInfo';

@Component({
  selector: 'app-board-infos',
  templateUrl: './board-infos.component.html',
  styleUrls: ['./board-infos.component.css']
})
export class BoardInfosComponent implements OnInit {
  @Input() infos: CustomInfo[];

  constructor() { }

  ngOnInit(): void {
  }

  getInfoIcon(info: CustomInfo): string {
    switch (info.type) {
      case InfoTag.TYPE_BIRTHDAY: {
        return 'birthday-cake';
      }
      case InfoTag.TYPE_PLACE: {
        return 'map-marker-alt';
      }
      case InfoTag.TYPE_CONTACT: {
        return 'envelope';
      }
    }
  }

}
