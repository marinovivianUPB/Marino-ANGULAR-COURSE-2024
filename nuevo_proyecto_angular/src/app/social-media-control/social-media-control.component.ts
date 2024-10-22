import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() newMediaAdded = new EventEmitter<{ platform: string, message: string }>();

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
    let mediaType = platform === 'youtube' || platform === 'tiktok' ? 'video' : 'story';
    console.log(`Adding a new ${mediaType} to ${platform}`);
    let message = `Adding a new ${mediaType} to ${platform}`

    this.newMediaAdded.emit({ platform: platform, message: message });
  }
}