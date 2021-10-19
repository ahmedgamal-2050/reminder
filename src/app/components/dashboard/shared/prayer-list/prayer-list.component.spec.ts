import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerListComponent } from './prayer-list.component';

describe('PrayerListComponent', () => {
  let component: PrayerListComponent;
  let fixture: ComponentFixture<PrayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
