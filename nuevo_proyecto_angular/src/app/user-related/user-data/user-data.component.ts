import { socialNetworks } from './../../data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {

  @Input() user: any = {};
  activate:boolean=true

  subscription: Subscription = new Subscription()
  socialNetworks:any[] = []
  availableSocialNetworks:any[] = []
  subscribedSocialNetworks:any[] = []

  ngOnInit(): void {
    this.socialNetworks=Object.entries(socialNetworks);
    this.availableSocialNetworks=this.socialNetworks
    console.log(this.socialNetworks);
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
