import { RoutingService } from './../../refs-utility/refs-service/routing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-footer',
  templateUrl: './board-footer.component.html',
  styleUrls: ['./board-footer.component.css']
})
export class BoardFooterComponent implements OnInit {

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.routingService.goToHome();
  }

}
