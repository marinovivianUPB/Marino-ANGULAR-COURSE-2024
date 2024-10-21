import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaControlComponent } from './social-media-control.component';

describe('SocialMediaControlComponent', () => {
  let component: SocialMediaControlComponent;
  let fixture: ComponentFixture<SocialMediaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
