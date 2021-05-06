import { Component, OnInit } from "@angular/core";
import { Registration } from '../models/registration';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean = true;
    submitType: string = "Save";
    selectedRow: number;
    country: string;
    // companies: string[] = ["Company A", "Company B", "Company C", "Company D", "Company E"];
  constructor() {
      this.registrations.push(
      new Registration(
        "IA",
        { year: 2021, month: 5, day: 4 },
        "3pm",
        "Online",
        "Mumbai",
        "India"
      )
    );


    this.registrations.push(
      new Registration(
        "Submission",
        { year: 2021, month: 5, day: 4 },
        "5pm",
        "LMS",
        "Mumbai",
        "India"
      )
    );
  }

  
onNew() {
  
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.regModel);
  } else {
  
  // Update existing 
  
  // this.registrations[this.selectedRow].firstName = this.regModel.firstName;  
  // this.registrations[this.selectedRow].lastName = this.regModel.lastName;  
  // this.registrations[this.selectedRow].dob = this.regModel.dob;
  // this.registrations[this.selectedRow].doj = this.regModel.doj;  
  // this.registrations[this.selectedRow].email = this.regModel.email;  
  // this.registrations[this.selectedRow].password = this.regModel.password;  
  // this.registrations[this.selectedRow].company = this.regModel.company;
}
  
  // this.showNew = false;
  
}



onCancel() {
  // this.showNew = false;
  this.regModel.address = "";
  this.regModel.name = "";
  this.regModel.city = "";
  this.regModel.time = "";
  this.regModel.date = null;

  return false;

}

// onChangeCompany(company: string) {
//   this.regModel.company = company;
// }
  ngOnInit() {
    this.regModel = new Registration();
  }
}


