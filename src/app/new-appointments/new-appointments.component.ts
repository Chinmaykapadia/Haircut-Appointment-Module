import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-appointments',
  templateUrl: './new-appointments.component.html',
  styleUrls: ['./new-appointments.component.css']
})
export class NewAppointmentsComponent implements OnInit {

  form: FormGroup;
  newFormArray: any;
  days: String[] = [ 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday' ];
  activeDaySelection: any;

  minutesInterval: number = 1; //minutes interval
  start_time: any = []; // time array
  starting_Time: number = 9; // start time

  end_time: any = [];
  findFirstIndex_starttime: any;
  findLastIndex_starttime: any;
  removeBeforeFirstInd: any;
  removeAfterLastInd: any;

  addElements: any;
  select_startTime_optionIndex: any;
  selected_Time_Option: any;
  set_endTime_Value: any;
  changed_endTime_Option: any;

  newStartArray: any;
  seleced_Option_newArray: any;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    
    for (var i = 0; this.starting_Time < 24 * 60; i++) {
      var hours = Math.floor(this.starting_Time / 60);
      var minutes = this.starting_Time % 60;
      this.start_time[i] = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
      this.starting_Time = this.starting_Time + this.minutesInterval;
    }
    
    this.findFirstIndex_starttime = this.start_time.indexOf("09:00");
    this.findLastIndex_starttime = this.start_time.indexOf("11:00");
    this.removeBeforeFirstInd = this.start_time.splice(0, 531);
    this.removeAfterLastInd = this.start_time.splice(840);
    this.end_time = this.start_time;
    
    this.form = this.fb.group({
      timeFormArray : this.fb.array([
        this.getControls()
      ])
    });

    console.log(this.form);
    //this.newFormArray = this.form.value;

  }

  getControls(){
    return this.fb.group({
      startTime: [''],
      endTime: ['']
    })
  }

  addItems(i: any){
    this.newFormArray = this.addElements;
  
    this.addElements = <FormArray> this.form.controls['timeFormArray'];
    this.addElements.push(this.getControls());

    //this.selected_Time_Option = this.addElements[i - 1].endTime;
    console.log(this.addElements.value[i].endTime);

    //this.start_time.indexOf(this.addElements.value[i].endTime)
    this.newStartArray = this.start_time;

    this.select_startTime_optionIndex += 15;
    this.selected_Time_Option = this.start_time[this.select_startTime_optionIndex];
    console.log(this.selected_Time_Option);
    
    this.seleced_Option_newArray = this.newStartArray[this.select_startTime_optionIndex];
    console.log(this.seleced_Option_newArray);
    
    this.newStartArray.splice(0,this.seleced_Option_newArray);
    console.log(this.newStartArray);
    console.log(this.start_time);
    

    // this.start_time = this.start_time.indexOf(this.selected_Time_Option);

    //console.log(this.start_time.indexOf(this.selected_Time_Option));
    
    
    //this.start_time.splice(0,this.select_startTime_optionIndex);

    //this.select_startTime_optionIndex = this.start_time.indexOf(this.addElements.value[i].endTime) ;
    console.log(this.selected_Time_Option);
    
    //console.log(this.newFormArray);

  }
  onTimeSelect($event){

    this.selected_Time_Option = $event.target.options[$event.target.options.selectedIndex].text;

    this.select_startTime_optionIndex = this.start_time.indexOf(this.selected_Time_Option);
    this.select_startTime_optionIndex += 30;

    this.changed_endTime_Option = this.end_time[this.select_startTime_optionIndex];
    console.log(this.changed_endTime_Option);
    
    //this.set_endTime_Value = this.form.get('endTime').patchValue(this.start_time[this.select_startTime_optionIndex]);

    //console.log(this.form.get('timeFormArray')['controls']);
    
    console.log(this.start_time[this.select_startTime_optionIndex]);
    
  }

}
