import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidationRequirements } from "../../enum/validation-requirements";

export function beAValidPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let regexp = new RegExp(ValidationRequirements.AlphaNumericPassword); // consisting of or using both letters and numerals.
    if (!regexp.test(control.value)) {
      return { alphanumericpassword: true };
    }
    return null;
  };
}

export function beAValidPhoneNumber(pattern: any): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value == "" || control.value == null) {
      return { required: true };
    }
    if (control.value.match(pattern)) {
      return null;
    } else {
      return { phoneNumber: true };
    }
  };
}

export function confirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors['PasswordNoMatch']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ PasswordNoMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
