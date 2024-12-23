import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output } from '@angular/core';
import type { Postcard } from '../types';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  readonly card = input.required<Postcard>();
  readonly delete = output<Postcard>();
}
