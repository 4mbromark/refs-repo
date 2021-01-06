import { InfoTag } from './../../refs-utility/refs-enum/InfoTag';
import { CustomInfo } from './../../refs-utility/refs-object/CustomInfo';
import { CustomButton } from './../../refs-utility/refs-object/CustomButton';
import { StaticInfo } from '../../refs-utility/refs-static/StaticInfo';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ButtonTag } from 'src/app/refs-utility/refs-enum/ButtonTag';

@Component({
  selector: 'app-board-userinfo',
  templateUrl: './board-userinfo.component.html',
  styleUrls: ['./board-userinfo.component.css']
})
export class BoardUserinfoComponent implements OnInit {
  @ViewChild('mainCard') mainCard: ElementRef;

  static = StaticInfo;

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
    }, 100);
  }

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

  getButtonAction(button: CustomButton): void {
    switch (button.type) {
      case ButtonTag.TYPE_LINK: {
        let url = '';
        if (!/^http[s]?:\/\//.test(button.action)) {
          url += 'http://';
        }

        url += button.action;
        window.open(url, '_blank');
      }
    }
  }

}
