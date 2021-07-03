import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status-parent-child',
  templateUrl: './status-parent-child.component.html',
  styleUrls: ['./status-parent-child.component.css']
})
export class StatusParentChildComponent implements OnInit,AfterViewInit {

   statusArray = [
    { id: 1, value: "i'm Available", color: "#00A36C" },
    { id: 2, value: "i'm not Available", color: "#E34234" },
    { id: 3, value: "i'm in Meeting", color: "#FFD700" },
  ];
  arrayData = [];
  form: FormGroup;
  rowId: number;
  btnName: string;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //this.receiveArrayData;
    
  }
  receiveArrayData($event){
    this.arrayData = $event;
    console.log("Received Data",this.arrayData);
  }
  receiveFormGroup($event){
    this.form = $event;
    console.log("Form Group:",this.form);
  }
  receiveId($event){
    this.rowId = $event.id;
    this.btnName = $event.name;
    console.log(this.rowId);
    console.log(this.btnName);
    
  }

  receiveDelateData($event){
    this.btnName = $event;
  }
}
