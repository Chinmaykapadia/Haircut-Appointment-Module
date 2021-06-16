import { Component, Input, OnInit } from '@angular/core';
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
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];
  buttonValue = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  buttonName: string;
  findId: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [''],
      client_name: [''],
    });
    this.submitted = false;
    this.buttonName = 'Add';
  }

  onAdd(){
      
    this.submitted = true;
    console.log(this.selectedOption);
    console.log(this.clientName_value);

    if(this.buttonName == 'Add'){
      this.formArray.push(this.form.value);  
      console.log(this.formArray);
      this.form.reset();
    }
    else{
      console.log("Updated");
      this.formArray[this.findId].select_status = this.selectedOption;
      this.formArray[this.findId].client_name = this.clientName_value;
      this.form.reset();
      this.buttonName = 'Add';
      console.log(this.formArray);
      
    }

  }
  onStatusBtnClick(i_: number, index: number){
    console.log(this.buttonValue[index]);
    // this.clientV = this.buttonValue[index];
    console.log(this.formArray[index]);
    
    this.formArray[i_].select_status = this.buttonValue[index];
    console.log(this.formArray[index]);
    console.log(this.formArray);
    // this.stats = this.formArray[index].select_status;
  }

  Delete(){
    this.formArray.splice(this.findId,1);
    this.form.reset();
    this.buttonName = 'Add';
    console.log(this.formArray);
    
   // this.formArray.splice(i_);
  }

  updateData(i_: number){
    this.form.patchValue({
      select_status: this.formArray[i_].select_status,
      client_name: this.formArray[i_].client_name,
    });
   // this.addToedit = true;
    this.buttonName = 'Update';
    this.findId = i_;
    console.log("find id:---=>",this.findId);
    
  }

  deleteData(i_: number){

    console.log(i_);
    this.formArray.splice(i_,1);
    console.log(this.formArray);
    
  }

  removeItem(index: number){

    console.log(index);
    this.formArray.splice(0,index);
  }

}
// https://stackblitz.com/edit/angular-form-dynamic-add-control-so59033703?file=app%2Fapp.component.ts

// https://stackoverflow.com/questions/41727013/setting-angular-2-formarray-value-in-reactiveform