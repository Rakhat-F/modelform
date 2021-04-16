import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;

  submitted = false;

  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  onSubmit() {
    this.submitted = true;
    this.user.firstname = this.signupForm.value.userData.firstname;
    this.user.lastname = this.signupForm.value.userData.lastname;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.signupForm.reset();
  }
}
