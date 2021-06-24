import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() form: any;
  @Input() selectedOptIndx: number;

  statusArray = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  //selectedOptIndx: number;

  formArrayData = [];
  constructor() { }

  ngOnInit() {
    //this.onSubmit();
  }
  onSubmit(){
    console.log(this.selectedOptIndx);
    
    this.form.value.color = this.statusArray[this.selectedOptIndx].color;
    this.form.value.status = true;
    this.formArrayData = this.form.value;
    console.log(this.form.value);
    
  }
}
