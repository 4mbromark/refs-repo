import { Component, Input, OnInit } from '@angular/core';
import { CustomInfo } from 'src/app/refs-domain/CustomInfo';
import { InfoTag } from 'src/app/refs-domain/enum/InfoTag';
import { ClipboardService } from 'src/app/refs-service/clipboard.service';


@Component({
  selector: 'app-context-info',
  templateUrl: './context-info.component.html',
  styleUrls: ['./context-info.component.css']
})
export class ContextInfoComponent implements OnInit {
  @Input() infos: CustomInfo[];

  constructor(
    private clipboardService: ClipboardService
  ) { }

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

  copyToClipboard(info: string): void {
    this.clipboardService.copyWithMessage(info);
  }

}
