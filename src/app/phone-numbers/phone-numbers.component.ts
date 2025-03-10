import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { PostcardService } from '../postcard.service';

@Component({
  selector: 'app-phone-numbers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.scss'],
})
export class PhoneNumbersComponent {
  #postcardService = inject(PostcardService);

  contactsResource = httpResource.text('./assets/data/contacts.vcf');

  phoneNumbers = signal<Set<string>>(new Set());
  phoneNumbersToAdd = this.#postcardService.allPhoneNumbers;

  phoneNumbersThatAreNotInContacts = computed<Set<string>>(() => {
    const phoneNumbers = this.phoneNumbers();
    const phoneNumbersToAdd = this.phoneNumbersToAdd();
    if (!phoneNumbers.size || !phoneNumbersToAdd.size) return new Set();
    return phoneNumbersToAdd.difference(phoneNumbers);
  });

  constructor() {
    effect(() => {
      const contacts = this.contactsResource.value();
      if (!contacts) return;

      const phoneNumbers = this.#extractPhoneNumbers(contacts);

      this.phoneNumbers.set(new Set(phoneNumbers));
    });
  }

  downloadPhoneNumbersToAdd() {
    const phoneNumbers = this.phoneNumbersThatAreNotInContacts();
    const vCards = [];

    for (const phoneNumber of phoneNumbers) {
      vCards.push(this.#postcardService.getVCard(phoneNumber));
    }

    const blob = new Blob([vCards.join('\n')], { type: 'text/vcard' });
    this.#postcardService.downloadFile(blob, `phone-numbers-to-add-${this.#postcardService.createDateStr()}.vcf`);
  }

  #extractPhoneNumbers(contacts: string): string[] {
    return contacts.match(/^TEL;CELL:(.*)$/gm)?.map((match) => match.split(':')[1].trim()) || [];
  }
}
