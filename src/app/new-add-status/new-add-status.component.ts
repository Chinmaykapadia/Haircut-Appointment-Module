import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { StatusService } from '../add-status/status.service';

@Component({
  selector: 'app-new-add-status',
  templateUrl: './new-add-status.component.html',
  styleUrls: ['./new-add-status.component.css']
})
export class NewAddStatusComponent implements OnInit {
  statusArray = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];

  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  
  buttonName: string;
  findId: number;

  showDeleteButton: boolean;
  statusColor: string;
  filterData = [];
  
  searchData: boolean;
  isFormFIeldEmpty: boolean;
  disable_Search_Button: boolean;

  selectedOptIdx: number;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""],
      color: [""],
      status: [""]
    });
    this.buttonName = "Add";
  }

  onSubmit(){
    this.selectedOptIdx = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    // this.form.value.color = this.statusArray[this.selectedOptIdx].color;
    // this.form.value.status = true;
    console.log(this.form.value);
    
  }
  delete_selected_data(){}
  search(){}

}
