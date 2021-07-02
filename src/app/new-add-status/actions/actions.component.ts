import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service'; 
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  
  rowId: number;
  
  submitted: boolean;
  enableSearchButton: boolean;
  form: FormGroup;
  formArrayData = [];
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  selectedOptIndx: number; 
  selectedOptionId: number;
  formArrData: Object = {};
  len: number;
  btnArray;

  constructor(private fb: FormBuilder, private service:StatusServiceService) { 
    // this.service.name$.subscribe((data)=>{
    //   this.buttonName = data;
    //   this.enable_Search_Button = false;
    // });

    this.service.editId$.subscribe((indx)=>{
      
      this.rowId = indx.id;
      console.log("Check Row Id:--",this.rowId);
      
      console.log(this.formArrayData[this.rowId]);
      
      this.enableSearchButton = false;

      if (indx.type == 1){
       this.buttonName = 'Update';
       // indx.type = 2;
      }
       else {
        if (this.buttonName == 'Update') {
          this.buttonName = 'Add'
          this.form.reset();
        }
       }
 
      
     // this.formArrData = this.service.getDataa(this.rowId);
     this.formArrData = this.service.getDataaaaaaa(this.rowId);
      this.form.patchValue({
        //  select_status: this.formArrayData[this.rowId].select_status,
        //  client_name: this.formArrayData[this.rowId].client_name
        select_status: this.formArrData['select_status'],
        client_name: this.formArrData['client_name']
      });


    });


    // this.service.edit_Obj$.subscribe((res)=>{
    //   this.formArrayData = this.service.getData();
    //    this.form.patchValue({
    //      select_status: this.formArrayData[this.rowId].select_status,
    //      client_name: this.formArrayData[this.rowId].client_name
    //    });
    // });
    // this.service.editIdd$.subscribe((ind)=>{
    //   this.rowId = ind.id;
    //   console.log(this.rowId);
    // });

    // this.service.form$.subscribe(()=>{
    //   this.buttonName = "Add";
    //   this.enable_Search_Button = true;
    //   this.form.reset();
    // });
  }

  ngOnInit() {
    this.form = this.fb.group({    
      select_status: [""],
      client_name: [""],
    });
    this.btnArray = this.service.buttonValue;
    this.submitted = false;
    this.buttonName = "Add";
    
    this.enableSearchButton = true;
   
    // this.formArrayData = this.service.getData();
    //console.log("OnInit actions Data:--",this.formArrayData);
  }

  onSubmit(){
    console.log(this.selectedOptIndx);
    
    let formObj = this.form.value;
    console.log("FormObject:====",formObj);
    
    this.selectedOptIndx = this.btnArray.findIndex((x) => x.value == this.selectedOption);
    
    this.selectedOptionId = this.btnArray.find(x=>x.value == this.selectedOption);
    console.log(this.selectedOptionId);
    
    console.log(this.form);

    //this.formArrData = this.service.getDataa(this.rowId);
    this.formArrData = this.service.getDataaaaaaa(this.rowId);
    this.len = this.service.getData().length;
    

    try{

      if(this.buttonName == "Add"){

        //this.len ++;
        formObj.color = this.selectedOptionId['color'];
        formObj.id = this.len + 1;
        formObj.status = true;

        this.service.pushData(formObj);
        this.form.reset();
        this.len ++;
      }
      else{
        //Update
        console.log("Form Array Object:-",this.formArrData);
        this.formArrData['select_status'] = this.selectedOption;
        this.formArrData['client_name'] = this.clientName_value;
        this.formArrData['color'] = this.selectedOptionId['color'];

        // this.formArrayData[this.rowId].select_status = this.selectedOption;
        // this.formArrayData[this.rowId].client_name = this.clientName_value;
        // this.formArrayData[this.rowId].color = this.statusArray[this.selectedOptIndx].color;
        this.form.reset();
        this.buttonName = "Add";
        this.enableSearchButton = true;
       // this.service.delBtn();
      }
    }catch(error){}
  }


  search(){

    let searchedArray = this.service.getData().map((res)=>{

      console.log("Mapped result:--",res);

      if(this.selectedOption){

          res.status = false;
          if(res.select_status == this.selectedOption){
            res.status = true;
          }
      }
      else if(this.clientName_value !== ""){
       
          res.status = false;
          if(res.client_name.includes(this.clientName_value)){
            res.status = true;
            
          }
      }
      else{

        res.status = true;
        
      }
      
      return res;
    });
    console.log("Searched Array (Mapped arr:):=->",searchedArray);
    this.formArrayData = searchedArray;
    console.log("FormArrayData:------",this.formArrayData);
    
   // this.service.disp_searchData(this.formArrayData);
    
  }

  
  deleteData() {
    
    this.enableSearchButton = true;
    //delete this.form_Arr_Data;
    console.log(this.rowId);
    
    this.service.deleteItem(this.rowId);
    
    //this.service.getData().splice(this.rowId,1);
    this.len --;
    //this.formArrayData.splice(this.rowId, 1);
    console.log("FormArrayData after delete:===>",this.formArrayData);
    this.buttonName = "Add";
    this.form.reset();
  }
 
}























































// statusArray = [
  //   { id: 1, value: "i'm Available", color: "#00A36C" },
  //   { id: 2, value: "i'm not Available", color: "#E34234" },
  //   { id: 3, value: "i'm in Meeting", color: "#FFD700" },
  // ];



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
