import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StepsService } from '../accounts-service/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  current: number;
  constructor(
    private steps: StepsService,
    private route: Router,
    private location: Location
  ) {}

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
}
