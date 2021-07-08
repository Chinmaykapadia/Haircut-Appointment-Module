import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CommonServiceService } from '../../status-parent-child/common-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges,OnInit {

  statusArray = [];
  
  @Input() formObject: any;
  @Input() actionType: number;
  @Output() objectData: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  submitted: boolean;
  enableSearchButton: boolean;
  form: FormGroup;
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  enableDeletButton: boolean;
  selectedOptionObj: number;
  
  constructor(private fb: FormBuilder, private service: CommonServiceService ) { }

  ngOnChanges(){
    if(this.actionType == 1){
      this.form.patchValue({
        select_status: this.formObject['select_status'],
        client_name: this.formObject['client_name']
      });
      this.buttonName = "Update";
      this.enableDeletButton = true;
      this.enableSearchButton = false;
    }else{
      this.buttonName = "Add";
      this.enableDeletButton = false;
      this.enableSearchButton = true;
    }
  
  }

  ngOnInit() {
    this.statusArray = this.service.statusArray;
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""]
    });
    this.buttonName = "Add"
    this.enableSearchButton = true;
    this.enableDeletButton = false;
  }

  onSubmit(){

    let formObj = this.form.value;
    console.log("FormObject:====",formObj);

    this.selectedOptionObj = this.statusArray.find(x=>x.value == this.selectedOption);
    console.log("Selected Option Object:-",this.selectedOptionObj);

    
    try{
      
      if(this.buttonName == "Add"){

        let emitData: any = { object: formObj, action: "Add" };
        
        formObj.color = this.selectedOptionObj['color'];
        formObj.status = false;
  
        this.objectData.emit(emitData);
        this.form.reset();
        
      }
      else{
        
        let dataObjectId: number = this.formObject.id;
        console.log(dataObjectId);
        
        let emitData:any = { object: formObj, dataId: dataObjectId, action: "Update" };
        formObj.color = this.selectedOptionObj['color'];
        formObj.status = false;
        this.objectData.emit(emitData);
      
        this.buttonName = "Add";
        this.enableDeletButton = false;
        this.enableSearchButton = true;
        this.form.reset();
      }
    }catch(error){}
    
  }

  deleteData(){
  
    let emitData: any = { dataId: this.formObject.id, action: "Delete" };
    this.objectData.emit(emitData);
    
    this.form.reset();
    this.buttonName = "Add";
    this.enableDeletButton = false;
    this.enableSearchButton = true;

  }

  search(){
    
    let emitData: any = { action: "Search", status: this.selectedOption, name: this.clientName_value };
    this.objectData.emit(emitData);

  }
}



