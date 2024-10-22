import { UserRelatedModule } from '../user-related/user-related.module';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [UserRelatedModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user: any = {};
  @Input() tab:number=1;
  @Input() newMedia:any ={};

}
