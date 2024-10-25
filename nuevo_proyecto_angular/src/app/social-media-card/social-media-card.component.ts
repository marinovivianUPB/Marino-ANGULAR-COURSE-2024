import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'social-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media-card.component.html',
  styleUrl: './social-media-card.component.css'
})
export class SocialMediaCardComponent {
  @Input() code: number = 0
  @Input() name: string = '';
  @Input() added:boolean = false;

  @Output() sendData = new EventEmitter()

  platformColors: { [key: string]: string } = {
    youtube: 'red',
    facebook: 'blue',
    tiktok: 'gray',
    instagram: 'pink',
    whatsapp: 'green'
  };

  getPlatformColor(platform: string): string {
    return this.platformColors[platform.toLowerCase()]
  }

  public addSocialMedia() {
    this.added = true;
  }

  public sendCodeToParent(val:number){
    console.log("Sending code..."+this.code)
    this.sendData.emit({code: this.code, operation: val})
  }

}
