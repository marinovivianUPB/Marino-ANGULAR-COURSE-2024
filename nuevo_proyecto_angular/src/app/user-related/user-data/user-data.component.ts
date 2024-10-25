import { socialNetworks } from './../../data';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() user: any = {};
  @Input() newMedia:any ={}
  activate:boolean=true
  subscription: Subscription = new Subscription()
  socialNetworks:any[] = []
  @Input() availableSocialNetworks:any[] = []
  @Input() subscribedSocialNetworks:any[] = []

  @Output() sendData = new EventEmitter<{ platform: string, message: string }>();
  @Output() addSocialMedia = new EventEmitter<number>();
  @Output() removeSocialMedia = new EventEmitter<number>();

  ngOnInit(): void {
    this.socialNetworks=Object.entries(socialNetworks);
    console.log(this.socialNetworks);
  }

  ngOnChanges() {
    /*if (this.newMedia) {
      this.addNotification(this.newMedia.platform, this.newMedia.message);
    }*/
  }

  ngAfterViewInit(): void {
    /*if (this.newMedia) {
      this.addNotification(this.newMedia.platform, this.newMedia.message);
    }*/
  }

  public addSocialMediaNetwork(code:number){
    this.addSocialMedia.emit(code);
  }

  public removeSocialMediaNetwork(code:number){
    this.removeSocialMedia.emit(code);
  }

  addNotification(platform: string, message: string) {
    let subs = this.subscribedSocialNetworks.find((entry: any) => entry[1].platform == platform);
    if( subs){
      console.log('Notification received');
      this.sendData.emit({ platform, message });
    }
  }

  public closeAccount(){
    this.activate=false
  }

  public receiveData(data:any){
    console.log("received code")
    if(data.operation){
      console.log("add")

      if((data.code != 2 && data.code != 4) || (this.user[1].subscriptionType === "premium" && this.user[1].amountAvailable >= 5)){

      this.addSocialMediaNetwork(data.code)
      }
    } else{
      this.removeSocialMediaNetwork(data.code)
    }
  }

}
