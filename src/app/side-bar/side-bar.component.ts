import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {

  activeDaySelection: number;
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  timmings: any = [];

  minutesInterval: number = 1; //minutes interval
  times: any = []; // time array
  startTime: number = 9; // start time
 // ap: any = ['AM', 'PM']; // AM-PM

  form: FormGroup;
  formData: any;
  selectedOption: any;
  selectedDay: any;
  control: any;
  daySelected: any;
  formArrayValues: any;
  jsonFormArrayValue: any;
  clearFormArray: FormArray;
  thirtyMinIndex: number;
  selectedOptionIndex: number;
  addIndex: any;
  selectedEndoption: any;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    for (var i = 0; this.startTime < 24 * 60; i++) {
      var hours = Math.floor(this.startTime / 60);
      var minutes = this.startTime % 60;
      this.times[i] = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
      // this.times[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + minutes).slice(-2) + this.ap[Math.floor(hours/12)];
      this.startTime = this.startTime + this.minutesInterval;
    }

    let findFirstInd = this.times.indexOf('09:00');
    //console.log(findFirstInd);
    let findLastInd = this.times.indexOf('11:00');
    //console.log(findLastInd);

    let removeBeforeFirstInd = this.times.splice(0, 531);
    //console.log(removeBeforeFirstInd);
    let removeAfterLastInd = this.times.splice(840);
    //console.log(removeAfterLastInd);
    this.timmings = this.times;
    console.log('Times:', this.timmings);

    //console.log(this.times);

    this.form = this.fb.group({
      formArray: this.fb.array([this.getUnit()]),
    });
  }

  private getUnit() {
    return this.fb.group({
      starttime: [''],
      endtime: [''],
    });
  }

  daysListClick(index: number, value: string) {
    //alert("clicked");
    this.activeDaySelection = index;
    console.log(this.activeDaySelection);

    this.selectedDay = value;
    console.log(this.selectedDay);

    this.clearFormArray = <FormArray>this.form.controls['formArray'];
    this.clearFormArray.clear();

    this.control = <FormArray>this.form.controls['formArray'];
    this.control.push(this.getUnit());

    console.log(this.control);
    this.router.navigate(['/appointments']);

    //this.formatTime();
  }

  addItem(index:number) {
    this.control = <FormArray>this.form.controls['formArray'];
    this.control.push(this.getUnit());

    //this.times.splice(0,this.selectedOptionIndex -1);
    this.selectedOptionIndex += 15;
    this.selectedOption[index] = this.times[this.selectedOptionIndex];

    console.log("Times After element adding:",this.selectedOption);
    
  } 

  removeItem(index: number) {
    const control = <FormArray>this.form.controls['formArray'];
    control.removeAt(index);
  }

  download() {
    this.daySelected = this.selectedDay;
    console.log('Selected Day:', this.daySelected);

    this.formArrayValues = this.control;
    this.jsonFormArrayValue = JSON.stringify(this.formArrayValues.value);
    console.log('FormArrayValues:', JSON.stringify(this.formArrayValues.value));

    this.formData = this.form.controls['control'];
    console.log(this.formData);
  }

  onTimeSelect() {
    //console.log('Selected Option:-=-=', this.selectedOption);
  }

  onChanges(event: string) {
   
    this.selectedOptionIndex = this.times.indexOf(this.selectedOption);
    this.selectedOptionIndex += 30;
    console.log(this.timmings[this.selectedOptionIndex]);
    this.selectedEndoption = this.timmings[this.selectedOptionIndex];

    console.log('selected Option Index:', this.selectedOptionIndex);
   
  }

}
