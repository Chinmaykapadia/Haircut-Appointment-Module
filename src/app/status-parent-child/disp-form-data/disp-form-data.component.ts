import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonServiceService } from '../../status-parent-child/common-service.service';
@Component({
  selector: 'app-disp-form-data',
  templateUrl: './disp-form-data.component.html',
  styleUrls: ['./disp-form-data.component.css']
})
export class DispFormDataComponent implements OnChanges,OnInit {

  statusArray = [];
  @Input() mainArrayData = [];
  @Input() formGrp: FormGroup;
  @Output() rowData = new EventEmitter();

  submitted: boolean;
  rowId: any;
  btnName: string;
  constructor( private service: CommonServiceService ) { }

  ngOnChanges() {
    console.log(this.mainArrayData);
    console.log("FormGroup:",this.formGrp);
    
  } 

  ngOnInit() {
    this.statusArray = this.service.statusArray;
    this.submitted = true;
  }

  update_Data(i_: number, id: number){
 
    let emitData = { name: "Update", index: i_, dataId: id };

    let dataObject = this.mainArrayData.find(x=>x.id == id);
    console.log(dataObject);
    
    try{

      this.formGrp.patchValue({
        // select_status: this.mainArrayData[i_].select_status,
        // client_name: this.mainArrayData[i_].client_name
        select_status: dataObject.select_status,
        client_name: dataObject.client_name
      });
      console.log("FormGroup Value:",this.formGrp.value);
    }catch(error){}
    console.log(id);
    
    this.rowData.emit(emitData);
  }

  deleteData(i_, id: number){
    let emitData = { name: "Add", index: i_, id: id };

    let delData = this.mainArrayData.findIndex(x=>x.id == id);

    this.mainArrayData.splice(delData,1);
    this.rowData.emit(emitData);
    this.formGrp.reset();
    //this.btnName = "Add";
  }

  onStatusBtnClick(i_: number , index: number){
    try{

      this.mainArrayData[i_].select_status = this.statusArray[index].value;
      this.mainArrayData[i_].color = this.statusArray[index].color;
      
    }catch(error){}
    
  }
}



























































// update_Data(i_: number){

//   // const findObject = this.mainArrayData.find(x => x.id == id);
//   // console.log("Find Id",findObject);
//   // this.rowId = findObject.id;

//   let emitData = { name: "Update", index: i_ };

//   try{

//     this.formGrp.patchValue({
//       select_status: this.mainArrayData[i_].select_status,
//       client_name: this.mainArrayData[i_].client_name

//       // select_status: findObject.select_status,
//       // client_name: findObject.client_name
//     });
//     console.log("FormGroup Value:",this.formGrp.value);
//   }catch(error){}
//   this.rowInd.emit(emitData);
// }
// deleteData(i_){
//   let emitData = { name: "Add", index: i_ };

//   //const findObject = this.arrayData.find(x => x.id == id);
//   // this.arrayData.splice(i_,1);
//   this.mainArrayData.splice(i_,1);
//   this.rowInd.emit(emitData);
//   this.formGrp.reset();
// }