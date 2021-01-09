import { RoutingService } from './../../../refs-utility/refs-service/routing.service';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonTag } from 'src/app/refs-utility/refs-enum/button-tag';
import { CustomButton } from 'src/app/refs-utility/refs-object/CustomButton';

@Component({
  selector: 'app-board-buttons',
  templateUrl: './board-buttons.component.html',
  styleUrls: ['./board-buttons.component.css']
})
export class BoardButtonsComponent implements OnInit {
  @Input() buttons: CustomButton[];

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  getButtonStyle(button: CustomButton): string {
    let style = '';
    if (button.background) {
      style += 'background-color: ' + button.background + '; ';
    }
    return style;
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
        break;
      }
      case ButtonTag.TYPE_PAGE: {
        this.routingService.goToPage(button.action);
        break;
      }
    }
  }

}
