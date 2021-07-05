import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-disp-form-data',
  templateUrl: './disp-form-data.component.html',
  styleUrls: ['./disp-form-data.component.css']
})
export class DispFormDataComponent implements OnChanges,OnInit {

  @Input() statusArray = [];
  @Input() arrayData = [];
  @Input() formGrp: FormGroup;
  @Output() rowInd = new EventEmitter();
  //@Output() emitDeleteData = new EventEmitter();

  submitted: boolean;
  data: any;
  len: number;
  delBtn: boolean;
  rowId: any;
  btnName: string;
  constructor() { }

  ngOnChanges() {
    console.log(this.arrayData);
    console.log("FormGroup:",this.formGrp);
    
  }
  ngOnInit() {
    this.submitted = true;
  }
  update_Data(id: number, i_: number){

    const findObject = this.arrayData.find(x=>x.id == id);
    console.log("Find Id",findObject);
    this.rowId = findObject.id;

    let emitData = { id: this.rowId, name: "Update", index:i_ };

    try{

      this.formGrp.patchValue({
        select_status: this.arrayData[i_].select_status,
        client_name: this.arrayData[i_].client_name

        // select_status: findObject.select_status,
        // client_name: findObject.client_name
      });
      console.log("FormGroup Value:",this.formGrp.value);
    }catch(error){}
    this.rowInd.emit(emitData);
  }
  deleteData(id,i_){
    let emitData = { id: this.rowId, name: "Add", index:i_ };

    const findObject = this.arrayData.find(x=>x.id == id);
    this.arrayData.splice(i_,1);
    this.rowInd.emit(emitData);
    this.formGrp.reset();
  }

  onStatusBtnClick(i_: number , index: number){
    try{

      this.arrayData[i_].select_status = this.statusArray[index].value;
      this.arrayData[i_].color = this.statusArray[index].color;
      
    }catch(error){}
    
  }
}
