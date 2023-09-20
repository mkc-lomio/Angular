import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CountryCodes } from "../shared/enum/country-codes";
import {
  beAValidPasswordValidator,
  beAValidPhoneNumber,
  passwordMatch,
} from "../shared/helpers/validators/customer-validator";
import { getCountryPhoneNumberPattern } from "../shared/helpers/functions/country-phone-pattern";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactiveforms",
  templateUrl: "./reactiveforms.component.html",
  styleUrls: ["./reactiveforms.component.scss"],
})
export class ReactiveformsComponent implements OnInit {
  profileForm = new FormGroup(
    {
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      phoneNumber: new FormControl("", [
        Validators.required,
        beAValidPhoneNumber(
          getCountryPhoneNumberPattern(CountryCodes.Philippines)
        ),
      ]),
      password: new FormControl("", [
        Validators.required,
        beAValidPasswordValidator(),
      ]),
      confirmPassword: new FormControl("", [Validators.required]),
    },
    passwordMatch("password", "confirmPassword")
  );

  passwordHide = true;

  athleteForm: any;

  constructor(private athleteFB: FormBuilder) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.initForm();
  }

  initForm(): void {
    this.athleteForm = this.athleteFB.group({
      fullName: ["", [Validators.required]],
    });
  }

  submitForm(form: any) {
    console.log(form);
  }

  checkError(controlName: string, errorName: string, formType: string): any {
    if (formType == "profileForm") {
      return this.profileForm.controls[controlName].hasError(errorName);
    }
    if (formType == "athleteForm") {
      return this.athleteForm.controls[controlName].hasError(errorName);
    }
    return null;
  }

  /** FOR REMOVING AND SETTING UP AGAIN THE VALIDATIONS 
      this.profileForm.controls["phoneNumber"].clearValidators();
      this.profileForm.controls["phoneNumber"].updateValueAndValidity();
      this.profileForm.controls["phoneNumber"].setValidators([Validators.required]);
      this.profileForm.controls['phoneNumber'].reset();
      this.profileForm.controls['phoneNumber'].disable();
   */
}
