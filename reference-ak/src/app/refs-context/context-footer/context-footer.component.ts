import { BaseValue } from './../../refs-content/BaseValue';
import { RoutingService } from '../../refs-service/routing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context-footer',
  templateUrl: './context-footer.component.html',
  styleUrls: ['./context-footer.component.css']
})
export class ContextFooterComponent implements OnInit {

  public title = BaseValue.PAGE_TITLE;

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  goToBoard(): void {
    this.routingService.goToBoard();
  }
}
