import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint3custcdsComponent } from './sprint3custcds.component';

describe('Sprint3custcdsComponent', () => {
  let component: Sprint3custcdsComponent;
  let fixture: ComponentFixture<Sprint3custcdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint3custcdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint3custcdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
