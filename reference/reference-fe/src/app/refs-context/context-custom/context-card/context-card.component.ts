import { EditorService } from './../../../refs-editor/editor.service';
import { CustomCard } from '../../../refs-utility/refs-object/database/custom/CustomCard';
 // tslint:disable: max-line-length
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EditableComponent } from '../../context-editable/editable.component';

/*


█████   █████  ███           █████         ███████████  ███                          ███████████               ██████
░░███   ░░███  ░░░           ░░███         ░░███░░░░░░█ ░░░                          ░░███░░░░░███             ███░░███
 ░███    ░███  ████   ███████ ░███████      ░███   █ ░  ████  █████ █████  ██████     ░███    ░███   ██████   ░███ ░░░   ██████  ████████   ██████  ████████    ██████   ██████
 ░███████████ ░░███  ███░░███ ░███░░███     ░███████   ░░███ ░░███ ░░███  ███░░███    ░██████████   ███░░███ ███████    ███░░███░░███░░███ ███░░███░░███░░███  ███░░███ ███░░███
 ░███░░░░░███  ░███ ░███ ░███ ░███ ░███     ░███░░░█    ░███  ░███  ░███ ░███████     ░███░░░░░███ ░███████ ░░░███░    ░███████  ░███ ░░░ ░███████  ░███ ░███ ░███ ░░░ ░███████
 ░███    ░███  ░███ ░███ ░███ ░███ ░███     ░███  ░     ░███  ░░███ ███  ░███░░░      ░███    ░███ ░███░░░    ░███     ░███░░░   ░███     ░███░░░   ░███ ░███ ░███  ███░███░░░
 █████   █████ █████░░███████ ████ █████    █████       █████  ░░█████   ░░██████     █████   █████░░██████   █████    ░░██████  █████    ░░██████  ████ █████░░██████ ░░██████
░░░░░   ░░░░░ ░░░░░  ░░░░░███░░░░ ░░░░░    ░░░░░       ░░░░░    ░░░░░     ░░░░░░     ░░░░░   ░░░░░  ░░░░░░   ░░░░░      ░░░░░░  ░░░░░      ░░░░░░  ░░░░ ░░░░░  ░░░░░░   ░░░░░░
                     ███ ░███
                    ░░██████
                     ░░░░░░
*/

@Component({
  selector: 'app-context-card',
  templateUrl: './context-card.component.html',
  styleUrls: ['./context-card.component.css']
})
export class ContextCardComponent extends EditableComponent {
  @Input() editorMode = false;
  @Input() set card(c: CustomCard | string) {
    if (typeof c === 'string') {
      this.cardLoaded = false;
    } else {
      this.customCard = c;
      this.cardLoaded = true;
    }
  }

  customCard: CustomCard;
  cardLoaded = false;

  constructor(
    protected editorService: EditorService
  ) {
    super();
  }
}
