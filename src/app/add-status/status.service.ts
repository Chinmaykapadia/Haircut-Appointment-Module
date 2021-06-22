import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  formArray = [];

  buttonValue = [
    { value: "i'm Available", color: "green" },
    { value: "i'm not Available", color: "red" },
    { value: "i'm in Meeting", color: "#FFFF99" },
  ];

  constructor() { }
  StatusClick(valInd: number, btnInd: number){
    this.formArray[valInd].select_status = this.buttonValue[btnInd].value;
    this.formArray[valInd].color = this.buttonValue[btnInd].color;
  }
}
