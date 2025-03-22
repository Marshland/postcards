import { ChangeDetectionStrategy, Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostcardService } from './postcard.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly postCardService = inject(PostcardService);
  protected isMenuOpen = signal(false);

  protected canDownload = computed(() => this.postCardService.totalPostcards() === 0);

  constructor() {
    (window as any).postCardService = this.postCardService;
  }

  protected toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu() {
    this.isMenuOpen.set(false);
  }

  protected importAndMerge(event: Event) {
    this.postCardService.importPostcardsFromFile(event, true);
    this.closeMenu();
  }

  protected importAndReplace(event: Event) {
    this.postCardService.importPostcardsFromFile(event);
    this.closeMenu();
  }

  protected reset() {
    if (confirm('Are you sure you want to reset all postcards?')) {
      this.postCardService.reset();
      this.closeMenu();
    }
  }
}
