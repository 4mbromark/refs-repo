import { LanguageLabel } from './../refs-utility/refs-language/language-label';
import { EditorService } from './editor.service';
import { EditorDirective } from 'src/app/refs-utility/refs-object/EditorDirective';
import { EditorAction } from './../refs-utility/refs-enum/editor-action';
import { UserService } from '../refs-utility/refs-service/user.service';
import { AlixService } from '../refs-utility/refs-service/alix.service';
import { Component, OnInit } from '@angular/core';
import { MasterAlix } from '../refs-utility/refs-object/database/master/MasterAlix';
import { ContextService } from '../refs-context/context.service';
import { ContextType } from '../refs-utility/refs-enum/context-type';
import { MasterAlixWithContextDetail } from '../refs-utility/refs-object/database/master/MasterAlixWithContextDetail';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  labels = LanguageLabel;

  current: EditorDirective = null;

  constructor(
    private alixService: AlixService,
    private contextService: ContextService,
    private editorService: EditorService,
    private userService: UserService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    const user = this.userService.getUserValue();
    this.alixService.getAlixList(user._id).then((alixList: MasterAlix[]) => {
      const alix = alixList[0] as MasterAlixWithContextDetail;
      alix.contextType = ContextType.BOARD;

      this.contextService.loadContext(alix);
    });
  }

  public newCard(): void {
    const directive = new EditorDirective(EditorAction.CARD_NEW);
    this.current = directive;
    this.editorService.sendDirective(directive);
  }

  public undo(): void {
    const directive = new EditorDirective(EditorAction.UNDO);
    this.current = null;
    this.editorService.sendDirective(directive);
  }

  public delete(): void {
    const directive = new EditorDirective(EditorAction.DELETE);
    this.current = null;
    this.editorService.sendDirective(directive);
  }
}
