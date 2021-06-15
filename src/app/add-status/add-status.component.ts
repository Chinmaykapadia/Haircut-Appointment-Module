import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {
  status = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  form: FormGroup;
  submitted: boolean;
  addControls: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      addStatusForm: this.fb.array([
        this.getControls()
      ])
    });
    this.submitted = false;
  }

  getControls(){
    return this.fb.group({
      clientName: [''],
      status: [''],
      Available: [''],
      NotAvailable: [''],
      meeting: [''],
    })
  }
  onAdd(){
    this.submitted = true;
    this.addControls = <FormArray> this.form.controls['addStatusForm'];
    this.addControls.push(this.getControls());
  }

}
