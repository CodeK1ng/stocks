import { Location } from '@angular/common';
import { StepsService } from './../accounts-service/steps.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {
  current: number;
  constructor(
    private steps: StepsService,
    private route: Router,
    private location: Location
  ) {}

  onSubmit() {
    this.route.navigate(['tax-info']);
  }

  onBackClicked() {
    this.location.back();
  }

  ngOnInit() {
    this.steps.currentStep.subscribe(step => (this.current = step));
    this.steps.changeStep(2);
  }
}
