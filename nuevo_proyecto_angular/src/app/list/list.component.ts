import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityService } from '../services/city.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import { CitycardComponent } from '../citycard/citycard.component';
import { CityformComponent } from '../cityform/cityform.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, FormsModule, CitycardComponent, CityformComponent, SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

  @Input() cities!: any;

  @Output() sendDelete = new EventEmitter();

  deleteCity(event:any) {
    this.sendDelete.emit(event);
  }
}

