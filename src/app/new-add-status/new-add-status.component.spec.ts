import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddStatusComponent } from './new-add-status.component';

describe('NewAddStatusComponent', () => {
  let component: NewAddStatusComponent;
  let fixture: ComponentFixture<NewAddStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAddStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
