import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class Registration {
    constructor(
      
      public name: string = "",
      public date: NgbDateStruct = null,
      public time: string = "",
      public address: string = "",
      public city: string = "",
      public country: string = ""
    ) {}
  }

