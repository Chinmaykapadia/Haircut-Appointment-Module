import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispFormDataComponent } from './disp-form-data.component';

describe('DispFormDataComponent', () => {
  let component: DispFormDataComponent;
  let fixture: ComponentFixture<DispFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
