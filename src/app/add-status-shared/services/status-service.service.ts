import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  type = "Add";
  //public data = [];
  
  // private name = new Subject<string>();
  // name$ = this.name.asObservable();
  
  private editId = new Subject<any>();
  editId$ = this.editId.asObservable();
  
  private form = new Subject<object>();
  form$ = this.form.asObservable();

  // private edit_Obj = new Subject<number>();
  // edit_Obj$ = this.edit_Obj.asObservable();

  private editIdd = new Subject<any>();
  editIdd$ = this.editIdd.asObservable();


  constructor() { }

  pushData(data: data){
    this.array_data.push(data);
    console.log("Services Array::==>",this.array_data);
    
  }

  getData(){
    return this.array_data;
  }

  // changeButtonName(data: string){
  //   this.name.next(data);
  // }

  // get_Edit_id(index: number){
  //   this.editId.next(index);
  // }

  getEditId(index: number,type: string){
    this.editId.next({id:index,type:"Update"});
  }

  getEditIdd(index: number,type: string){
    this.editIdd.next({id:index,type:"Add"});
  }

  // ptchVal(indx: number){
  //   this.edit_Obj.next(this.array_data[indx]);
  //   console.log("Observable:<===--->",this.edit_Obj$);
  //   console.log("Subject:>>>>>>",this.edit_Obj);
    
  //   // console.log(this.array_data[indx]);
  //   // return this.array_data[indx];
  // }

  //enable search btn.
  sendForm(){
    this.form.next();
  }

}























 // private search_D = new Subject();
  // search_D$ = this.search_D.asObservable();

 // disp_searchData(data){
  //   this.search_D.next(data);
  //   console.log(this.search_D$);
    
  // }

// private statusOption = new Subject<any>();
// statusOption$ = this.statusOption.asObservable();
// private clientName = new Subject<string>();
// clientName$ = this.clientName.asObservable();

// searchValues(option: string, name: string){
//   let filter_arr = this.array_data.filter((data)=>{
//     return data.option;
//   })
//   this.statusOption.next(filter_arr);
//  // this.clientName.next(name);
//   //console.log(option);
//  // console.log(name);
      
// }



// load_and_search(term: string){
  //   const filtered_data = this.array_data.filter((item)=>{
  //     return item.select_status.includes(term)
  //   });
  //   return filtered_data;
  // }

// patchValues(frm: FormGroup){
  //   this.form.next(frm);
  // }

// search_Data(selectedOption: string, clientName_value: string){
//   let sr_Data = this.getData().map((res)=>{
//     res.select_status = false;
//     if(res.select_status == selectedOption){
//       res.select_status = true;
//     }
//     if(res.client_name == clientName_value){
//       res.select_status;
//     }
//     return res;
//   });

// }
