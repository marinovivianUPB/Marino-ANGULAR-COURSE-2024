import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy{

  constructor(){
    console.log("user card constructor")
  }

  ngOnDestroy(): void {
    console.log("user card destroy");
  }
  ngOnInit(): void {
    console.log("User card on init")
  }

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  public onSendData(){
    console.log("Sending from child")
    this.sendData.emit('Hi from child component')
  }
}
