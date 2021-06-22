import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatusSharedComponent } from './add-status-shared.component';

describe('AddStatusSharedComponent', () => {
  let component: AddStatusSharedComponent;
  let fixture: ComponentFixture<AddStatusSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStatusSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatusSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
