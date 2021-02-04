import { RoutingService } from '../../../refs-utility/refs-service/routing.service';
import { CustomPage } from '../../../refs-utility/refs-object/custom/CustomPage';
import { AlixService } from '../../../refs-utility/refs-service/alix.service';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { Page } from 'src/app/refs-utility/refs-object/Page';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {

  page: CustomPage;

  constructor(
    private alixService: AlixService,
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
    this.alixService.getPage().subscribe((page: Page) => {
      // this.page = StaticInfo.PAGE_LIST.find(p => p.page === page);
    });
  }

  goToBoard(): void {
    this.routingService.goBack();
  }

}
