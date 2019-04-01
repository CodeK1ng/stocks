import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StepsService } from '../accounts-service/steps.service';
import { Router } from '@angular/router';
import {
   FormGroup,
   FormBuilder,
   FormControl,
   ValidationErrors,
   Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
   selector: 'app-personal-info',
   templateUrl: './personal-info.component.html',
   styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
   current: number;
   validateForm: FormGroup;

   constructor(
      private steps: StepsService,
      private route: Router,
      private location: Location,
      private fb: FormBuilder
   ) {
      this.validateForm = this.fb.group({
         userName: ['', [Validators.required], [this.userNameAsyncValidator]],
         email: ['', [Validators.email, Validators.required]],
         password: ['', [Validators.required]],
         confirm: ['', [this.confirmValidator]],
         comment: ['', [Validators.required]]
      });
   }

   onSubmit() {
      this.route.navigate(['address-info']);
   }

   onBackClicked() {
      this.location.back();
   }

   ngOnInit() {
      this.steps.currentStep.subscribe(step => (this.current = step));
      this.steps.changeStep(1);
   }

   submitForm = ($event: any, value: any) => {
      $event.preventDefault();
      for (const key in this.validateForm.controls) {
         if (this.validateForm.controls.hasOwnProperty(key)) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
         }
      }
      console.log(value);
   };

   resetForm(e: MouseEvent): void {
      e.preventDefault();
      this.validateForm.reset();
      for (const key in this.validateForm.controls) {
         if (this.validateForm.controls.hasOwnProperty(key)) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
         }
      }
   }

   validateConfirmPassword(): void {
      setTimeout(() =>
         this.validateForm.controls.confirm.updateValueAndValidity()
      );
   }

   userNameAsyncValidator = (control: FormControl) =>
      Observable.create((observer: Observer<ValidationErrors | null>) => {
         setTimeout(() => {
            if (control.value === 'JasonWood') {
               observer.next({ error: true, duplicated: true });
            } else {
               observer.next(null);
            }
            observer.complete();
         }, 1000);
      });

   confirmValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
         return { required: true };
      } else if (control.value !== this.validateForm.controls.password.value) {
         return { confirm: true, error: true };
      }
      return {};
   };
}
