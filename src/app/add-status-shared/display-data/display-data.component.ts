import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  @Input() formArrayData:any = [];
  @Input() form: any;
  @Input() findId: number;
  @Output() disable_Search_Button = new EventEmitter<boolean>();
  @Output() buttonName = new EventEmitter();
  @Output() formPatchedValue = new EventEmitter();
  @Output() find_Id = new EventEmitter();
  // @Output() evntEmmitr = new EventEmitter<Object>();

  submitted: boolean;
  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  receivedData;
  changeButton_Name: string;

  constructor() { }

  ngOnInit() {
    this.submitted = true;
   // this.receiveData();
   console.log(this.formArrayData);
   
  }

  receiveData($event){
    this.receivedData = $event;
    console.log(this.receivedData);
    
  }

  update_Data(i_: number){
//     console.log(this.form.value);
//     this.form.patchValue({
//       select_status: this.formArrayData[i_].select_status,
//       client_name: this.formArrayData[i_].client_name,
//       color: this.formArrayData[i_].color,
//     });
//     this.changeButton_Name = "Update";
// //    this.evntEmmitr.emit({changeButton_Name:'Update',findId:this.findId,buttonName:this.changeButton_Name});
//     this.formPatchedValue.emit();
//     this.findId = i_;
//     this.buttonName.emit(this.changeButton_Name);
//     this.find_Id.emit(this.findId);
//     console.log(this.findId);
//     this.disable_Search_Button.emit();
  }

  relatedToUpdate_Data(){
    this.find_Id.emit(this.findId);
  }

  deleteData(i_: number){
    //this.searchData = false;
    //this.disable_Search_Button = true;
    //console.log(i_);
    this.formArrayData.splice(i_, 1);
    console.log(this.formArrayData);
    this.form.reset();
  }

  onStatusBtnClick(i_: number, index: number){
    try{
      this.formArrayData[i_].select_status = this.buttonValue[index].value;
      this.formArrayData[i_].color = this.buttonValue[index].color;
    }catch(error){}
  }

  search_Data(){

  }


}
