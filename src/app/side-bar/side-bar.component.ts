import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Router,ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  activeDaySelection: number;
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  end_times: any = [];

  minutesInterval: number = 1; //minutes interval
  start_times: any = []; // time array
  startTime: number = 9; // start time
  // ap: any = ['AM', 'PM']; // AM-PM

  form: FormGroup;
  formData: any;
  selectedOption: any;
  //selectedDay: any;
  control: any;
  //daySelected: any;
  formArrayValues: any;
  jsonFormArrayValue: any;
  clearFormArray: FormArray;
  thirtyMinIndex: number;
  selectedOptionIndex: number;
  addIndex: any;
  selectedEndoption: any;
  timeChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  findFirstInd: number;
  findLastInd: number;
  removeBeforeFirstInd: number;
  removeAfterLastInd: number;
  current_Time_Selection: any;
  formArrayObject: any;
  formArrayObjectValue: any;
  selectedVal: any;
  constructor(private router: Router, private fb: FormBuilder, private route:ActivatedRoute) {}

  ngOnInit(): void {
    for (var i = 0; this.startTime < 24 * 60; i++) {
      var hours = Math.floor(this.startTime / 60);
      var minutes = this.startTime % 60;
      this.start_times[i] = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
      // this.times[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + minutes).slice(-2) + this.ap[Math.floor(hours/12)];
      this.startTime = this.startTime + this.minutesInterval;
    }

    this.findFirstInd = this.start_times.indexOf("09:00");
    
    this.findLastInd = this.start_times.indexOf("11:00");

    this.removeBeforeFirstInd = this.start_times.splice(0, 531);
 
    this.removeAfterLastInd = this.start_times.splice(840);

    this.end_times = this.start_times;
    console.log("Times:", this.end_times);

  
    this.form = this.fb.group({
      formArray: this.fb.array([this.getUnit()]),
    });
  }

  private getUnit() {
    return this.fb.group({
      starttime: [""],
      endtime: [""],
    });
  }

  daysListClick(index: number, value: string) {
    //alert("clicked");
    this.activeDaySelection = index;
    console.log(this.activeDaySelection);

    //this.selectedDay = value;
    //console.log(this.selectedDay);

    this.clearFormArray = <FormArray>this.form.controls["formArray"];
    this.clearFormArray.clear();

    this.control = <FormArray>this.form.controls["formArray"];
    this.control.push(this.getUnit());

    console.log(this.control);
    this.router.navigate(["/appointments"]);

  }

  addItem(index: number) {
   
    console.log(this.start_times);
    if(index){

    }
    this.control = <FormArray>this.form.controls["formArray"];
    this.control.push(this.getUnit());
    console.log(this.control[index]);
    
    this.formArrayObject = this.control.value;
    console.log(this.formArrayObject[index]);
    this.formArrayObjectValue = this.formArrayObject[index].starttime;
    console.log(this.formArrayObjectValue);
    
    

    this.selectedOptionIndex += 15;
    this.selectedOption = this.start_times[this.selectedOptionIndex];
    this.start_times.splice(0,this.selectedOptionIndex);

    if(this.start_times[index].value == this.formArrayObject[index].value){
      console.log("value");
      
    }
    //this.selectedOption = this.selectedOption[index];
    //this.selectedOption = this.formArrayObject[index].starttime;

    //console.log(this.formArrayObject[index].starttime);
    
    console.log("Times After element adding:", this.selectedOption);
    this.current_Time_Selection = this.selectedOption;
    
  }

  removeItem(index: number) {
    const control = <FormArray>this.form.controls["formArray"];
    control.removeAt(index);
    console.log((control.length));
    
  }

  
  onTimeSelect() {
    //console.log('Selected Option:-=-=', this.selectedOption);
  }
  
  onChanges() {
    
    console.log(this.current_Time_Selection);
  

      this.selectedOptionIndex = this.start_times.indexOf(this.selectedOption);
      this.selectedOptionIndex += 30;

      console.log(this.end_times[this.selectedOptionIndex]);
      this.selectedEndoption = this.end_times[this.selectedOptionIndex];  
      //this.selectedVal = newValue;
      //console.log(this.selectedVal);
      
    console.log("selected Option Index:", this.selectedOptionIndex);
    
  }
  
}

// download() {

//   this.daySelected = this.selectedDay;
//   console.log("Selected Day:", this.daySelected);

//   this.formArrayValues = this.control;
//   this.jsonFormArrayValue = JSON.stringify(this.formArrayValues.value);
//   console.log("FormArrayValues:", JSON.stringify(this.formArrayValues.value));

//   this.formData = this.form.controls["control"];
//   console.log(this.formData);

// }