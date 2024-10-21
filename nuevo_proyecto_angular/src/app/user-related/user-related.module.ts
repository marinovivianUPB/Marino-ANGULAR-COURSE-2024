import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserDataComponent } from './user-data/user-data.component';



@NgModule({
  declarations: [NotificationsComponent, UserDataComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationsComponent, UserDataComponent]
})
export class UserRelatedModule { }
