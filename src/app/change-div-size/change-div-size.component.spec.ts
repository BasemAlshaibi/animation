import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDivSizeComponent } from './change-div-size.component';

describe('ChangeDivSizeComponent', () => {
  let component: ChangeDivSizeComponent;
  let fixture: ComponentFixture<ChangeDivSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDivSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDivSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
