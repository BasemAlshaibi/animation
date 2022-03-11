import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiStateComponent } from './muti-state.component';

describe('MutiStateComponent', () => {
  let component: MutiStateComponent;
  let fixture: ComponentFixture<MutiStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
