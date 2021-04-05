import { CustomTextline } from '../../../refs-utility/refs-object/database/custom/CustomTextline';
import { StyleService } from '../../../refs-utility/refs-service/style.service';
import { RoutingService } from '../../../refs-utility/refs-service/routing.service';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonTag } from 'src/app/refs-utility/refs-enum/button-tag';
import { CustomButton } from 'src/app/refs-utility/refs-object/database/custom/CustomButton';

@Component({
  selector: 'app-context-buttons',
  templateUrl: './context-buttons.component.html',
  styleUrls: ['./context-buttons.component.css']
})
export class ContextButtonsComponent implements OnInit {
  @Input() buttons: CustomButton[];

  constructor(
    private styleService: StyleService,
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  getTextStyle(text: CustomTextline): string {
    return '';
    // return this.styleService.getTextStyle(text);
  }
  getButtonStyle(button: CustomButton): string {
    return this.styleService.getButtonStyle(button);
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
