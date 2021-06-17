import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  status = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  status1 = [ { value: "i'm Available", color: "red" }, 
              { value: "i'm not Available", color: "yellow" },
              { value: "i'm in Meeting", color: "green" }
            ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];
  //buttonValue = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  buttonValue = [ { value: "i'm Available", color: "red" }, 
                  { value: "i'm not Available", color: "yellow" },
                  { value: "i'm in Meeting", color: "green" }
                ];
  buttonName: string;
  findId: number;
  formArrayLength: number;
  showDeleteButton: boolean;
  statusColor: string;
  filterData = [];
  searchData: boolean;
  isFormFIeldEmpty: boolean;
 // btnDisable: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [''],
      client_name: [''],
      color:['']
    });
    this.submitted = false;
    this.buttonName = 'Add';
    this.formArrayLength = this.formArray.length;
    console.log(this.formArrayLength);
    // this.filterData = this.form.get('client_name').valueChanges.pipe(startWith(''),map(value => this.Search(value)));
    this.searchData = false;
    
  }

  onAdd(){
      
    this.submitted = true;
    console.log(this.selectedOption);
    console.log(this.clientName_value);
    let a = this.status1.findIndex(x => x.value == this.selectedOption);
    console.log(a);
    // this.statusColor = '';
    //console.log(this.status1[select_status].findIndex(select_status:this.selectedOption));
    

    if(this.buttonName == 'Add'){
      this.searchData = false;
      this.form.value.color = this.status1[a].color;
      this.formArray.push(this.form.value);  
      console.log(this.formArray);
      this.form.reset();

    }
    else{
      this.searchData = false
      console.log("Updated");
      this.formArray[this.findId].select_status = this.selectedOption;
      this.formArray[this.findId].client_name = this.clientName_value;
      this.formArray[this.findId].color = this.status1[a].color;
      this.form.reset();
      this.buttonName = 'Add';
      console.log(this.formArray);
      
    }
  
   

  }
  onStatusBtnClick(i_: number, index: number,_i:number){
    console.log(this.buttonValue[index]);
    // this.clientV = this.buttonValue[index];
    console.log(this.formArray[index]);
    
    this.formArray[i_].select_status = this.buttonValue[index].value;
    //this.formArray[i_].color.value = this.buttonValue[index].value;
    this.formArray[i_].color = this.buttonValue[index].color;
    console.log("Status Color:->",this.statusColor);
    
    console.log(this.formArray[index]);
    console.log(this.formArray);
    // this.stats = this.formArray[index].select_status;
  }

  Delete(){
    this.searchData = false;
    this.formArray.splice(this.findId,1);
    this.form.reset();
    this.buttonName = 'Add';
    console.log(this.formArray);
    
   // this.formArray.splice(i_);
  }

  Search(clientName_value: string){
    // let findV = this.formArray.find(x => x.client_name == this.clientName_value);
    // console.log(findV);
    this.searchData = true;

    const filterValue = this.formArray.filter((item)=>{    
      return item.client_name.toLowerCase().includes(clientName_value.toLowerCase());
    });
    console.log(filterValue);
    this.filterData = filterValue;
    
  }

  updateData(i_: number,_i:number){
    this.form.patchValue({
      select_status: this.formArray[i_].select_status,
      client_name: this.formArray[i_].client_name,
      color: this.formArray[i_].color
    });
    if(this.searchData == true){
      this.form.patchValue({
        select_status: this.filterData[_i].select_status,
        client_name: this.filterData[_i].client_name,
        color: this.filterData[_i].color
      });
    }
   
    this.searchData = false;
    this.filterData.splice(0,_i);
   // this.addToedit = true;
    this.buttonName = 'Update';
    this.findId = i_;
    console.log("find id:---=>",this.findId);
    
  }

  deleteData(i_: number,_i:number){
    this.searchData = false;
    console.log(i_);
    this.formArray.splice(i_,1);
    this.filterData.splice(_i,1);
    console.log(this.formArray);
    this.form.reset();
  }

  // isFormFIeldEmpty(){
  //   this.clientName_value = '';
  //   this.statusValue = '';
  // }

  removeItem(index: number){

    console.log(index);
    this.formArray.splice(0,index);
  }

}
// https://stackblitz.com/edit/angular-form-dynamic-add-control-so59033703?file=app%2Fapp.component.ts

// https://stackoverflow.com/questions/41727013/setting-angular-2-formarray-value-in-reactiveform

 // Search1(clientName_value: string): string[]{
  //       // const filterD = clientName_value.toLowerCase();
  //   // return this.formArray.filter(val=>val.includes(filterD));
  // }

   // if(this.formArrayLength > 0){
    //   this.showDeleteButton = true;
    // }
    // else{
    //   this.showDeleteButton = false;
    // }