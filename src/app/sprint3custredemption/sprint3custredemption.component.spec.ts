import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint3custredemptionComponent } from './sprint3custredemption.component';

describe('Sprint3custredemptionComponent', () => {
  let component: Sprint3custredemptionComponent;
  let fixture: ComponentFixture<Sprint3custredemptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint3custredemptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint3custredemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
