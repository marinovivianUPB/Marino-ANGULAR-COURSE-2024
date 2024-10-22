import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'social-media-card',
  standalone: true,
  imports: [],
  templateUrl: './social-media-card.component.html',
  styleUrl: './social-media-card.component.css'
})
export class SocialMediaCardComponent {
  @Input() code: number = 0
  @Input() name: string = '';
  @Input() added:boolean = false;

  @Output() sendData = new EventEmitter()

  public addSocialMedia() {
    this.added = true;
  }

  public sendCodeToParent(val:number){
    console.log("Sending code..."+this.code)
    this.sendData.emit({code: this.code, operation: val})
  }

}
