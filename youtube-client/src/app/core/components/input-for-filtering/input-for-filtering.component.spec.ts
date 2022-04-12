import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputForFilteringComponent } from './input-for-filtering.component';

describe('InputForFilteringComponent', () => {
  let component: InputForFilteringComponent;
  let fixture: ComponentFixture<InputForFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputForFilteringComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputForFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
