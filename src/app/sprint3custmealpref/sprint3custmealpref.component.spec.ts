import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sprint3custmealprefComponent } from './sprint3custmealpref.component';

describe('Sprint3custmealprefComponent', () => {
  let component: Sprint3custmealprefComponent;
  let fixture: ComponentFixture<Sprint3custmealprefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sprint3custmealprefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sprint3custmealprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
