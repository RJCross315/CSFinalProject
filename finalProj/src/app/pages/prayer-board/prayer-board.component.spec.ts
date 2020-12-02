import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerBoardComponent } from './prayer-board.component';

describe('PrayerBoardComponent', () => {
  let component: PrayerBoardComponent;
  let fixture: ComponentFixture<PrayerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
