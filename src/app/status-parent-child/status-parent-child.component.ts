import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-status-parent-child',
  templateUrl: './status-parent-child.component.html',
  styleUrls: ['./status-parent-child.component.css']
})
export class StatusParentChildComponent implements OnInit {

  mainFormArray = [];

  formObject: any;
  
  actionType: number;
  idField = 1;
  
  constructor( ) { }

  ngOnInit() {
    
  }

  receiveData($event){ 
    
    let dataObject: object = $event.object;
    let action: string = $event.action;

    let dataObjIndex: number = this.mainFormArray.findIndex(x=>x.id == $event.dataId);
    
    console.log("ARRAY DATA :::==", dataObject);
    try{

    if(action == "Search"){
      this.SearchData($event);
    }

    if(action == "Delete"){
      
      this.mainFormArray.splice(dataObjIndex, 1);
      console.log('After Delete:-- =======>>>>>>>',this.mainFormArray);
    }

    if(action == "Update"){
    
      dataObject['id'] = $event.dataId;
      this.mainFormArray[dataObjIndex] = dataObject;
      console.log('Main Array After update :: >>>>>',this.mainFormArray);
    }
    else{
      //Add:-
      dataObject['id'] = this.idField;
      this.mainFormArray.push(dataObject);
      this.idField+= 1;
      console.log("After adding:--",this.mainFormArray);
    }
    
    }catch(error){}
    
  }

  receiveId($event){
    
    this.actionType = $event.type;
 
    this.formObject = this.mainFormArray.find(x=>x.id == $event.dataId);
    console.log("Form Obj --",this.formObject);
 
  }

  SearchData($event){ 
   
    let statusOfClient: string = $event.status
    let nameOfClient: string = $event.name;
    
    if($event.action == "Search"){
      let searchedArray = this.mainFormArray.map((res)=>{
        console.log("Mapped result:--",res);
  
        if(statusOfClient){
  
          res.status = false;
          if(res.select_status == statusOfClient){
            res.status = true;
          }
        }
        else if(nameOfClient !== ""){
         
          res.status = false;
          if(res.client_name.includes(nameOfClient)){
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

  }

}




