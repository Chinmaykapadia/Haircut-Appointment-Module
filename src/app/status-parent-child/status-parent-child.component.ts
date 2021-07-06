import { Component, Input, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonServiceService } from '../status-parent-child/common-service.service';
@Component({
  selector: 'app-status-parent-child',
  templateUrl: './status-parent-child.component.html',
  styleUrls: ['./status-parent-child.component.css']
})
export class StatusParentChildComponent implements OnInit,AfterViewInit {

  statusArray = [];

  mainFormArray = [];
  idField = 1;

  arrayData: any;
  formToPatchValue: FormGroup;
  formObject: any;
  id: number;

  rowId: number;
  btnName: string;
  index: number;
 // name: string;

  constructor( private service: CommonServiceService ) { }

  ngOnInit() {
    this.statusArray = this.service.statusArray;
  }

  ngAfterViewInit() {
   
    //this.receiveArrayData;
  }

  receiveArrayData($event){
    this.arrayData = $event.object;

    this.arrayData['id'] = this.idField;
    this.formToPatchValue = $event.formG;
    console.log(this.formToPatchValue);
    
     //this.index = $event.ind;

    console.log("receasdfdf", this.arrayData);

    if(this.btnName == "Update"){
      this.rowId = $event.dataId;

      let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
      this.mainFormArray[dataObjIndex]=this.arrayData;
      console.log(this.mainFormArray);
      console.log('=======>>>>>>>22222',this.mainFormArray);
    }else{
      this.arrayData['id'] = this.idField;
      this.mainFormArray.push(this.arrayData);
      this.idField++;
      console.log("After adding:--",this.mainFormArray);
      
    }


  }

  receiveId($event){
    this.rowId = $event.dataId;
    this.btnName = $event.name;
    console.log(this.btnName);
    
    //this.index = $event.index;
    //this.id = $event.id;

    console.log(this.id);
    
    this.formObject = this.mainFormArray.find(x=>x.id == this.rowId);
    console.log(this.formObject);
    
    //this.formObject = this.mainFormArray[this.index];
    console.log("Form Obj --",this.formObject);
    
    //console.log(this.rowId);
    console.log(this.btnName);
    console.log(this.index);
  }

  // updateData($event){
  //   this.arrayData = $event.array;
  //   this.formToPatchValue = $event.formG;
  //   // this.name = $event.name;
  //   // this.index = $event.ind;
  //   this.rowId = $event.dataId;

  //   let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
  //   this.mainFormArray[dataObjIndex]=this.arrayData;
  //   console.log(this.mainFormArray);
    
  // }

  deletData($event){
    this.rowId = $event.dataId;
    console.log("Row Id for delete:--=-",this.rowId);
    
    let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
    this.mainFormArray.splice(dataObjIndex,1);
    console.log('=======>>>>>>>',this.mainFormArray);
    
    //this.idField--;
  }
}












// receiveFormGroup($event){
//   this.form = $event;
//   console.log("Form Group:",this.form);
// }

// receiveDelateData($event){
//   this.btnName = $event;
// }