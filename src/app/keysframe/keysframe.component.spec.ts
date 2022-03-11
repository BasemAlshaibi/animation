import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysframeComponent } from './keysframe.component';

describe('KeysframeComponent', () => {
  let component: KeysframeComponent;
  let fixture: ComponentFixture<KeysframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
