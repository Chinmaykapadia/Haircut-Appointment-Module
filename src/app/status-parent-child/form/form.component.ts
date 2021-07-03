import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges,OnInit {

  @Input() statusArray = [];
  @Input() rowId: number;
  @Input() name: string;
  @Output() arrayData: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() formGrp = new EventEmitter();

  
  submitted: boolean;
  enableSearchButton: boolean;
  form: FormGroup;
  formArrayData = [];
  selectedOption: string;
  clientName_value: string;
  buttonName: string;

  selectedOptionId: number;
  formArrData: Object = {};
  
  constructor(private fb: FormBuilder) { }

  ngOnChanges(){
    this.buttonName = this.name;
    //this.buttonName = "Add";
  }

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""]
    });
    this.buttonName = "Add"
    this.enableSearchButton = true;
  }

  onSubmit(){

    let formObj = this.form.value;
    console.log("FormObject:====",formObj);

    this.selectedOptionId = this.statusArray.find(x=>x.value == this.selectedOption);
    console.log(this.selectedOptionId);
    try{

      if(this.buttonName == "Add"){
        formObj.id = this.formArrayData.length + 1;
        formObj.color = this.selectedOptionId['color'];
        formObj.status = true;
  
        this.formArrayData.push(formObj);
        this.form.reset();
        console.log(this.formArrayData);
        
      }else{
        const findId = this.formArrayData.find(x=>x.id == this.rowId);
        // this.formArrayData[this.rowId].select_status = this.selectedOption;
        // this.formArrayData[this.rowId].client_name = this.clientName_value;
        findId.select_status = this.selectedOption;
        findId.client_name = this.clientName_value;
        this.buttonName = "Add";
        this.form.reset();
      }
    }catch(error){}
    this.arrayData.emit(this.formArrayData);
    this.formGrp.emit(this.form);
  }

  deleteData(){
    const findId = this.formArrayData.find(x=>x.id == this.rowId);
    this.formArrayData.splice(findId,1);
    this.form.reset();
    this.buttonName = "Add";
    console.log(this.formArrayData);
  }

  search(){
    let searchedArray = this.formArrayData.map((res)=>{

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
  }
}