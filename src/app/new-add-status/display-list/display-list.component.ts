import { Component, OnInit } from '@angular/core';
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
  data: any;
  buttonValue = [
    { id: 1, value: "i'm Available", color: "#00A36C" },
    { id: 2, value: "i'm not Available", color: "#E34234" },
    { id: 3, value: "i'm in Meeting", color: "#FFD700" },
  ];

  constructor(private service: StatusServiceService) {   
    
  }

  ngOnInit() {
    this.submitted = true;
     this.data = this.service.getData();
    console.log("OnInit display Data:===",this.data);
    
  }

  update_Data(i_:number,type: string){
    
    //this.service.changeButtonName("Update");
    this.service.getEditId(i_,type);
    //this.service.getEditIdd(i_,type);
    //this.service.ptchVal(i_);
    
  }
  
  deleteData(i_: number){
    this.data.splice(i_, 1);
    console.log("Data after delete:===>",this.data);
    this.service.sendForm();
  }
  
  onStatusBtnClick(i_: number, index: number) {
    
    try{
      
      this.data[i_].select_status = this.buttonValue[index].value;
      this.data[i_].color = this.buttonValue[index].color;
      
    }catch(error){}
    
  }
}






































// ngOnChanges() {
  //   // this.service.search_D$.subscribe((data)=>{
  //   //   this.data = data;
  //   //   console.log(this.data);
  //   // });
  // }
  

  // this.service.search_D$.subscribe((data)=>{
    //   this.data = data;
    // });

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




// frmArrData = [];
// this.formGrp.patchValue({
//         select_status: this.frmArrData[i_].select_status,
//         client_name: this.frmArrData[i_].client_name,
//       //  color: this.frmArrData[i_].color,
// });
