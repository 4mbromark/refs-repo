import { Board } from './../refs-utility/refs-object/Board';
import { BoardService } from './board.service';
import { Alix } from './../refs-utility/refs-object/Alix';
import { TitleService } from './../refs-utility/refs-service/title.service';
import { AlixService } from './../refs-utility/refs-service/alix.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  alix: Alix;
  board: Board;

  smartphone = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.smartphone && window.innerWidth > 500) {
      this.smartphone = false;
    } else if (!this.smartphone && window.innerWidth < 500) {
      this.smartphone = true;
    }
  }
  constructor(
    private alixService: AlixService,
    private titleService: TitleService,
    private boardService: BoardService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.alixService.getAlix().pipe(skip(1)).subscribe((alix: Alix) => {
      this.alix = alix;
      this.titleService.setTitleWithAlix(alix.alix);
      this.boardService.loadBoard(alix.id).then((board: Board) => {
        this.board = board;
      });
    });
  }

}
