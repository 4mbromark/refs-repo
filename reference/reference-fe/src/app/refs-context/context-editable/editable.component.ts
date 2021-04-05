import { Observable } from 'rxjs';
import { EditorService } from './../../refs-editor/editor.service';
import { Component, Input, OnInit } from '@angular/core';
import { EditorDirective } from 'src/app/refs-utility/refs-object/EditorDirective';
import { EditorAction } from 'src/app/refs-utility/refs-enum/editor-action';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit {

  directives: EditorDirective[] = [];

  constructor(
    // protected editorService: EditorService
  ) { }

  ngOnInit(): void {
    /* this.editorService.getDirective().subscribe((directive: EditorDirective) => {
      const action = directive.action;
    }); */
  }

  public addDirective(directive: EditorDirective): void {
    this.directives.push(directive);
  }

  public undo(): boolean {
    const d = this.directives.length;
    this.directives = [];
    return d > 0;
  }
}
