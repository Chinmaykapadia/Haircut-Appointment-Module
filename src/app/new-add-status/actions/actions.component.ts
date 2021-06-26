import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  // @Input() form: FormGroup;
//@Input() selectedOptIndx: number;
  @Input() btnName: string;
  @Output() frmArrLen = new EventEmitter();
  @Output() btnnName = new EventEmitter();
  @Output() rowIndex = new EventEmitter();
  rowId: number;

  statusArray = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  //selectedOptIndx: number;
  submitted: boolean;
  searchData: boolean;
  disable_Search_Button: boolean;
  form: FormGroup;
  formArrayData = [];
  formArrLen;
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  selectedOptIndx: number; 

  constructor(private fb: FormBuilder) { }
  
  // ngOnChanges() {
  //   this.formArrayData.push(this.form.value);
  //   console.log(this.formArrayData);
  //   this.form.reset();
  // }
  
  emittingValues(){
    this.frmArrLen.emit(this.formArrayData.length);
  }
  patchVal($event){
    this.form = $event;
  }
  changeBtnVal($event: string){
    this.btnName = "Update";
    this.btnnName.emit(this.btnName);
  }
  getRowId($event){
    this.rowId = $event;
    console.log(this.rowId);
    this.rowIndex.emit(this.rowId);
  }
  
  ngOnInit() {
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""],
      color: [""],
      status: [""]
    });

    this.submitted = false;
    this.buttonName = "Add";

    this.searchData = false;
    
    this.disable_Search_Button = true;
  }

  delete_selected_data(){

  }
  search(){

  }

  onSubmit(){
    console.log(this.selectedOptIndx);
  
    this.selectedOptIndx = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    console.log(this.form);
    if(this.buttonName == "Add"){
      this.form.value.color = this.statusArray[this.selectedOptIndx].color;
      this.form.value.status = true;
      this.formArrayData.push(this.form.value);
      console.log(this.formArrayData);
      this.form.reset();
    }
  }

  update(){
    // this.formArrayData[this.rowId].select_status = this.selectedOption;
    //   this.formArrayData[this.rowId].client_name = this.clientName_value;
    // //  this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
    //   this.form.reset();
  }
}
