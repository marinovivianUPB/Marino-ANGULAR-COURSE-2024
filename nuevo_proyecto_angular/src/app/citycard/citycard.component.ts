import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'citycard',
  standalone: true,
  imports: [],
  templateUrl: './citycard.component.html',
  styleUrl: './citycard.component.css'
})
export class CitycardComponent {

  @Input() city: any;

  @Output() deleteCity = new EventEmitter()

  public delete(){
    console.log("Sending from city card")
    this.deleteCity.emit(this.city.id)
  }

}
