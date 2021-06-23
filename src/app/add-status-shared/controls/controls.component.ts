import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input() selectedOption: string;
  @Input() clientName_value: string;
  @Input() form: FormGroup;
  @Output() dataArray = new EventEmitter();

  statusArray = [
    { value: "i'm Available", color: "green" },
    { value: "i'm not Available", color: "red" },
    { value: "i'm in Meeting", color: "#FFFF99" },
  ];
  formArray = [];

  constructor(private fb: FormBuilder, private rf: ChangeDetectorRef) { }

  ngOnInit() {
  
  }

  ngOnChanges(){
    //this.ref.detectChanges();
  }

  onSubmit(){
    let ind = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    console.log(ind);

    this.form.value.color = this.statusArray[ind].color;
    this.form.value.status = true;
    console.log(this.form);
    
    this.formArray.push(this.form.value);
    console.log("Form Array:",this.formArray);
    this.dataArray.emit(this.form.value);
    //this.dataArray = this.formArray;
    this.form.reset();
  }

  onDelete(){

  }

  onSearch(){

  }
}
