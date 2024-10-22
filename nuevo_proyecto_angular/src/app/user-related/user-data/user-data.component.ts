import { socialNetworks } from './../../data';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit, OnChanges {

  @Input() user: any = {};
  @Input() newMedia:any ={}
  activate:boolean=true

  @ViewChild(NotificationsComponent) notificationsComponent!: NotificationsComponent;

  subscription: Subscription = new Subscription()
  socialNetworks:any[] = []
  availableSocialNetworks:any[] = []
  subscribedSocialNetworks:any[] = []

  ngOnInit(): void {
    this.socialNetworks=Object.entries(socialNetworks);
    this.availableSocialNetworks=this.socialNetworks
    console.log(this.socialNetworks);
    if (this.newMedia) {
      this.addNotification(this.newMedia.platform, this.newMedia.message);
    }
  }

  ngOnChanges() {
    if (this.newMedia) {
      this.addNotification(this.newMedia.platform, this.newMedia.message);
    }
  }
  public addSocialMedia(code:number){
    let socialMedia = this.socialNetworks.find((entry:any) => entry[0] == code)
    this.subscribedSocialNetworks.push(socialMedia)
    this.availableSocialNetworks=this.availableSocialNetworks.filter((entry:any) => entry[0] != code)
  }

  public removeSocialMedia(code:number){
    let socialMedia = this.socialNetworks.find((entry:any) => entry[0] == code)
    this.availableSocialNetworks.push(socialMedia)
    this.subscribedSocialNetworks=this.subscribedSocialNetworks.filter((entry:any) => entry[0] != code)
  }

  addNotification(platform: string, message: string) {
    let subs = this.subscribedSocialNetworks.find((entry: any) => entry[1].platform == platform);
    if( subs.length > 0){
      console.log('Notification received');
      this.notificationsComponent.addNotification(
        { platform: platform, type: message }
      );
    }
  }

  public closeAccount(){
    this.activate=false
  }

  public receiveData(data:any){
    console.log("received code")
    if(data.operation){
      console.log("add")

      if((data.code != 2 && data.code != 4) || this.user[1].subscriptionType === "premium"){

      this.addSocialMedia(data.code)}
    } else{
      this.removeSocialMedia(data.code)
    }
  }

}
