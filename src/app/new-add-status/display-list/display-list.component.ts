import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StatusServiceService } from '../../add-status-shared/services/status-service.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  
  submitted: boolean;
  frmArrData = [];
  data: any;

  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];

  constructor(private service: StatusServiceService) {   

  }

  ngOnInit() {
    this.submitted = true;
    this.data = this.service.getData();
    console.log(this.data);
    
  }

  update_Data(i_:number){
    
    this.service.changeButtonName("Update");
    this.service.get_Edit_id(i_);
    this.service.ptchVal(i_);

   
  }
  
  deleteData(i_: number){
    this.data.splice(i_, 1);
    console.log(this.data);
  }
  
  onStatusBtnClick(i_: number, index: number) {
    
    try{
      
      this.data[i_].select_status = this.buttonValue[index].value;
      this.data[i_].color = this.buttonValue[index].color;
      
    }catch(error){}
    
  }
}

























// statusOption: string;
  // nameOfClient: string;

 //this.service.searchValues(this.statusOption,this.nameOfClient);

// this.service.statusOption$.subscribe((res)=>{
    //   // let flter_arr = this.data.filter((data)=>{
    //   //   return data.select_status.includes(this.data);
    //   // });
    //   console.log("status-options:",res);
        
    // });

    //  this.service.statusOption$.subscribe((res)=>{
    //   console.log(this.statusOption);
    //   console.log(this.nameOfClient);
      
    // //   let changedArray = this.data.map((val)=>{
    // //     val.status = false;
    // //     if(val.select_status == this.statusOption){
    // //       val.status = true;
    // //     }
    // //   })
    // //   this.data = changedArray;
    //  });



// ngOnChanges() {
  //   // this.service.statusOption$.subscribe((res)=>{
  //   //   // let flter_arr = this.data.filter((data)=>{
  //   //   //   return data.select_status.includes(res);
  //   //   // });
  //   //   console.log("status-options:",res);

  //   //   // let changedArray = this.data.map((val)=>{
  //   //   //   console.log("val:-->",val);
        
  //   //   //   val.status = false;
  //   //   //   if(val.select_status == res){
  //   //   //     val.status = true;
  //   //   //   }
  //   //   // });
  //   //   // this.data = changedArray;  
  //   //   // console.log("this.data:-->>>",this.data);
      
  //   // });
    
  // }

//@Output() patchValue = new EventEmitter();


// disp(){
  //   this.da = this.service.getData();
  //   console.log(this.da);
  // }
  
  //this.data_In_Arr.emit(this.frmAryData);
   //this.service.getData();





// this.formGrp.patchValue({
//         select_status: this.frmArrData[i_].select_status,
//         client_name: this.frmArrData[i_].client_name,
//       //  color: this.frmArrData[i_].color,
// });
