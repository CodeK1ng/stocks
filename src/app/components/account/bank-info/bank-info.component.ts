import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { StepsService } from './../accounts-service/steps.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  current: number;
  constructor(
    private steps: StepsService,
    private route: Router,
    private location: Location
  ) {}

  onSubmit() {
    this.route.navigate(['account-type']);
  }

  onBackClicked() {
    this.location.back();
  }
  ngOnInit() {
    this.steps.currentStep.subscribe(step => (this.current = step));
    this.steps.changeStep(4);
  }
}
