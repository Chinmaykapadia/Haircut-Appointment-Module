import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service'; 
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  // @Input() form: FormGroup;
  //@Input() selectedOptIndx: number;
  @Input() btnName: string;
  // @Output() frmArrLen = new EventEmitter();
  // @Output() btnnName = new EventEmitter();
  // @Output() rowIndex = new EventEmitter();
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
  patchinValues: any;

  constructor(private fb: FormBuilder, private service:StatusServiceService) { 
    this.service.name$.subscribe((data)=>{
      this.buttonName = data;
    });

    this.service.editId$.subscribe((indx)=>{
      this.rowId = indx;
    });

    this.patchinValues = this.service.ptchVal(this.rowId);
    
    // this.form.patchValue({
    //   select_status:this.patchinValues.select_status,
    //   client_name:this.patchinValues.client_name
    // });
    
    // this.service.ptchVal(this.rowId).patchValue({
    //   select_status:this.formArrayData[this.rowId].selectedOption,
    //   client_name:this.formArrayData[this.rowId].clientName_value
    // });


    // this.service.form$.subscribe((res)=>{
    //   this.form = res;
    //  // console.log(this.form);
      
    // });
  }
  
  ngOnInit() {
    this.form = this.fb.group({
      id: [""],
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

  search(){
    console.log(this.service.getData());
  }

  onSubmit(){
    console.log(this.selectedOptIndx);
  
    this.selectedOptIndx = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    console.log(this.form);
    if(this.buttonName == "Add"){
      this.form.value.id = this.formArrayData.length + 1;
      this.form.value.color = this.statusArray[this.selectedOptIndx].color;
      this.form.value.status = true;
      this.formArrayData.push(this.form.value);
      //console.log(this.formArrayData);

      this.service.pushData(this.form.value);
      this.service.searchValues(this.selectedOption, this.clientName_value);

      this.form.reset();
    }
    else{
      this.formArrayData[this.rowId].select_status = this.selectedOption;
      this.formArrayData[this.rowId].client_name = this.clientName_value;
      this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
      this.form.reset();
      this.buttonName = "Add";
    }
  }

  deleteData(i_: number, _i: number) {
    this.searchData = false;
    this.disable_Search_Button = true;
    console.log(i_);
    this.formArrayData.splice(i_, 1);
    console.log(this.formArrayData);
    this.form.reset();
  }

  
  btnChanged_Name($event){
    this.buttonName = $event
  }
  
  
}



















 // ngOnChanges() {
  //   this.formArrayData.push(this.form.value);
  //   console.log(this.formArrayData);
  //   this.form.reset();
  // }
  
  // emittingValues(){
  //   this.frmArrLen.emit(this.formArrayData.length);
  // }
  // patchVal($event){
  //   this.form = $event;
  // }
  // changeBtnVal($event: string){
  //   this.btnName = "Update";
  //   this.btnnName.emit(this.btnName);
  // }
  // getRowId($event){
  //   this.rowId = $event;
  //   console.log(this.rowId);
  //   this.rowIndex.emit(this.rowId);
  // }



// update(){
//   // this.formArrayData[this.rowId].select_status = this.selectedOption;
//   //   this.formArrayData[this.rowId].client_name = this.clientName_value;
//   // //  this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
//   //   this.form.reset();
// }
