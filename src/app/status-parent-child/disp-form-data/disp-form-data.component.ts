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
  @Output() emitDeleteData = new EventEmitter();

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

    const findId = this.arrayData.find(x=>x.id == id);
    console.log("Find Id",findId);
    this.rowId = findId.id;

    let emitData = { id: this.rowId, name: "Update" };

    try{

      this.formGrp.patchValue({
        // select_status: this.arrayData[i_].select_status,
        // client_name: this.arrayData[i_].client_name

        select_status: findId.select_status,
        client_name: findId.client_name
      });
      console.log("FormGroup Value:",this.formGrp.value);
    }catch(error){}
    this.rowInd.emit(emitData);
  }
  deleteData(i_){
    const findId = this.arrayData.find(x=>x.id == i_);
    this.arrayData.splice(findId,1);
    //this.emitDeleteData.emit("Add");
  }

  onStatusBtnClick(i_: number , index: number){
    try{

      this.arrayData[i_].select_status = this.statusArray[index].value;
      this.arrayData[i_].color = this.statusArray[index].color;
      
    }catch(error){}
    
  }
}
