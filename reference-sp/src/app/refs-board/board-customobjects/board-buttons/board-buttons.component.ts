import { Component, Input, OnInit } from '@angular/core';
import { ButtonTag } from 'src/app/refs-utility/refs-enum/ButtonTag';
import { CustomButton } from 'src/app/refs-utility/refs-object/CustomButton';

@Component({
  selector: 'app-board-buttons',
  templateUrl: './board-buttons.component.html',
  styleUrls: ['./board-buttons.component.css']
})
export class BoardButtonsComponent implements OnInit {
  @Input() buttons: CustomButton[];

  constructor() { }

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
      }
    }
  }

}
