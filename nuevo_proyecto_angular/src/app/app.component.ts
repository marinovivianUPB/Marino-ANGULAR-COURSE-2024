import { SocialMediaControlComponent } from './social-media-control/social-media-control.component';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotificationsComponent } from './user-related/notifications/notifications.component';
import { UserDataComponent } from './user-related/user-data/user-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SocialMediaControlComponent, UserDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'nuevo_proyecto_angular';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
