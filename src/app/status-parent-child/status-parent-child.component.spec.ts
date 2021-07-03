import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusParentChildComponent } from './status-parent-child.component';

describe('StatusParentChildComponent', () => {
  let component: StatusParentChildComponent;
  let fixture: ComponentFixture<StatusParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusParentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
