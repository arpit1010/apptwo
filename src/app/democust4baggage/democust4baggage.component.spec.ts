import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Democust4baggageComponent } from './democust4baggage.component';

describe('Democust4baggageComponent', () => {
  let component: Democust4baggageComponent;
  let fixture: ComponentFixture<Democust4baggageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Democust4baggageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Democust4baggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
