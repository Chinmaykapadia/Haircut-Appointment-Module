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
  statusValue: string;
  clientName_value: string;
  selectedOption: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [''],
      client_name: [''],
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

  getFormArray(): FormArray{
    return this.form.get('addStatusForm') as FormArray;
  }
  onAdd(){
    this.statusValue = this.selectedOption ;
    console.log(this.statusValue);
    console.log(this.clientName_value);
    
    
    this.submitted = true;
    this.addControls = <FormArray> this.form.controls['addStatusForm'];
    this.addControls.push(this.getControls());
    console.log(this.form.controls['addStatusForm'].value.clientName);
    
    // this.getFormArray.setValue([
    // {
    //     clientName : this.clientName_value,
    //     status : this.statusValue
    // }]
    // );
  }

  onAvailable(index: number){
    this.statusValue = 'Available';
  }
  onNotAvailable(){

  }
  onInMeeting(){

  }
  removeItem(index: number){
    const control = <FormArray>this.form.controls["addStatusForm"];
    control.removeAt(index);
  }
}
// https://stackblitz.com/edit/angular-form-dynamic-add-control-so59033703?file=app%2Fapp.component.ts