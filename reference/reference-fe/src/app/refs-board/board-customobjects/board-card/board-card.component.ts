import { CustomCard } from '../../../refs-utility/refs-object/custom/CustomCard';
 // tslint:disable: max-line-length
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent {
  @Input() card: CustomCard;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

}
