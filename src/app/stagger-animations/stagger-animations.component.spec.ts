import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerAnimationsComponent } from './stagger-animations.component';

describe('StaggerAnimationsComponent', () => {
  let component: StaggerAnimationsComponent;
  let fixture: ComponentFixture<StaggerAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggerAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggerAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
