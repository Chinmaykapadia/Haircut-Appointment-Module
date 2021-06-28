import { Component, Input, OnInit, Output, OnChanges, AfterViewInit, DoCheck, AfterContentInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  @Input() frmAryData;
  @Input() formGrp: FormGroup;
  //@Output() data_In_Arr = new EventEmitter();
  @Output() patchValue = new EventEmitter();
  // @Output() btnName = new EventEmitter();

  submitted: boolean;
  frmArrData = [];
  //buttonValue = [];
  da: any;

  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  constructor(private service: StatusServiceService) { 
    this.service.statusOption$.subscribe((res)=>{

    });
  }

  ngOnInit() {
    this.submitted = true;
    //this.data_In_Arr.emit(this.frmAryData);
     //this.service.getData();
     this.da = this.service.getData();
    console.log(this.da);
  
  }
  // disp(){
  //   this.da = this.service.getData();
  //   console.log(this.da);
  // }

  update_Data(i_:number){
    // this.formGrp.patchValue({
    //         select_status: this.frmArrData[i_].select_status,
    //         client_name: this.frmArrData[i_].client_name,
    //       //  color: this.frmArrData[i_].color,
    // });

    // this.rowId.emit(i_);
    //this.patchValue.emit(this.da[i_]);
    this.service.changeButtonName("Update");
    this.service.get_Edit_id(i_);
    this.service.patchValues(this.formGrp);
    this.service.ptchVal(i_);
    //this.btnName.emit('Update');
  }

  deleteData(i_: number){
    this.da.splice(i_, 1);
    console.log(this.da);
    //this.formGrp.reset();
  }
  
  onStatusBtnClick(i_: number, index: number, _i: number) {
  
    try{

      this.da[i_].select_status = this.buttonValue[index].value;
      this.da[i_].color = this.buttonValue[index].color;
      
    }catch(error){}
   
  }
}
