import { TitleService } from '../refs-utility/refs-service/title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitleStandard();
  }

}
