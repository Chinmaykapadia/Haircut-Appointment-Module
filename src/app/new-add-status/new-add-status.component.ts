import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { StatusService } from "../add-status/status.service";

@Component({
  selector: "app-new-add-status",
  templateUrl: "./new-add-status.component.html",
  styleUrls: ["./new-add-status.component.css"],
})
export class NewAddStatusComponent implements OnChanges, OnInit {
  
  form: FormGroup;
  @Input() frmArrData = [];
  statusArray = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];

  displayData = [];
  submitted: boolean;
  searchData: boolean;
  disable_Search_Button: boolean;
  //form: FormGroup;
  formArrayData = [];
  formArrLen;
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  selectedOptIndx: number; 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.form = this.fb.group({
    //   select_status: [""],
    //   client_name: [""],
    //   color: [""],
    //   status: [""]
    // });
    // this.buttonName = "Add";
  }
  ngOnChanges() {
    //this.getFormData;
  }

  // emittingValues($event){
  //   this.frmArrLen = $event
  // }


  btnChanged_Name($event){
    this.buttonName = $event
  }
  getFormData($event) {
    this.displayData = $event;
    console.log(this.displayData);
  }
  // patchVal($event){
  //   this.form = $event;
  // }
  // btnChangedName($event){
  //   this.buttonName = $event;
  // }
  getRowIndex($event) {
    // this.findId = $event;
  }
  delete_selected_data() {}
  search() {}
}













// statusArray = [
  //   { id: 1, value: "i'm Available", color: "green" },
  //   { id: 2, value: "i'm not Available", color: "red" },
  //   { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  // ];

// submitted: boolean;
// statusValue: string;
// clientName_value: string;
// selectedOption: any;
// formArray = [];
// frmArrLen: number;

// buttonValue = [
//   { id: 1, value: "i'm Available", color: "green" },
//   { id: 2, value: "i'm not Available", color: "red" },
//   { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
// ];

// buttonName: string;
// findId: number;

// showDeleteButton: boolean;
// statusColor: string;
// filterData = [];

// searchData: boolean;
// isFormFIeldEmpty: boolean;
// disable_Search_Button: boolean;

// selectedOptIdx: number;
