import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { StepsService } from './../accounts-service/steps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-info',
  templateUrl: './tax-info.component.html',
  styleUrls: ['./tax-info.component.scss']
})
export class TaxInfoComponent implements OnInit {
  current: number;
  constructor(
    private steps: StepsService,
    private route: Router,
    private location: Location
  ) {}

  onSubmit() {
    this.route.navigate(['bank-info']);
  }

  onBackClicked() {
    this.location.back();
  }
  ngOnInit() {
    this.steps.currentStep.subscribe(step => (this.current = step));
    this.steps.changeStep(3);
  }
}
