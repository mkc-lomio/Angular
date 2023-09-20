import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CountryCodes } from "../shared/enum/country-codes";
import {
  beAValidPasswordValidator,
  beAValidPhoneNumber,
  confirmPasswordValidator,
} from "../shared/helpers/validators/customer-validator";
import { getCountryPhoneNumberPattern } from "../shared/helpers/functions/country-phone-pattern";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactiveforms",
  templateUrl: "./reactiveforms.component.html",
  styleUrls: ["./reactiveforms.component.scss"],
})
export class ReactiveformsComponent implements OnInit {
  cities = ["Mohali", "Chandigarh", "Ludhiana", "Amritsar"];
  zip_codes = ["282001", "456123", "123456", "140412"];
  passwordHide = true;
  athleteForm: any;
  fileName = "";
  countries = [
    {
      id: "us",
      name: "United States",
    },
    {
      id: "uk",
      name: "United Kingdom",
    },
    {
      id: "ca",
      name: "Canada",
    },
  ];

  country1 = "us";
  countriesReactive = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "India",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];
  placeholder: string = "Enter the Country Name";
  keyword = "name";
  historyHeading: string = "Recently selected";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.initForm();
  }

  initForm(): void {
    const defaultCities = ["Mohali", "Amritsar"];
    const defaultZipCodes = ["456123"];

    this.athleteForm = this.fb.group(
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
        gender: new FormControl("male", []),
        acceptTerms: new FormControl(false),
        country: new FormControl(this.country1),
        countryName: new FormControl("", [Validators.required]),
        enableWifi: new FormControl(false),
        fullName: ["", [Validators.required]],
        cities: this.fb.array(
          this.cities.map((x) => defaultCities.indexOf(x) > -1)
        ),
        zip_codes: this.fb.array(
          this.zip_codes.map((x) => defaultZipCodes.indexOf(x) > -1)
        ),
      },
      {
        validator: [confirmPasswordValidator("password", "confirmPassword")],
      }
    );
  }

  submitForm(form: any) {
    console.log(form);
  }

  checkError(controlName: any, errorName: string, formType: string): any {
    if (formType == "athleteForm") {
      return this.athleteForm.controls[controlName].hasError(errorName);
    }
    return null;
  }

  // convenience getter for easy access to form fields
  get formControls() {
    return this.athleteForm.controls;
  }

  /** FOR REMOVING AND SETTING UP AGAIN THE VALIDATIONS 
      this.athleteForm.controls["phoneNumber"].clearValidators();
      this.athleteForm.controls["phoneNumber"].updateValueAndValidity();
      this.athleteForm.controls["phoneNumber"].setValidators([Validators.required]);
      this.athleteForm.controls['phoneNumber'].reset();
      this.athleteForm.controls['phoneNumber'].disable();
   */

  // FILE UPLOAD - REFERENCE: https://blog.angular-university.io/angular-file-upload/
  onFileUpload(event: any): void {
    console.log(event.target.files);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
  }
}
