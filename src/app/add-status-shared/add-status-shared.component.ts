import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { StatusService } from '../add-status/status.service';

@Component({
  selector: 'app-add-status-shared',
  templateUrl: './add-status-shared.component.html',
  styleUrls: ['./add-status-shared.component.css']
})
export class AddStatusSharedComponent implements OnInit {

  statusArray = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];

  buttonValue = [
    { id: 1, value: "i'm Available", color: "green" },
    { id: 2, value: "i'm not Available", color: "red" },
    { id: 3, value: "i'm in Meeting", color: "#FFFF99" },
  ];
  
  buttonName: string;
  findId: number;

  showDeleteButton: boolean;
  statusColor: string;
  filterData = [];
  
  searchData: boolean;
  isFormFIeldEmpty: boolean;
  disable_Search_Button: boolean;

  // btnDisable: boolean;
  constructor(private fb: FormBuilder,private statusService: StatusService) {}

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""],
      color: [""],
      status: [""]
    });

    this.submitted = false;
    this.buttonName = "Add";

    this.searchData = false;
    
    this.disable_Search_Button = true;
  }

  onAdd() {
    this.submitted = true;
    console.log(this.selectedOption);
    console.log(this.clientName_value);
    let a = this.statusArray.findIndex((x) => x.value == this.selectedOption);
    console.log(a);

    if (this.buttonName == "Add") {
      try {
        this.searchData = false;

        this.form.value.color = this.statusArray[a].color;
        this.form.value.status = true;
        this.formArray.push(this.form.value);
        console.log(this.formArray);
        this.form.reset();
      } catch (err) {}
    } else {
      this.searchData = false;
      this.disable_Search_Button = false;
      console.log("Updated");
      this.formArray[this.findId].select_status = this.selectedOption;
      this.formArray[this.findId].client_name = this.clientName_value;
      this.formArray[this.findId].color = this.statusArray[a].color;
      this.form.reset();
      this.buttonName = "Add";
      console.log(this.formArray);
    }
  }

  onStatusBtnClick(i_: number, index: number, _i: number) {
    console.log(this.buttonValue[index]);
    console.log(this.formArray[index]);

    try{
      this.statusService.StatusClick(i_,index);
      this.formArray[i_].select_status = this.buttonValue[index].value;
      //this.formArray[i_].color.value = this.buttonValue[index].value;
      this.formArray[i_].color = this.buttonValue[index].color;
      if(this.searchData == true || this.selectedOption){
        this.statusService.StatusClick(_i,index);
        this.formArray[_i].select_status = this.buttonValue[index].value;
        this.formArray[_i].color = this.buttonValue[index].value;
      }
    }catch(error){}
    console.log("Status Color:->", this.statusColor);

    console.log(this.formArray[index]);
    console.log(this.formArray);
    // this.stats = this.formArray[index].select_status;
  }

  delete_selected_data() {
    this.searchData = false;
    this.disable_Search_Button = true;
    if (this.clientName_value != "" || this.statusValue != "") {
      this.formArray.splice(this.findId, 1);
    } else {
      console.log("hh");
    }
    this.form.reset();
    this.buttonName = "Add";
    console.log(this.formArray);

    // this.formArray.splice(i_);
  }

  update_Data(data){
    console.log(data);
    
  }

  updateData(i_: number, _i: number) {
    this.disable_Search_Button = false;
    this.form.patchValue({
      select_status: this.formArray[i_].select_status,
      client_name: this.formArray[i_].client_name,
      color: this.formArray[i_].color,
    });

    this.searchData = false;
    this.buttonName = "Update";
    this.findId = i_;
    console.log("find id:---=>", this.findId);

  }

  deleteData(i_: number, _i: number) {
    this.searchData = false;
    this.disable_Search_Button = true;
    console.log(i_);
    this.formArray.splice(i_, 1);
    console.log(this.formArray);
    this.form.reset();
  }

  search( selectedOption: string, clientName_value: string ){

    let find_index = this.formArray.findIndex(x=>x.select_status == this.selectedOption);
    console.log(find_index); 

    let changedArray = this.formArray.map((res,index)=>{
      const found_value = this.formArray.some(el=> el.select_status == this.selectedOption);
      const found_value_name = this.formArray.some(el => el.client_name == this.clientName_value);

      console.log(res);
      
      // let filter_Values = this.formArray.filter((item)=>{
      //   return item.selectedOption
      // });
      // let filter_Values_name = this.formArray.filter((result)=>{
      //   return result.client_name.toLowerCase().includes(clientName_value.toLowerCase());
      // });

      //console.log(filter_Values);

      //let indx = this.formArray.indexOf(filter_Values);

      if(this.selectedOption){

       // if(found_value){
          console.log(found_value);
          res.status = false;
          if(res.select_status == this.selectedOption){
            res.status = true;
          }
          //res[indx].status = true;
       // }
      }else if(this.clientName_value !== ""){
       // if(found_value_name){
          console.log(res);
          res.status = false;
          if(res.client_name == this.clientName_value){
            res.status = true;
          }
          //let filter_Values_name = res.filter((result)=>{
            //   if(res.filter_Values_name['client_name'] == this.clientName_value){
              //     res.status = true;
              //return result.client_name.toLowerCase().includes(clientName_value.toLowerCase());
              //   });
              //   }
            //  this.formArray = filter_Values_name;
          //res[indx].status = true;
       // }
      }

      return res;
    });
    console.log(changedArray);
    this.formArray = changedArray;
    console.log(this.formArray);
  
  }

  handleEvent($event){
    console.log($event);
    
  }

  // Search1(clientName_value: string, selectedOption: string) {
  //   try {
  //     //if(this.clientName_value !== '' && this.selectedOption == ''){

  //     this.searchData = true;
  //     if (this.clientName_value == "" && !this.selectedOption) {
  //       this.searchData = false;
  //     }
  //     const filterValue = this.formArray.filter((item) => {
  //       console.log(item);
  //       if (this.selectedOption) {
          
  //         return item.select_status
  //         .toLowerCase()
  //         .includes(selectedOption.toLowerCase());
  //       } else if (this.clientName_value !== "") {
  //         console.log("2");
  //         item.status = true;
  //         return item.client_name
  //           .toLowerCase()
  //           .includes(clientName_value.toLowerCase());
  //       }
  //     });
  //     console.log(filterValue);
  //     this.filterData = filterValue;
  //     console.log(this.filterData);
  //   } catch (error) {}
  // }

  removeItem(index: number) {
    console.log(index);
    this.formArray.splice(0, index);
  }

}




