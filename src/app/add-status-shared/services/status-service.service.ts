import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';
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
  public data = [];
  
  private name = new Subject<string>();
  name$ = this.name.asObservable();
  
  private editId = new Subject<number>();
  editId$ = this.editId.asObservable();
  
  private form = new Subject<FormGroup>();
  form$ = this.form.asObservable();

  private statusOption = new Subject<string>();
  private clientName = new Subject<string>();
  statusOption$ = this.statusOption.asObservable();
  clientName$ = this.clientName.asObservable();
  
  // private srchData = new Subject();
  // srchData$ = this.srchData.asObservable();
  
  constructor() { }

  pushData(data: data){
    this.array_data.push(data);
    console.log(this.array_data);
    
  }

  getData(){
    return this.array_data;
  }

  changeButtonName(data: string){
    this.name.next(data);
    //return 'Update';
  }

  get_Edit_id(index: number){
    this.editId.next(index);
  }

  patchValues(frm: FormGroup){
    this.form.next(frm);
  }

  ptchVal(indx: number){
    console.log(this.array_data[indx]);
    return this.array_data[indx];
  }

  searchValues(option: string, name: string){
    this.statusOption.next(option);
    this.clientName.next(name);
  }

  load_and_search(term: string){
    const filtered_data = this.array_data.filter((item)=>{
      return item.select_status.includes(term)
    });
  }
  
}
















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
