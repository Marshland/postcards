import { Injectable } from '@angular/core';

const NOTIFICATION_TIMEOUT = 1000;
const NOTIFICATION_MAX = 3;

@Injectable({ providedIn: 'root' })
export class NotificationService {
  container: HTMLDivElement = document.createElement('div');
  totalNotifications = 0;

  constructor() {
    this.container.classList.add('notification-container');
    document.body.appendChild(this.container);
  }

  show(message: string) {
    const notification = document.createElement('div');

    if (this.totalNotifications >= NOTIFICATION_MAX) {
      this.container.firstChild?.remove();
    }

    this.totalNotifications++;
    notification.textContent = message;
    notification.classList.add('notification');

    this.container.appendChild(notification);

    const timer = setTimeout(() => {
      this.totalNotifications--;
      notification.remove();
    }, NOTIFICATION_TIMEOUT);

    notification.onclick = () => {
      this.totalNotifications--;
      notification.remove();
      clearTimeout(timer);
    };
  }
}
