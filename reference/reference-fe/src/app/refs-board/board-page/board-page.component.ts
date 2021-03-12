import { Alix } from './../../refs-utility/refs-object/Alix';
import { RoutingService } from '../../refs-utility/refs-service/routing.service';
import { AlixService } from '../../refs-utility/refs-service/alix.service';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { Page } from 'src/app/refs-utility/refs-object/Page';
import { BoardService } from '../board.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {

  page: Page = null;

  constructor(
    private alixService: AlixService,
    private routingService: RoutingService,
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.alixService.getPageCode().pipe(skip(1)).subscribe((pageCode: string) => {
      const idAlix = this.alixService.getAlixValue().id;
      this.boardService.loadPage(idAlix, pageCode).then((page: Page) => {
        this.page = page;
      }).catch((error) => {
        this.routingService.goToNotFound();
      });
    });
  }

  goToBoard(): void {
    this.routingService.goToBoard();
  }
}
