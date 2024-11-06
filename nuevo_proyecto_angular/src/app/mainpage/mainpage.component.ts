import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import { CitycardComponent } from '../citycard/citycard.component';
import { CityformComponent } from '../cityform/cityform.component';
import { SearchComponent } from '../search/search.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'mainpage',
  standalone: true,
  imports: [CommonModule, FormsModule, CityformComponent, SearchComponent, ListComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit{

  cities!: any;
  aux!: any;

  constructor(private _router: Router, private _cityService: CityService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._cityService.loadCities().subscribe((res) => {
      console.log('CITIES JSON: ', res)
      let sortedRes = res.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.cities = sortedRes;
      this.aux = sortedRes
      console.log('CITIES: ', this.cities)
      this.cdr.detectChanges();
    });
  }

  deleteCity(event:any) {
    this._cityService.deleteCity(event);
    this._cityService.getCitiesLocalStorage().subscribe((res) => {
      let sortedRes = res.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.cities = sortedRes
      this.aux = sortedRes
    })
  }

  addCity(event:any) {
    const maxId = this.cities.reduce((max: number, city: any) => city.id > max ? city.id : max, 0);
    const newCity = {
      id: maxId + 1,
      name: event.name
    }
    this._cityService.addCity(newCity);
    this._cityService.getCitiesLocalStorage().subscribe((res) => {
      let sortedRes = res.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.cities = sortedRes
      this.aux = sortedRes
    })
  }

  public receiveSearchTerm(data:string){
    console.log("got search term")
    if (data) {
      this.cities = this.cities.filter((entry: { name: string; }) => {
        const name = entry.name.toLowerCase();
        return name.includes(data.toLowerCase());
      });
    } else {
      this.cities = [...this.aux];
    }
  }
}

