
import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/refs-domain/CustomCard';

@Component({
  selector: 'app-context-card',
  templateUrl: './context-card.component.html',
  styleUrls: ['./context-card.component.css']
})
export class ContextCardComponent {
  @Input() customCard: CustomCard;

  constructor() { }
}
