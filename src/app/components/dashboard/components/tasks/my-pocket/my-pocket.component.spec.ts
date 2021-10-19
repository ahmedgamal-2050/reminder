import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPocketComponent } from './my-pocket.component';

describe('MyPocketComponent', () => {
  let component: MyPocketComponent;
  let fixture: ComponentFixture<MyPocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
