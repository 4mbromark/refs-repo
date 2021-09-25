import { BaseContent } from './../refs-content/BaseContent';
import { DeviceService } from './../refs-service/device.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MasterBoard } from '../refs-domain/MasterBoard';
import { MasterPage } from '../refs-domain/MasterPage';
import { CustomCard } from '../refs-domain/CustomCard';
import { RoutingService } from '../refs-service/routing.service';
import { TitleService } from '../refs-service/title.service';


@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {

  context: MasterBoard | MasterPage = BaseContent.BOARD;
  header: any;

  cardList: CustomCard[] = null;

  smartphone = false;
  columnCount = 1;

  @HostListener('window:resize', ['$event'])
  onResize() {
    let size = window.innerWidth;
    let count: number;
    if (size > 1500) {
      count = 4;
    } else if (size > 1100) {
      count = 3;
    } else if (size > 700) {
      count = 2;
    } else {
      count = 1;
    }
    if (this.cardList.length < count) {
      count = this.cardList.length;
    }
    this.columnCount = count;
  }
  constructor(
    private titleService: TitleService,
    private deviceService: DeviceService,
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
    this.deviceService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
    this.routingService.getPath().subscribe((path: string) => {
      const code = path.replace('/', '');
      const page = BaseContent.PAGE_LIST.find(p => p.code === code);
      if (page) {
        this.setPage(page);
      } else {
        this.setBoard();
      }
      this.cardList = this.context.cardList;
      this.onResize();
      this.header = this.context;
    });
  }

  private setBoard(): void {
    this.context = BaseContent.BOARD;
    this.titleService.setTitleWithBoard();
  }

  private setPage(page: MasterPage): void {
    this.context = page;
    this.titleService.setTitleWithPage(page.title.text);
  }
}
