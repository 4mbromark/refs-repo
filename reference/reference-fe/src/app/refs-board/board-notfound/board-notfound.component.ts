import { RoutingService } from './../../refs-utility/refs-service/routing.service';
import { NotfoundQuoteList } from '../../refs-utility/refs-enum/notfound-quote-list';
import { NotfoundQuote } from './../../refs-utility/refs-object/NotfoundQuote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-notfound',
  templateUrl: './board-notfound.component.html',
  styleUrls: ['./board-notfound.component.css']
})
export class BoardNotfoundComponent implements OnInit {

  quote: NotfoundQuote;

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
    this.quote = NotfoundQuoteList.getCasualQuote();
  }

  goBack(): void {
    this.routingService.goBack();
  }

}
