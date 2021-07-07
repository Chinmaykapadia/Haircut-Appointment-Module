import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonServiceService } from '../../status-parent-child/common-service.service';
@Component({
  selector: 'app-disp-form-data',
  templateUrl: './disp-form-data.component.html',
  styleUrls: ['./disp-form-data.component.css']
})
export class DispFormDataComponent implements OnInit {

  statusArray = [];
  @Input() mainArrayData = [];
 
  @Output() rowData = new EventEmitter();

  submitted: boolean;

  constructor( private service: CommonServiceService ) { }

  ngOnInit() {
    this.statusArray = this.service.statusArray;
    this.submitted = true;
  }

  update_Data( id: number ){
 
    let emitData = { name: "Update", dataId: id, type: 1 };

    let dataObject = this.mainArrayData.find(x=>x.id == id);
    console.log("data object for edit: ",dataObject);
    console.log("Edit Id:-",id);
    
    this.rowData.emit(emitData);
  }

  deleteData( id: number ){
    let emitData = { name: "Add", dataId: id, type: 2 };

    let delData = this.mainArrayData.findIndex(x=>x.id == id);

    this.mainArrayData.splice(delData,1);
    this.rowData.emit(emitData);
    
  }

  onStatusBtnClick(id: number , btnId: number){
    try{

      let mainArrObjIndx = this.mainArrayData.findIndex(x=>x.id == id);
      let statusArrObjIndx = this.statusArray.findIndex(x=>x.id == btnId);

       this.mainArrayData[mainArrObjIndx].select_status = this.statusArray[statusArrObjIndx].value;
       this.mainArrayData[mainArrObjIndx].color = this.statusArray[statusArrObjIndx].color;
      
    }catch(error){}
    
  }
}



























































