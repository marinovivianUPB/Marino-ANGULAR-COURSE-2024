import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  public onSendData(){
    console.log("Sending from child")
    this.sendData.emit('Hi from child component')
  }
}
