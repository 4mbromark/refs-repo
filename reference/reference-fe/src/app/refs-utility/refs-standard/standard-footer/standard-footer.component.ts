import { Name } from '../../refs-enum/word/name';
import { RoutingService } from '../../refs-service/routing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-footer',
  templateUrl: './standard-footer.component.html',
  styleUrls: ['./standard-footer.component.css']
})
export class StandardFooterComponent implements OnInit {

  names = Name;

  constructor(
    private routingService: RoutingService
  ) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.routingService.goToHome();
  }

}
