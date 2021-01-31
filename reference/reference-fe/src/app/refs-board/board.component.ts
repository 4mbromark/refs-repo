import { Alix } from './../refs-utility/refs-object/Alix';
import { TitleService } from './../refs-utility/refs-service/title.service';
import { AlixService } from './../refs-utility/refs-service/alix.service';
import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private alixService: AlixService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.alixService.getAlix().pipe(skip(1)).subscribe((alix: Alix) => {
      this.titleService.setTitleWithAlix(alix.alix);
    });
  }

}
