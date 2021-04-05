import { EditorAction } from './../refs-enum/editor-action';

export class EditorDirective {
  action: EditorAction;

  constructor(
    action: EditorAction
  ) {
    this.action = action;
  }
}
