import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  
  submitted: boolean;
  data: any;
  len: number;
  delBtn: boolean;
  btnArray;
  constructor( private service: StatusServiceService ) {   
   
  }

  ngOnInit() {
    this.submitted = true;
    this.btnArray = this.service.buttonValue;
    this.data = this.service.getData();
    console.log("OnInit display Data:===",this.data);
    this.delBtn = true;
  }

  update_Data(id:number){
    
    let emitData = { id: id, type: 1}
    this.service.getEdt(emitData);
  }
  
  deleteData(id: number){

    let delData = this.data.findIndex(x=>x.id == id);
    this.data.splice(delData, 1);

    let emitData = { id: id, type: 2}
    this.service.getEdt(emitData);
    
    console.log("Data after delete:===>",this.data);
  
  }
  
  onStatusBtnClick(i_: number, index: number) {
    
    try{

      this.data[i_].select_status = this.btnArray[index].value;
      this.data[i_].color = this.btnArray[index].color;
      
    }catch(error){}
    
  }
}
