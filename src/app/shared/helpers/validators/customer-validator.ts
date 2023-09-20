import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
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

export function passwordMatch(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors.passwordMismatch
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}
