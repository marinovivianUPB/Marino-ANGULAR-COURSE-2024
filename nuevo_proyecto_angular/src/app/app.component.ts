import { SocialMediaControlComponent } from './social-media-control/social-media-control.component';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { data } from './data';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SocialMediaControlComponent, UserCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'nuevo_proyecto_angular';
  userList:any[] = []
  notifications: { platform: string, type: string }[] = [];

  ngOnInit(): void {
    this.userList=Object.entries(data);
    console.log(this.userList);
  }

  handleNewMediaAdded(media: { platform: string, message: string }) {
    let type = media.message;
    let platform = media.platform;
    this.notifications = [...this.notifications, { platform, type }];
    console.log('New media added:', media);
  }
}
