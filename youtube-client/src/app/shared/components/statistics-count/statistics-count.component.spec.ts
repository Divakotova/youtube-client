import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCountComponent } from './statistics-count.component';

describe('StatisticsCountComponent', () => {
  let component: StatisticsCountComponent;
  let fixture: ComponentFixture<StatisticsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsCountComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
