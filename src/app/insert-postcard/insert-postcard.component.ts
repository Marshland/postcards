import { ChangeDetectionStrategy, Component, inject, output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { PostcardService } from '../postcard.service';
import type { HowKnowUs, Postcard, Rating, ServiceType } from '../types';

@Component({
  selector: 'app-insert-postcard',
  styleUrl: './insert-postcard.component.scss',
  templateUrl: './insert-postcard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [ReactiveFormsModule],
})
export class CreatePostcardComponent {
  readonly #formBuilder = inject(FormBuilder);
  readonly #postCardService = inject(PostcardService);
  readonly #notificationService = inject(NotificationService);

  currentDate = new Date();
  maxYear = this.currentDate.getFullYear();

  readonly submittedPostcard = output<Postcard>();

  form = this.#formBuilder.nonNullable.group({
    year: [
      this.currentDate.getFullYear(),
      [Validators.required, Validators.max(this.maxYear)],
    ],
    month: [this.currentDate.getMonth() + 1, [Validators.required, Validators.min(1), Validators.max(12)]],
    day: [this.currentDate.getDate(), [Validators.required, Validators.min(1), Validators.max(31)]],
    serviceType: ['lunch' as ServiceType],
    food: [5 as Rating, [Validators.required, Validators.min(1), Validators.max(5)]],
    service: [5 as Rating, [Validators.required, Validators.min(1), Validators.max(5)]],
    location: [5 as Rating, [Validators.required, Validators.min(1), Validators.max(5)]],
    hospitality: [5 as Rating, [Validators.required, Validators.min(1), Validators.max(5)]],
    howKnowUs: ['client' as HowKnowUs],
    email: ['', Validators.email],
    phone: [''],
  });

  onSubmit() {
    const postcard = this.form.getRawValue();
    this.submittedPostcard.emit(postcard);

    this.#postCardService.addPostcard(postcard);

    this.form.reset({
      year: postcard.year,
      month: postcard.month,
      day: postcard.day,
      serviceType: postcard.serviceType,
      howKnowUs: postcard.howKnowUs,
      food: 5,
      service: 5,
      location: 5,
      hospitality: 5,
      email: '',
      phone: '',
    });

    (document.querySelector('[formcontrolname="day"]')! as HTMLElement).focus();
    this.#notificationService.show('👍');
  }
}
