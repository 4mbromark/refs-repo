import { StyleService } from './../refs-utility/refs-service/style.service';
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

  alix: Alix = null;
  board: Board = null;

  smartphone = false;
  columnCount = 1;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const size = window.innerWidth;
    let count;
    if (size > 1500) {
      count = 4;
    } else if (size > 1100) {
      count = 3;
    } else if (size > 700) {
      count = 2;
    } else {
      count = 1;
    }
    if (this.board.cardList.length < count) {
      count = this.board.cardList.length;
    }
    this.columnCount = count;
  }
  constructor(
    private alixService: AlixService,
    private titleService: TitleService,
    private styleService: StyleService,
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.alixService.getAlix().pipe(skip(1)).subscribe((alix: Alix) => {
      this.alix = alix;
      this.titleService.setTitleWithAlix(alix.alix);
      this.boardService.loadBoard(alix.id).then((board: Board) => {
        this.board = board;
        this.onResize();
      });
    });
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
  }
}
