import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityformComponent } from './cityform.component';

describe('CityformComponent', () => {
  let component: CityformComponent;
  let fixture: ComponentFixture<CityformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
