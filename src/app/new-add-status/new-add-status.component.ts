import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { StatusService } from "../add-status/status.service";

@Component({
  selector: "app-new-add-status",
  templateUrl: "./new-add-status.component.html",
  styleUrls: ["./new-add-status.component.css"],
})
export class NewAddStatusComponent implements OnInit {
  
   constructor(private fb: FormBuilder) {}
  
   ngOnInit() {
     
  }
  
}





























// btnChanged_Name($event){
//   this.buttonName = $event
// }
// getFormData($event) {
//   this.displayData = $event;
//   console.log(this.displayData);
// }

// statusArray = [
  //   { id: 1, value: "i'm Available", color: "green" },
  //   { id: 2, value: "i'm not Available", color: "red" },
  //   { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  // ];
  
  // submitted: boolean;
  // searchData: boolean;
  // disable_Search_Button: boolean;
  // formArrayData = [];
  // formArrLen;
// selectedOption: string;
// clientName_value: string;

// emittingValues($event){
//   this.frmArrLen = $event
// }


// patchVal($event){
  //   this.form = $event;
// }
// btnChangedName($event){
//   this.buttonName = $event;
// }


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
