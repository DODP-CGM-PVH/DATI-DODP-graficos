import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2023Component } from './year2023.component';

describe('Year2023Component', () => {
  let component: Year2023Component;
  let fixture: ComponentFixture<Year2023Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year2023Component]
    });
    fixture = TestBed.createComponent(Year2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
