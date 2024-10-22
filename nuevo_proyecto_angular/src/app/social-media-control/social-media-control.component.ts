import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { socialNetworks } from './../data';

@Component({
  selector: 'social-media-control',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './social-media-control.component.html',
  styleUrls: ['./social-media-control.component.scss']
})
export class SocialMediaControlComponent {
  platforms = socialNetworks;  

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

  addNewMedia(platform: string) {
    if(platform === 'instagram') {
      console.log(`Adding a new story to ${platform}`);
    } else if (platform === 'whatsapp') {
      console.log(`Adding a new message to ${platform}`);
    } else if (platform === 'tiktok' || platform === 'youtube') {
      console.log(`Adding a new video to ${platform}`);
    }  else if (platform === 'facebook') {
      console.log(`Adding a new story to ${platform}`);
    }
  }
}