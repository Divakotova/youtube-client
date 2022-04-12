import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndSubmitComponent } from './search-and-submit.component';

describe('SearchAndSubmitComponent', () => {
  let component: SearchAndSubmitComponent;
  let fixture: ComponentFixture<SearchAndSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndSubmitComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
