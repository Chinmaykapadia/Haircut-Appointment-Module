import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 class data{
  id: number
  select_status: string
  client_name: string
  color: string
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {

  array_data = [];
  buttonValue = [
    { id: 1, value: "i'm Available", color: "#00A36C" },
    { id: 2, value: "i'm not Available", color: "#E34234" },
    { id: 3, value: "i'm in Meeting", color: "#FFD700" },
  ];
  
  private form = new Subject<object>();
  form$ = this.form.asObservable();

  private deletBtn = new Subject<any>();
  deletBtn$ = this.deletBtn.asObservable();

  private editDeletId = new Subject<any>();
  editDeletId$ = this.editDeletId.asObservable();

  constructor() { }

  pushData(data: data){
    this.array_data.push(data);
    console.log("Services Array::==>",this.array_data);
    
  }

  getData(){
    return this.array_data;
  }

  //gets object of that id:
  getDataById(id: number){
    return this.array_data.find(x=>x.id == id);
  }

  deleteItem(id: number){
    //const ind = this.array_data.indexOf(id);
    const ind = this.array_data.findIndex(x=>x.id == id);
    return this.array_data.splice(ind,1);
  }

  getEdt(emitData){
    this.editDeletId.next(emitData);
  }

  searchData(statusOfClient: string, name: string){
    let searchedArray = this.array_data.map((res)=>{
      res.status = false;
      console.log("Mapped result:--",res);

      if(statusOfClient && name != ''){

        if(res.select_status == statusOfClient && res.client_name.includes(name)){
          res.status = true;
        }
      }

      else if(statusOfClient){

          //res.status = false;
          if(res.select_status == statusOfClient){
            res.status = true;
          }
      }
      else if(name !== ""){
       
          //res.status = false;
          if(res.client_name.includes(name)){
            res.status = true;           
          }
      }
      else{
        res.status = true;
      }
      return res;
    });
    console.log("Searched Array (Mapped arr:):=->",searchedArray);
    this.array_data = searchedArray;
    console.log("FormArrayData:------",this.array_data);
  }
    
}



































// private editId = new Subject<any>();
  // editId$ = this.editId.asObservable();

 // getEditId(index: number, type: number){
  //   this.editId.next({id:index,type:1});
  // }