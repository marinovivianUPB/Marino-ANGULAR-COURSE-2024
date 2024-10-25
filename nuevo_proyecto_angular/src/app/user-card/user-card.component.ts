import { socialNetworks } from './../data';
import { NotificationsComponent } from '../user-related/notifications/notifications.component';
import { UserRelatedModule } from '../user-related/user-related.module';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [UserRelatedModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('notificationsComp') notificationsComponent!: NotificationsComponent;

  @Input() user: any = {};
  @Input() tab:number=1;
  @Input() newMedia:any ={};

  availableSocialNetworks:any[] = []
  subscribedSocialNetworks:any[] = []

  notifications: { platform: string, type: string }[] = [];
  originalAmountAvailable:number = 0

  ngOnInit(): void {
    this.availableSocialNetworks=Object.entries(socialNetworks);
  }

  ngAfterViewInit(): void {
    this.originalAmountAvailable = this.user[1].amountAvailable
  }

  ngOnChanges(changes: SimpleChanges): void {

    let aux = 0
    console.log("Filtering")
    if (changes['newMedia'] && this.newMedia) {
      const filteredNotifications = this.newMedia.filter((notification: any) => 
        this.subscribedSocialNetworks.some((socialNetwork: any) => socialNetwork[1].platform === notification.platform)
      );

      filteredNotifications.forEach((notification: any) => {
        if (notification.platform === 'whatsapp' || notification.platform === 'tiktok') {
          aux -= 5;
        }
      });

      if(this.originalAmountAvailable != 0){
        this.user[1].amountAvailable = this.originalAmountAvailable+aux
      }
      
      this.notifications = [...filteredNotifications]

      console.log("available amount: ", this.user[1].amountAvailable)

      console.log("Filtered notifications:", this.notifications);
    }
  }

  handleNotification(notification: { platform: string, message: string }) {
    console.log("Notification received:", notification);
    let type = notification.message;
    let platform = notification.platform;
    if (this.notificationsComponent) {
      this.notifications.push({platform, type});
    }
  }

  addSocialMedia(code: number) {
    const socialMedia = this.availableSocialNetworks.find((entry: any) => entry[0] == code);
    if (socialMedia) {
      this.subscribedSocialNetworks.push(socialMedia);
      this.availableSocialNetworks = this.availableSocialNetworks.filter((entry: any) => entry[0] != code);
    }
  }

  removeSocialMedia(code: number) {
    const socialMedia = this.subscribedSocialNetworks.find((entry: any) => entry[0] == code);
    if (socialMedia) {
      this.availableSocialNetworks.push(socialMedia);
      this.subscribedSocialNetworks = this.subscribedSocialNetworks.filter((entry: any) => entry[0] != code);
    }
  }

}
