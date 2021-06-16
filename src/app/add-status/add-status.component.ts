import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {
  @Input() stat: string;
  status = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];
  buttonValue = [ 'Available' , 'Not Available' , 'In Meeting' ];
  clientV: any;
  stats: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [''],
      client_name: [''],
      clname: [''],
      stat: ['']
    });
    this.submitted = false;
  }

  onAdd(){
      
    this.submitted = true;
    console.log(this.selectedOption);
    console.log(this.clientName_value);
    
    this.formArray.push(this.form.value);  
    console.log(this.formArray);
  }
  onBtnClick(i_: number, index: number){
    console.log(this.buttonValue[index]);
    // this.clientV = this.buttonValue[index];
    console.log(this.formArray[index]);
    
    this.formArray[i_].select_status = this.buttonValue[index];
    console.log(this.formArray[index]);
    console.log(this.formArray);
    
    
    // this.stats = this.formArray[index].select_status;
  }
  Delete(){
   // this.formArray.splice(i_);
  }
  updateData(i_: number){
    this.form.patchValue({
      select_status: this.formArray[i_].select_status,
      client_name: this.formArray[i_].client_name,
    })
    //this.formArray[i_].select_status
  }

  deleteData(i_: number){
    this.formArray.splice(i_);
  }

  removeItem(index: number){
    console.log(index);
    
    this.formArray.splice(0,index);
  }

}
// https://stackblitz.com/edit/angular-form-dynamic-add-control-so59033703?file=app%2Fapp.component.ts

// https://stackoverflow.com/questions/41727013/setting-angular-2-formarray-value-in-reactiveform