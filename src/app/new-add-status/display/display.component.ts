import { AfterViewInit, Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,OnChanges {

  @Input() frmArrData = [];
  @Input() formGrp: FormGroup;
  @Output() patchValue = new EventEmitter();
  @Output() btnName = new EventEmitter();
  @Output() rowId = new EventEmitter();
  @Output() dataArray = new EventEmitter();
  //@Output() btnChangedName = new EventEmitter();

  rowIndex: number;
  submitted: boolean;
  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  constructor() { }

  ngOnInit() {
    this.submitted = true;
  }
  ngOnChanges() {
    console.log(this.frmArrData);
    this.dataArray.emit(this.frmArrData);
  }
  
  update_Data(i_:number){
    this.formGrp.patchValue({
            select_status: this.frmArrData[i_].select_status,
            client_name: this.frmArrData[i_].client_name,
 //           color: this.frmArrData[i_].color,
    });
    this.rowId.emit(i_);
    this.patchValue.emit();
    this.btnName.emit('Update');
  }
//   changeBtnVal($event){
//     this.btnChangedName = $event
//  }

  deleteData(i_: number){
    this.frmArrData.splice(i_, 1);
    console.log(this.frmArrData);
    this.formGrp.reset();
  }

  onStatusBtnClick(){}
}