// search( selectedOption: string, clientName_value: string ){

//   let find_index = this.formArray.findIndex(x=>x.select_status == this.selectedOption);
//   console.log(find_index); 

//   //  try{

//   // let changed_Ar = this.formArray.filter((item)=>{
//   //     return item.select_status.toLowerCase().includes(selectedOption.toLowerCase())
//   //   }).map((res,index)=>{
//   //   //let ind = this.formArray.values
//   //     if(selectedOption !== this.selectedOption || clientName_value !== this.clientName_value){
//   //       res[a].status = false;
//   //       return res;
//   //     }
//   //   });
//   //  console.log(changed_Ar);
//   // }catch(error){}

  
  
//   // // let changed_Array = this.formArray.filter(item=>{
//   // //   return item.client_name.includes(clientName_value)
//   // // }).map(res=>{
//   // //   if(selectedOption !== this.selectedOption || clientName_value !== this.clientName_value){
//   // //     res.status = false;
//   // //     return res;
//   // //   }
//   // // });
//   // // console.log(changed_Array);
  
//   console.log(this.formArray[find_index].status);
  
  

//   let changedArray = this.formArray.map((res,index)=>{
//     const found_value = this.formArray.some(el=> el.select_status == this.selectedOption);
//     console.log(res);
    
//     let filter_Values = this.formArray.filter((item)=>{
//       return item.select_status.includes(selectedOption)
//     });

//     console.log(filter_Values);

//     let indx = this.formArray.indexOf(filter_Values);

    
//     if(found_value){
//       console.log(found_value);
//       res.status = false;
//       if(res.select_status == this.selectedOption){
//         res.status = true;
//       }
//       //res[indx].status = true;
//     }

//     //console.log(res.status);      
//     return res;
//   });
//   console.log(changedArray);
//   this.formArray = changedArray;
//   console.log(this.formArray);
  
  

//   // if(selectedOption !== this.selectedOption || clientName_value !== this.clientName_value){
//   //   this.formArray = this.formArray.map(res=>{
//   //       res.status = false;
//   //     });
//   //     console.log(this.formArray);
//   // }
// }