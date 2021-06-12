import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  // days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  // form:FormGroup;
  // slotTime = [
  //   '9:00-9:30',
  //   '9:45-10:15',
  //   '10:30-11:00',
  //   '11:15-11:45',
  //   '12:00-12:30',
  //   '12:45-1:15',
  //   '1:30-2:00',
  //   '2:15-2:45',
  //   '3:00-3:30',
  //   '3:45-4:15',
  //   '4:30-5:00',
  // ];
  //endTime = ['9:30','10:15','11:00','11:45','12:30','1:15','2:00','2:45','3:30','4:15','5:00']

  //defaultSlot = { startTime: '9:00', endTime: '9:30' };
  constructor() { }

  ngOnInit(): void {
  }

//==========================================================================================================
  // onChanges(event: string) {
  //   //console.log('Selected Option:-=-=', this.selectedOption);
  //   //console.log(this.times.indexOf('09:45'));
  //   //console.log(this.times.indexOf(this.selectedOption));

  //   //this.thirtyMinIndex = this.times.indexOf('09:30');
  //   this.selectedOptionIndex = this.times.indexOf(this.selectedOption);
  //   this.selectedOptionIndex += 30;
  //   console.log(this.timmings[this.selectedOptionIndex]);
  //   this.selectedEndoption = this.timmings[this.selectedOptionIndex];

  //   // this.addIndex = this.timmings.map((res)=>{
  //   //   this.timmings.splice(0,this.selectedOptionIndex);
  //   //   //res.indexOf(this.selectedOptionIndex)

  //   //   console.log("Add Index:",res);
  //   // });

  //   console.log('selected Option Index:', this.selectedOptionIndex);
  //   // this.timmings = this.timmings[this.selectedOptionIndex];
  // }

//==========================================================================================================

  // daysListClick(index: number, value: string) {
  //   //alert("clicked");
  //   this.activeDaySelection = index;
  //   console.log(this.activeDaySelection);

  //   // let slotValue = this.selectedOption;
  //   // console.log(slotValue);

  //   this.selectedDay = value;
  //   console.log(this.selectedDay);

  //   //this.form.controls['formArray']
  //   //(this.form.controls['formArray'] as FormArray).removeAt(1);
  //   this.clearFormArray = <FormArray>this.form.controls['formArray'];
  //   this.clearFormArray.clear();

  //   this.control = <FormArray>this.form.controls['formArray'];
  //   this.control.push(this.getUnit());

  //   console.log(this.control);
  //   this.router.navigate(['/appointments']);

  //   //this.formatTime();
  // }
//==========================================================================================================

  // formatTime() {
  //   const st = this.defaultSlot.startTime.split(':');
  //   const et = this.defaultSlot.endTime.split(':').join('');

  //   console.log('st:--', st);
  //   console.log('st:--', et);
  // }

  // getTimes(from, until){
  //   //"01/01/2001" is just an arbitrary date
  //   var until:any = Date.parse(until);
  //   var from:any = Date.parse(from);
  //   //*2 because because we want every 30 minutes instead of every hour
  //   var max = (Math.abs(until-from) / (60*60*1000))*2;
  //   var time = new Date(from);
  //   var hours = [];
  //   for(var i = 0; i <= max; i++){
  //       //doubleZeros just adds a zero in front of the value if it's smaller than 10.
  //       var hour = this.doubleZeros(time.getHours());
  //       var minute = this.doubleZeros(time.getMinutes());
  //       hours.push(hour+":"+minute);
  //       time.setMinutes(time.getMinutes()+ 1);
  //   }
  //   return hours;
  // }
  //==========================================================================================================
}


// https://stackblitz.com/edit/angular-nrqgj5?file=src%2Fapp%2Fapp.component.ts


// getFormData() {
//   return this.form.get('formArray') as FormArray;
// }

// getStartTime(index: number): FormArray {
//   return this.getFormData().at(index).get('starttime') as FormArray;
// }