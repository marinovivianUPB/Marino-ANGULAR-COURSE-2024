import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cityform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cityform.component.html',
  styleUrl: './cityform.component.css'
})
export class CityformComponent {

  cityForm!: FormGroup
  invalidName: boolean = false

  @Input() cities:any

  @Output() addCityEvent = new EventEmitter<any>()

  constructor(private formBuilder: FormBuilder) {
    this.cityForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  addCity() {
    let formObject = this.cityForm.value

    const existingCity = this.cities.find((city: any) => city.name.toLowerCase() === formObject.name.toLowerCase());

    if (existingCity) {
      console.log("City with this name already exists.");
      this.invalidName = true
    } else{
      this.invalidName = false
      this.addCityEvent.emit(formObject)
    }
  }

}
