import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  dataObject: any;
  formObject: any;
  action: string;

  rowId: number;
  btnName: string;
  actionType: number;

  nameOfClient: string;
  status: string;

  constructor( private service: CommonServiceService ) { }

  ngOnInit() {
    this.statusArray = this.service.statusArray;
  }

  ngAfterViewInit() {
   
  }

  receiveData($event){
    this.dataObject = $event.object;
    this.action = $event.action;

    console.log("ARRAY DATA :::==", this.dataObject);
    try{

    if(this.action == "Search"){
      this.SearchData($event);
    }

    if(this.action == "Delete"){
      let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
      this.mainFormArray.splice(dataObjIndex,1);
      console.log('After Delete:-- =======>>>>>>>',this.mainFormArray);
      this.btnName = "Add";
    }

    if(this.action == "Update"){
      this.rowId = $event.dataId;

      let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
      this.dataObject['id'] = this.rowId;
      this.mainFormArray[dataObjIndex]=this.dataObject;
      console.log('Main Array After update :: >>>>>',this.mainFormArray);
      this.btnName = "Add";
    }
    else{
      //Add:-
      this.idField;
      this.dataObject['id'] = this.idField;
      this.mainFormArray.push(this.dataObject);
      this.idField++;
      console.log("After adding:--",this.mainFormArray);
      
    }
    }catch(error){}
    
  }

  receiveId($event){
    this.rowId = $event.dataId;
    this.btnName = $event.name;
    this.actionType = $event.type;

    console.log(this.btnName);
    
    this.formObject = this.mainFormArray.find(x=>x.id == this.rowId);
    console.log("Form Obj --",this.formObject);
 
  }

  SearchData($event){
    this.rowId = $event.dataId;
    this.action = $event.action;

    this.status = $event.status
    this.nameOfClient = $event.name;

    console.log("Row Id for delete:--=-",this.rowId);
    
    if(this.action == "Search"){
      let searchedArray = this.mainFormArray.map((res)=>{
        console.log("Mapped result:--",res);
  
        if(this.status){
  
          res.status = false;
          if(res.select_status == this.status){
            res.status = true;
          }
        }
        else if(this.nameOfClient !== ""){
         
          res.status = false;
          if(res.client_name.includes(this.nameOfClient)){
            res.status = true;
          }
        }
        else{
          res.status = true;
        }
        
        return res;
      });
      console.log("Searched Array (Mapped arr:):=->",searchedArray);
      this.mainFormArray = searchedArray;
      console.log("MainArrayData:------",this.mainFormArray);
    }
    // else{ 
    //   //Delete
    //   // let dataObjIndex = this.mainFormArray.findIndex(x=>x.id == this.rowId);
    //   // this.mainFormArray.splice(dataObjIndex,1);
    //   // console.log('After Delete:-- =======>>>>>>>',this.mainFormArray);
    //   // this.btnName = "Add";
    // }

  }

}




