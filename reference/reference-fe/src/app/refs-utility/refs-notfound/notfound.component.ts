import { RoutingService } from '../refs-service/routing.service';
import { NotfoundQuoteList } from '../refs-enum/notfound-quote-list';
import { NotfoundQuote } from '../refs-object/NotfoundQuote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
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
