import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { PostcardService } from '../postcard.service';

@Component({
  selector: 'app-unique-emails',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './unique-emails.component.html',
  styleUrls: ['./unique-emails.component.scss'],
})
export class UniqueEmailsComponent {
  #postcardService = inject(PostcardService);

  emailsResource = httpResource.text('./assets/data/all-emails.csv');

  emails = signal<Set<string>>(new Set());
  emailsToAdd = this.#postcardService.allEmails;
  emailsWithGoodAverage = this.#postcardService.emailsWithGoodAverage;

  emailsThatAreNotInContacts = computed<Set<string>>(() => {
    const emails = this.emails();
    const emailsToAdd = this.emailsToAdd();
    if (!emails.size || !emailsToAdd.size) return new Set();
    return emailsToAdd.difference(emails);
  });

  emailsWithGoodAverageThatAreNotInContacts = computed<Set<string>>(() => {
    const emails = this.emails();
    const emailsWithGoodAverage = this.emailsWithGoodAverage();
    if (!emails.size || !emailsWithGoodAverage.size) return new Set();
    return emailsWithGoodAverage.difference(emails);
  });

  constructor() {
    effect(() => {
      const emailsCsv = this.emailsResource.value();
      if (!emailsCsv) return;

      const emails = this.#extractEmails(emailsCsv);

      this.emails.set(new Set(emails));
    });
  }

  downloadEmailsToAdd() {
    const emails = this.emailsThatAreNotInContacts();
    let emailsToAdd = '';
    for (const email of emails) {
      emailsToAdd += `${email}\n`;
    }

    const blob = new Blob([emailsToAdd], { type: 'text/csv' });
    this.#postcardService.downloadFile(blob, `emails-to-add-${this.#postcardService.createDateStr()}.csv`);
  }

  downloadEmailsToAddWithGoodAverage() {
    const emails = this.emailsWithGoodAverageThatAreNotInContacts();
    let emailsToAdd = '';
    for (const email of emails) {
      emailsToAdd += `${email}, `;
    }

    emailsToAdd = emailsToAdd.slice(0, -2);

    const blob = new Blob([emailsToAdd], { type: 'text/txt' });
    this.#postcardService.downloadFile(
      blob,
      `emails-to-add-with-good-average-${this.#postcardService.createDateStr()}.txt`,
    );
  }

  #extractEmails(emailsCsv: string): string[] {
    const emails = emailsCsv.split('\n').map((email) => email.split(';')[0]);
    emails.shift();
    return emails;
  }
}
