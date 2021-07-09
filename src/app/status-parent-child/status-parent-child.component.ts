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
  
  search: string;

  constructor( ) { }

  ngOnInit() {
    
  }

  receiveData($event){ 
    
    let dataObject: object = $event.object;
    let action: string = $event.action;

    let dataObjIndex: number = this.mainFormArray.findIndex(x=>x.id == $event.dataId);
    
    console.log("ARRAY DATA :::==", dataObject);
    
    switch (action) {
      case "Add":

        dataObject['id'] = this.idField;
        this.mainFormArray.push(dataObject);
        this.idField+= 1;
        console.log("After adding:--",this.mainFormArray);
        break;

      case "Update":
        dataObject['id'] = $event.dataId;
        this.mainFormArray[dataObjIndex] = dataObject;
        console.log('Main Array After update :: >>>>>',this.mainFormArray);
        break;
    
      case "Delete":
        this.mainFormArray.splice(dataObjIndex, 1);
        console.log('After Delete:-- =======>>>>>>>',this.mainFormArray);
        break;
      
      case "Search":
        this.SearchData($event);

      default:
        break;
    }
    
  }

  receiveId($event){
    
    this.actionType = $event.type;
 
    this.formObject = this.mainFormArray.find(x=>x.id == $event.dataId);
    console.log("Form Obj --",this.formObject);
 
  }

  SearchData($event){ 
   
    let statusOfClient: string = $event.staatus;
    let nameOfClient: string = $event.name;
    this.search = $event.action;
    
    if($event.action == "Search"){
        
      this.mainFormArray.map((res)=>{
        res.status = false;
          
        

          if(res.select_status == statusOfClient && res.client_name.includes(nameOfClient)){
            res.status = true;
            console.log("res1:-",res);
          }
          else if(statusOfClient){
            
            if(res.select_status == statusOfClient){
              res.status = true;
            }
          }
          else if(nameOfClient != ""){
           
            if(res.client_name.includes(nameOfClient)){
            
              res.status = true;
              console.log(res);
            }
          }
          else{
            this.search = "";
            res.status = false;
          }

          console.log("Mapped result:--",res);
          return res;
      });
        
        console.log("MainArrayData:------",this.mainFormArray);
    }
  }
}


































// let searchedArray = this.mainFormArray.map((res)=>{
        //   res.status = false;
        //   if(statusOfClient && nameOfClient != ""){
            
        //     if(res.select_status == statusOfClient && res.client_name.includes(nameOfClient)){
        //       res.status = true;
        //       console.log("res1:-",res);
              
        //     }
        //     // else{
        //     //   res.status = false;
        //     //   console.log("res2:-",res);
              
        //     // }
        //   }
        //   else if(statusOfClient){
            
        //     if(res.select_status == statusOfClient){
        //       res.status = true;
        //     }
        //     // else{
        //     //   res.status = false;
        //     // }
        //   }
        //   else if(nameOfClient != ""){
           
        //     if(res.client_name.includes(nameOfClient)){
            
        //       res.status = true;
        //       console.log(res);
        //     }
        //     // else{
        //     //   res.status = false;
        //     // }
        //   }
        //   else{
        //     this.search = "";
        //     res.status = false;
        //   }

          
        //   console.log("Mapped result:--",res);
        //   return res;
        // });

        //console.log("Searched Array (Mapped arr:):=->",searchedArray);  
        //this.mainFormArray = searchedArray;


//----------------------------------------------------========================================================

// if($event.action == "Search"){

//   let searchedArray = this.mainFormArray.map((res)=>{

//     if(nameOfClient == ""){
//       res.status = false;
//     }
//     console.log("Mapped result:--",res);

//     if(statusOfClient){

//       res.status = false;
//       if(res.select_status == statusOfClient){
//         res.status = true;
//       }
//     }
//     else if(nameOfClient !== ""){
     
//       res.status = false;
//       if(res.client_name.includes(nameOfClient)){
//         res.status = true;
//       }
//     }
//     else{
//       res.status = true;
//     }
    
//     return res;
//   });
//   console.log("Searched Array (Mapped arr:):=->",searchedArray);
//   this.mainFormArray = searchedArray;
//   console.log("MainArrayData:------",this.mainFormArray);
// }