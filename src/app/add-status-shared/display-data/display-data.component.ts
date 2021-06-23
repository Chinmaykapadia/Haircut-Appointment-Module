import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  @Input() formArrayData:any = [];
  @Input() form: any;
  @Output() disable_Search_Button = new EventEmitter();
  @Output() buttonName = new EventEmitter();
  @Output() findId = new EventEmitter();
  submitted: boolean;
  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  receivedData;
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
  updateData(i_: number){
    //this.disable_Search_Button.emit(false);
    this.form.patchValue({
      select_status: this.formArrayData[i_].select_status,
      client_name: this.formArrayData[i_].client_name,
      color: this.formArrayData[i_].color,
    });

    //this.searchData = false;
    // this.buttonName = "Update";
    // this.findId = i_;
    console.log("find id:---=>", this.findId);
  }

  deleteData(){

  }

  onStatusBtnClick(){

  }
}
