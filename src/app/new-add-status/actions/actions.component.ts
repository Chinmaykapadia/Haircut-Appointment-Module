import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { StatusServiceService } from '../services/status-service.service'; 
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  
  rowId: number;
  
  submitted: boolean;
  enableSearchButton: boolean;
  enableDeleteButton: boolean;
  form: FormGroup;
  formArrayData = [];
  selectedOption: string;
  clientName_value: string;
  buttonName: string;
  selectedOptIndx: number; 
  selectedOptionId: number;
  formArrObj: Object = {};
  btnArray;
  idField = 1;

  constructor( private fb: FormBuilder, private service:StatusServiceService ) { 
   

    this.service.editDeletId$.subscribe((data)=>{
      try{
        this.rowId = data.id;

        this.enableSearchButton = false;
        this.enableDeleteButton = true;

        if(data.type == 1){
          this.buttonName = "Update";
        }
        else{
          if (this.buttonName == 'Update') {
            this.buttonName = 'Add'
            this.form.reset();
            this.enableSearchButton = true;
            this.enableDeleteButton = false;
          }else{
            this.enableSearchButton = true;
            this.enableDeleteButton = false;
          }
        }

        this.formArrObj = this.service.getDataById(this.rowId);
        this.form.patchValue({
          select_status: this.formArrObj['select_status'],
          client_name: this.formArrObj['client_name']
        });

      }catch(error){}
    });

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
    this.enableDeleteButton = false;
  }

  onSubmit(){
    
    let formObj = this.form.value;
    console.log("FormObject:====",formObj);
    
    this.selectedOptionId = this.btnArray.find(x=>x.value == this.selectedOption);
    console.log(this.selectedOptionId);

    this.formArrObj = this.service.getDataById(this.rowId);

    try{

      if(this.buttonName == "Add"){

        formObj.color = this.selectedOptionId['color'];
        formObj.id = this.idField;
        formObj.status = true;

        this.service.pushData(formObj);
        this.idField +=1;
        this.form.reset();
      }
      else{
        //Update
        console.log("Form Array Object:-",this.formArrObj);
        this.formArrObj['select_status'] = this.selectedOption;
        this.formArrObj['client_name'] = this.clientName_value;
        this.formArrObj['color'] = this.selectedOptionId['color'];

        this.form.reset();
        this.buttonName = "Add";
        this.enableSearchButton = true;
        this.enableDeleteButton = false;
      }
    }catch(error){}
  }

  deleteData() {
    
    this.service.deleteItem(this.rowId);
    console.log("FormArrayData after delete:===>",this.formArrayData);
    this.buttonName = "Add";
    this.form.reset();
    this.enableDeleteButton = false;
    this.enableSearchButton = true;
  }
 

  search(){

    this.service.searchData(this.selectedOption,this.clientName_value);
  }

}


