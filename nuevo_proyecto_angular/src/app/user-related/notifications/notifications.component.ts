import { Component, Input } from '@angular/core';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  @Input()notifications: { platform: string, type: string }[] = [];

  addNotification(notification: { platform: string, type: string }) {
    this.notifications.push(notification);
  }
}
