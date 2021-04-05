import { EditorDirective } from 'src/app/refs-utility/refs-object/EditorDirective';
import { EditorService } from './../refs-editor/editor.service';
import { EditableComponent } from './context-editable/editable.component';
import { CustomHeader } from './../refs-utility/refs-object/database/custom/CustomHeader';
import { MasterAlixWithContextDetail } from '../refs-utility/refs-object/database/master/MasterAlixWithContextDetail';
import { CustomCard } from '../refs-utility/refs-object/database/custom/CustomCard';
import { RoutingService } from '../refs-utility/refs-service/routing.service';
import { StyleService } from '../refs-utility/refs-service/style.service';
import { MasterBoard } from '../refs-utility/refs-object/database/master/MasterBoard';
import { TitleService } from '../refs-utility/refs-service/title.service';
import { AlixService } from '../refs-utility/refs-service/alix.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { filter, skip } from 'rxjs/operators';
import { MasterPage } from '../refs-utility/refs-object/database/master/MasterPage';
import { HttpErrorResponse } from '@angular/common/http';
import { ContextService } from './context.service';
import { isNonNull } from '../refs-utility/refs-utils';
import { EditorAction } from '../refs-utility/refs-enum/editor-action';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent extends EditableComponent implements OnInit {
  @Input() editorMode = false;

  alix: MasterAlixWithContextDetail = null;
  context: MasterBoard | MasterPage = null;

  header: CustomHeader;

  cardList: (CustomCard | string)[] = null;

  smartphone = false;
  columnCount = 1;

  @HostListener('window:resize', ['$event'])
  onResize() {
    let size = window.innerWidth;
    if (this.editorMode) {
      size -= 500;
    }
    let count: number;
    if (size > 1500) {
      count = 4;
    } else if (size > 1100) {
      count = 3;
    } else if (size > 700) {
      count = 2;
    } else {
      count = 1;
    }
    if (this.cardList.length < count) {
      count = this.cardList.length;
    }
    this.columnCount = count;
  }
  constructor(
    private alixService: AlixService,
    private contextService: ContextService,
    private titleService: TitleService,
    private styleService: StyleService,
    private routingService: RoutingService,
    protected editorService: EditorService
  ) {
    super();
  }

  ngOnInit(): void {
    this.alixService.getAlix().pipe(filter(isNonNull)).subscribe((alix: MasterAlixWithContextDetail) => {
      this.alix = alix;
      this.loadAlix();
    });
    this.contextService.getContext().pipe(filter(isNonNull)).subscribe((context: MasterBoard | MasterPage) => {
      this.context = context;
      this.fetchCards();
    });
    this.styleService.isSmartphone().subscribe((smartphone: boolean) => {
      this.smartphone = smartphone;
    });
    this.editorService.getDirective().subscribe((directive) => {
      this.manageDirective(directive);
    });
  }

  private async loadAlix(): Promise<void> {
    this.titleService.setTitleWithAlix(this.alix.alixName);

    this.contextService.loadContext(this.alix).catch((error: HttpErrorResponse) => {
      this.routingService.goToNotFound();
    });
  }

  private async fetchCards(): Promise<void> {
    this.cardList = this.context.cardList.slice(0);
    this.onResize();
    const cardIds = this.cardList as string[];

    for (const cardId of cardIds) {
      const card = await this.contextService.getCard(cardId as string);

      const index = this.cardList.indexOf(card._id);
      this.cardList[index] = card;
    }
  }

  private manageDirective(directive: EditorDirective): void {
    const action = directive.action;
    switch (action) {
      case EditorAction.CARD_NEW: {
        this.addDirective(directive);
        this.cardList.push(new CustomCard());
        break;
      }
      case EditorAction.UNDO: {
        const undone = this.undo();
        if (undone) {
          this.fetchCards();
        }
        break;
      }
    }
  }
}
