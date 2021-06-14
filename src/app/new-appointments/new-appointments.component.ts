import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-appointments',
  templateUrl: './new-appointments.component.html',
  styleUrls: ['./new-appointments.component.css']
})
export class NewAppointmentsComponent implements OnInit {

  form: FormGroup;
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
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    
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

  }

  getControls(){
    return this.fb.group({
      startTime: [''],
      endTIme: ['']
    })
  }

}
