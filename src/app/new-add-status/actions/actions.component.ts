import { Component, OnInit, OnChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service'; 
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  
  rowId: number;

  statusArray = [
    { id: 1, value: "i'm Available", color: "#00A36C" },
    { id: 2, value: "i'm not Available", color: "#E34234" },
    { id: 3, value: "i'm in Meeting", color: "#FFD700" },
  ];
  submitted: boolean;
  enable_Search_Button: boolean;
  form: FormGroup;
  formArrayData = [];
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  selectedOptIndx: number; 
  

  constructor(private fb: FormBuilder, private service:StatusServiceService) { 
    this.service.name$.subscribe((data)=>{
      this.buttonName = data;
      this.enable_Search_Button = false;
    });

    this.service.editId$.subscribe((indx)=>{
      this.rowId = indx;
      console.log("Check Row Id:--",this.rowId);
      console.log("Data at rowId:-=-=>",this.formArrayData[this.rowId].select_status);
      
    });

    this.service.edit_Obj$.subscribe((res)=>{
       this.form.patchValue({
         select_status: this.formArrayData[this.rowId].select_status,
         client_name: this.formArrayData[this.rowId].client_name
       });
    });

    this.service.form$.subscribe(()=>{
      this.buttonName = "Add";
      this.enable_Search_Button = true;
      this.form.reset();
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [""],
      select_status: [""],
      client_name: [""],
      color: [""],
      status: [""]
    });
    
    this.submitted = false;
    this.buttonName = "Add";
    
    this.enable_Search_Button = true;
    
    this.formArrayData = this.service.getData();
    console.log(this.formArrayData);
  }

  search(){

    let searched_Array = this.formArrayData.map((res)=>{

      console.log(res);

      if(this.selectedOption){

          res.status = false;
          if(res.select_status == this.selectedOption){
            res.status = true;
          }
      }
      else if(this.clientName_value !== ""){
       
          console.log(res);
          res.status = false;
          
          if(res.client_name.includes(this.clientName_value)){
            res.status = true;
            console.log(this.formArrayData);
            
          }
      }
      else{
        console.log("before:",this.formArrayData);
        res.status = true;
        console.log("after:",this.formArrayData);
        
      }
      
      return res;
    });
    console.log(searched_Array);
    this.formArrayData = searched_Array;
    console.log(this.formArrayData);
    
    this.service.disp_searchData(this.formArrayData);

    console.log(this.service.disp_searchData(this.formArrayData));
    
  }

  onSubmit(){
    console.log(this.selectedOptIndx);
    let formObj = this.form.value;
    console.log("FormObject:====",formObj);
    
    this.selectedOptIndx = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    console.log(this.form);
    try{

      if(this.buttonName == "Add"){

        formObj.id = this.formArrayData.length + 1;
        formObj.color = this.statusArray[this.selectedOptIndx].color;
        formObj.status = true;

        this.service.pushData(formObj);
        this.form.reset();
      }
      else{
        
        //this.formArrayData[this.rowId] = formObj[this.rowId];

        this.formArrayData[this.rowId].select_status = this.selectedOption;
        this.formArrayData[this.rowId].client_name = this.clientName_value;
        this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
        this.form.reset();
        this.buttonName = "Add";
        this.enable_Search_Button = true;
      }
    }catch(error){}
  }

  deleteData(i_: number, _i: number) {
    
    this.enable_Search_Button = true;
    console.log(i_);
    this.formArrayData.splice(i_, 1);
    console.log(this.formArrayData);
    this.buttonName = "Add";
    this.form.reset();
  }
 
  clear(){
    this.form.reset();
  }
}












































//this.service.disp_searchData();

// let clint_name = this.formArrayData.filter((data)=>{
          //   return data.client_name.includes(this.clientName_value);
          // });
          // console.log(clint_name);
          // this.formArrayData = clint_name;
          // if(clint_name == ){
          //   res.status = true;
          // }

// this.form.value.id = this.formArrayData.length + 1;
        // this.form.value.color = this.statusArray[this.selectedOptIndx].color;
        // this.form.value.status = true;

// console.log(this.service.getData());
    // this.service.searchValues(this.selectedOption,this.clientName_value);
    // console.log(this.selectedOption);

// patchinValues: any;
  // array_Object: Object;

  // statusOption: string;
  // nameOfClient: string;

// this.service.statusOption$.subscribe((res)=>{
    //   this.formArrayData.filter((data)=>{
    //     return data.select_status.includes(this.selectedOption);
    //   });
    //   return res;
    // });


// For patchValue
// ngOnChanges(){
  //   this.patchinValues = this.service.ptchVal(this.rowId);
  //   console.log("On Changes",this.patchinValues);
  //   this.form.patchValue({
     
  //    select_status: this.patchinValues.select_status,
  //     client_name: this.patchinValues.client_name
  //   });
  // }

// btnChanged_Name($event){
//   this.buttonName = $event
// }


// ngAfterViewChecked(){
  //   this.form.patchValue({
  //     select_status: this.patchinValues.select_status,
  //     client_name: this.patchinValues.client_name
  //   });
    
  // }


// this.form.patchValue({
    //   select_status:this.patchinValues.select_status,
    //   client_name:this.patchinValues.client_name
    // });

    // this.service.ptchVal(this.rowId).patchValue({
    //   select_status:this.formArrayData[this.rowId].selectedOption,
    //   client_name:this.formArrayData[this.rowId].clientName_value
    // });


    // this.service.form$.subscribe((res)=>{
    //   this.form = res;
    //  // console.log(this.form);
      
    // });




 // ngOnChanges() {
  //   this.formArrayData.push(this.form.value);
  //   console.log(this.formArrayData);
  //   this.form.reset();
  // }
  
  // emittingValues(){
  //   this.frmArrLen.emit(this.formArrayData.length);
  // }
  // patchVal($event){
  //   this.form = $event;
  // }
  // changeBtnVal($event: string){
  //   this.btnName = "Update";
  //   this.btnnName.emit(this.btnName);
  // }
  // getRowId($event){
  //   this.rowId = $event;
  //   console.log(this.rowId);
  //   this.rowIndex.emit(this.rowId);
  // }



// update(){
//   // this.formArrayData[this.rowId].select_status = this.selectedOption;
//   //   this.formArrayData[this.rowId].client_name = this.clientName_value;
//   // //  this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
//   //   this.form.reset();
// }
