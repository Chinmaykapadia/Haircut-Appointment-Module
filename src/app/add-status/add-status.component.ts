import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
      return items.filter(item => {
              let notMatchingField = Object.keys(filter)
                                           .find(key => item[key] !== filter[key]);

              return !notMatchingField; // true if matches all fields
      });
  }
}
@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {

  status = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  status1 = [ { value: "i'm Available", color: "green" }, 
              { value: "i'm not Available", color: "red" },
              { value: "i'm in Meeting", color: "#FFFF99" }
            ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];
  //buttonValue = [ "i'm Available" , "i'm not Available" , "i'm in Meeting" ];
  buttonValue = [ { value: "i'm Available", color: "green" }, 
                  { value: "i'm not Available", color: "red" },
                  { value: "i'm in Meeting", color: "#FFFF99" }
                ];
  buttonName: string;
  findId: number;
  formArrayLength: number;
  showDeleteButton: boolean;
  statusColor: string;
  filterData = [];
  filterData1 = [];
  searchData: boolean;
  isFormFIeldEmpty: boolean;
  disable_Search_Button: boolean;
  searchData1: boolean;

 // btnDisable: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [''],
      client_name: ['', [ Validators.required ] ],
      color:['']
    });
    this.submitted = false;
    this.buttonName = 'Add';
    this.formArrayLength = this.formArray.length;
    console.log(this.formArrayLength);
    // this.filterData = this.form.get('client_name').valueChanges.pipe(startWith(''),map(value => this.Search(value)));
    this.searchData = false;
    this.searchData1 = false;
    this.disable_Search_Button = true;
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
      try{

        this.searchData = false;
        this.searchData1 = false;
        this.form.value.color = this.status1[a].color;
        this.formArray.push(this.form.value);  
        console.log(this.formArray);
        this.form.reset();
      }
      catch(err){
      }
    }
    else{
      this.searchData = false;
      this.disable_Search_Button = true;
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
    this.disable_Search_Button = true;
    if(this.clientName_value != '' || this.statusValue != ''){
      this.formArray.splice(this.findId,1);
    }
    else{
      console.log("hh");
    }
    this.form.reset();
    this.buttonName = 'Add';
    console.log(this.formArray);
    
   // this.formArray.splice(i_);
  }

  Search(clientName_value: string, selectedOption: string){
    // let findV = this.formArray.find(x => x.client_name == this.clientName_value);
    // console.log(findV);
    try{
      //if(this.clientName_value !== '' && this.selectedOption == ''){
 
        this.searchData = true;
        if(this.clientName_value == ''){
          this.searchData = false;
        }
        const filterValue = this.formArray.filter((item)=>{ 
          console.log(item);
          return (item.client_name.toLowerCase().includes(clientName_value.toLowerCase()));
        });
        console.log(filterValue);
        this.filterData = filterValue;
        console.log(this.filterData);

      //}
       if(this.selectedOption !== '' && this.clientName_value == ''){

        //if(this.selectedOption !== '' && this.clientName_value == ''){
          this.searchData = false;
          this.searchData1 = true;
        //}
        const filterValue1 = this.formArray.filter(item=>{
          return item.select_status.toLowerCase().includes(selectedOption.toLowerCase());
        });
        this.filterData1 = filterValue1;
        console.log("Filter Data:-->",this.filterData1);
      }

      // if(this.selectedOption == '' && this.clientName_value == '')
      // {
      //   this.searchData = false;
      //   this.searchData1 = false;
      // }
        
    }
    catch(error){}
    
  }

  Search1(){
    try{
      // if(this.selectedOption && this.clientName_value !== ''){
      //   const filtrVal = this.formArray.filter((item)=>{
      //     return item.select_status.toLowerCase().includes(selectedOption)
      //   });
      //   this.filterData = filtrVal;
      // }
      // else if(this.clientName_value !== '' && !this.selectedOption){
      //   const filtrVal1 = this.formArray.filter((item)=>{
      //     return item.client_name.toLowerCase().includes(clientName_value.toLowerCase());
      //   });
      //   this.filterData1 = filtrVal1;
      // }
      // const filtrVal = this.formArray.filter((item)=>{
      //   Object.values(item).forEach((res)=>{
      //     if(item.res == this.clientName_value || item.res == this.selectedOption){
      //       console.log(res);
            
      //       return res;
      //     }

      //   });
      //   console.log(item.res);
      //   return item.res;
        
      // });
      // this.filterData = filtrVal;
      // console.log(this.filterData);
      
    }catch(error){

    }
  }

  updateData(i_: number,_i:number){
    this.disable_Search_Button = false;
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
    this.disable_Search_Button = true;
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


    // Search1(clientName_value: string){
    //   // let findV = this.formArray.find(x => x.client_name == this.clientName_value);
    //   // console.log(findV);
    //   this.searchData = true;
    //   this.formArray.forEach((val)=>{
    //     console.log(val);
    //     console.log(val.client_name);
    //     const filterValue = this.formArray.filter((item)=>{    
    //       return item.client_name.toLowerCase().includes(clientName_value.toLowerCase());
    //     });
    //     this.filterData = filterValue;
    //     // Object.values(val).forEach((res)=>{
    //     //   console.log(res);
  
    //     // });
        
    //   });
    //   // const filterValue1 = this.formArray.filter((item)=>{    
    //   //   item.forEach(element => {
    //   //     console.log("Clients name:-->",element.client_name);
    //   //   });
    //   //   return item.client_name.toLowerCase().includes(clientName_value.toLowerCase());
    //   // });
      
    // }



    // Search(clientName_value: string, selectedOption: string){
    //   // let findV = this.formArray.find(x => x.client_name == this.clientName_value);
    //   // console.log(findV);
    //   try{
    //     if(this.clientName_value !== '' && this.selectedOption == ''){
  
        
    //     this.searchData = true;
    //     if(this.clientName_value == ''){
    //       this.searchData = false;
    //     }
    //     const filterValue = this.formArray.filter((item)=>{ 
    //       console.log(item);
    //       return (item.client_name.toLowerCase().includes(clientName_value.toLowerCase()));
    //     });
    //     console.log(filterValue);
    //     this.filterData = filterValue;
    //     console.log(this.filterData);
    //       // for(let i = 0; i < this.formArray.length; i++){
    //       //   var itemFound: boolean;
    //       //   if(item[this.formArray[i]].toLowerCase().includes(this.formArray[i].value.toLowerCase())){
    //       //     itemFound = true;
    //       //   }
    //       // }
    //       // return itemFound;
    //       //let statVal = item
    //       // Object.values(item).forEach((res)=>{
    //       //   console.log(res);
    //       //   return 
    //       // })
         
    //       //if(this.clientName_value !== ''){
    //         //return (item.client_name.toLowerCase().includes(clientName_value.toLowerCase()));
    //       //}
    //       // else{
    //       //   return (item.select_status.toLowerCase().includes(selectedOption.toLowerCase()));
    //       // }
    //       // else if(this.selectedOption !== ''){
    //       //   return (item.select_status.toLowerCase().includes(selectedOption.toLowerCase()));
    //       // }
    //       //return (item.client_name.toLowerCase().includes(clientName_value.toLowerCase()) || item.select_status.toLowerCase().includes(selectedOption.toLowerCase()));
    //       // if(selectedOption !== ''){
    //       //   this.form.reset();
          
          
    //       //return (item.select_status.toLowerCase().includes(selectedOption.toLowerCase()));
    //       //}
    //       // else{
    //       //   return item.client_name.toLowerCase().includes(clientName_value.toLowerCase());
    //       // }
    //       // const filterValue2 = this.formArray.filter(item=>{
    //       //   return item.select_status.toLowerCase().includes(selectedOption.toLowerCase())
    //       // })
    //       //this.filterData = this.clientName_value !== null ? filterValue : filterValue2;
    //     }
    //     else if(this.selectedOption !== '' && this.clientName_value == ''){
  
    //       //if(this.selectedOption !== '' && this.clientName_value == ''){
    //         this.searchData = false;
    //         this.searchData1 = true;
    //       //}
    //       const filterValue1 = this.formArray.filter(item=>{
    //         return item.select_status.toLowerCase().includes(selectedOption.toLowerCase());
    //       });
    //       this.filterData1 = filterValue1;
    //       console.log("Filter Data:-->",this.filterData1);
    //     }
          
    //   }
    //   catch(error){}
      
    // }