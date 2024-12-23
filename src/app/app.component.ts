import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostcardService } from './postcard.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styleUrl: './app.component.scss',
  template: `
    <nav>
      <!-- <a routerLink="/insert-postcard" routerLinkActive="route-selected">Insert Postcard</a>
      <a routerLink="/statistics" routerLinkActive="route-selected">Statistics</a> -->

      <button (click)="postCardService.exportPostcards()" [disabled]="canDownload()">Scarica cartoline</button>
      <span data-end>N° cartoline {{ postCardService.totalPostcards() }}</span>
    </nav>
    <section>
      <router-outlet />
    </section>
  `,
})
export class AppComponent {
  protected readonly postCardService = inject(PostcardService);

  protected canDownload = computed(() => this.postCardService.totalPostcards() === 0);

  constructor() {
    (window as any).postCardService = this.postCardService;
  }
}
