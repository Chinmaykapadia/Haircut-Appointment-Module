import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
@Component({
  selector: "app-add-status",
  templateUrl: "./add-status.component.html",
  styleUrls: ["./add-status.component.css"],
})
export class AddStatusComponent implements OnInit {
  status = ["i'm Available", "i'm not Available", "i'm in Meeting"];
  status1 = [
    { value: "i'm Available", color: "green" },
    { value: "i'm not Available", color: "red" },
    { value: "i'm in Meeting", color: "#FFFF99" },
  ];
  form: FormGroup;
  submitted: boolean;
  statusValue: string;
  clientName_value: string;
  selectedOption: any;
  formArray = [];

  buttonValue = [
    { value: "i'm Available", color: "green" },
    { value: "i'm not Available", color: "red" },
    { value: "i'm in Meeting", color: "#FFFF99" },
  ];
  buttonName: string;
  findId: number;

  showDeleteButton: boolean;
  statusColor: string;
  filterData = [];
  filterData1 = [];
  searchData: boolean;
  isFormFIeldEmpty: boolean;
  disable_Search_Button: boolean;
  searchData1: boolean;

  // btnDisable: boolean;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      select_status: [""],
      client_name: [""],
      color: [""],
    });

    this.submitted = false;
    this.buttonName = "Add";

    this.searchData = false;
    this.searchData1 = false;
    this.disable_Search_Button = true;
  }

  onAdd() {
    this.submitted = true;
    console.log(this.selectedOption);
    console.log(this.clientName_value);
    let a = this.status1.findIndex((x) => x.value == this.selectedOption);
    console.log(a);

    if (this.buttonName == "Add") {
      try {
        this.searchData = false;
        this.searchData1 = false;
        this.form.value.color = this.status1[a].color;
        this.formArray.push(this.form.value);
        console.log(this.formArray);
        this.form.reset();
      } catch (err) {}
    } else {
      this.searchData = false;
      this.disable_Search_Button = true;
      console.log("Updated");
      this.formArray[this.findId].select_status = this.selectedOption;
      this.formArray[this.findId].client_name = this.clientName_value;
      this.formArray[this.findId].color = this.status1[a].color;
      this.form.reset();
      this.buttonName = "Add";
      console.log(this.formArray);
    }
  }

  onStatusBtnClick(i_: number, index: number, _i: number) {
    console.log(this.buttonValue[index]);
    console.log(this.formArray[index]);

    this.formArray[i_].select_status = this.buttonValue[index].value;
    //this.formArray[i_].color.value = this.buttonValue[index].value;
    this.formArray[i_].color = this.buttonValue[index].color;
    console.log("Status Color:->", this.statusColor);

    console.log(this.formArray[index]);
    console.log(this.formArray);
    // this.stats = this.formArray[index].select_status;
  }

  Delete() {
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

    //this.filterData.splice(0,_i);
    // this.addToedit = true;
  }

  deleteData(i_: number, _i: number) {
    this.searchData = false;
    this.disable_Search_Button = true;
    console.log(i_);
    this.formArray.splice(i_, 1);
    // this.filterData.splice(_i,1);
    console.log(this.formArray);
    this.form.reset();
  }

  Search1(clientName_value: string, selectedOption: string) {
    try {
      //if(this.clientName_value !== '' && this.selectedOption == ''){

      this.searchData = true;
      if (this.clientName_value == "" && !this.selectedOption) {
        this.searchData = false;
      }
      const filterValue = this.formArray.filter((item) => {
        console.log(item);
        if (this.selectedOption) {
          console.log("1");
          return item.select_status
            .toLowerCase()
            .includes(selectedOption.toLowerCase());
        } else if (this.clientName_value !== "") {
          console.log("2");
          return item.client_name
            .toLowerCase()
            .includes(clientName_value.toLowerCase());
        }
      });
      console.log(filterValue);
      this.filterData = filterValue;
      console.log(this.filterData);
    } catch (error) {}
  }

  removeItem(index: number) {
    console.log(index);
    this.formArray.splice(0, index);
  }
}

// isFormFIeldEmpty(){
//   this.clientName_value = '';
//   this.statusValue = '';
// }

// Search(clientName_value: string, selectedOption: string){
//   // let findV = this.formArray.find(x => x.client_name == this.clientName_value);
//   // console.log(findV);
//   try{
//     //if(this.clientName_value !== '' && this.selectedOption == ''){

//       this.searchData = true;
//       if(this.clientName_value == ''){
//         this.searchData = false;
//       }
//       const filterValue = this.formArray.filter((item)=>{
//         console.log(item);
//         return (item.client_name.toLowerCase().includes(clientName_value.toLowerCase()));
//       });
//       console.log(filterValue);
//       this.filterData = filterValue;
//       console.log(this.filterData);

//     //}
//      if(this.selectedOption !== '' && this.clientName_value == ''){

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

//     // if(this.selectedOption == '' && this.clientName_value == '')
//     // {
//     //   this.searchData = false;
//     //   this.searchData1 = false;
//     // }

//   }
//   catch(error){}

// }
