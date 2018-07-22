import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcontainerComponent } from './assetcontainer.component';

describe('AssetcontainerComponent', () => {
  let component: AssetcontainerComponent;
  let fixture: ComponentFixture<AssetcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
