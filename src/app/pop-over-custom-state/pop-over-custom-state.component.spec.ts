import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopOverCustomStateComponent } from './pop-over-custom-state.component';

describe('PopOverCustomStateComponent', () => {
  let component: PopOverCustomStateComponent;
  let fixture: ComponentFixture<PopOverCustomStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopOverCustomStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopOverCustomStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
