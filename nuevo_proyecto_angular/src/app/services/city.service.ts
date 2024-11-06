import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: any[] = [];

  constructor(private _http: HttpClient) {}

  loadCities(): Observable<any[]> {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      return new Observable((observer) => {
        this.cities = JSON.parse(storedCities);
        observer.next(this.cities);
        observer.complete();
      });
    } else {
      return new Observable((observer) => {
        this.getCitiesJSON().subscribe((cities) => {
          this.cities = cities;
          localStorage.setItem('cities', JSON.stringify(this.cities));
          observer.next(this.cities);
          observer.complete();
        });
      });
    }
  }

  getCitiesLocalStorage(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.cities);
      observer.complete();
    });
  }

  addCity(newCity: any) {
    this.cities.push(newCity);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  deleteCity(id: number) {
    this.cities = this.cities.filter((city) => city.id !== id);
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  private getCitiesJSON(): Observable<any[]> {
    return this._http.get<any[]>('assets/cities.json');
  }
}
