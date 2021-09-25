import { Component, Input, OnInit } from '@angular/core';
import { CustomButton } from 'src/app/refs-domain/CustomButton';
import { ButtonTag } from 'src/app/refs-domain/enum/ButtonTag';
import { RoutingService } from 'src/app/refs-service/routing.service';


@Component({
  selector: 'app-context-button',
  templateUrl: './context-button.component.html',
  styleUrls: ['./context-button.component.css']
})
export class ContextButtonComponent implements OnInit {
  @Input() buttons: CustomButton[];

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
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
