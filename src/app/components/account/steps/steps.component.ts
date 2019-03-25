import { Component, OnInit } from '@angular/core';
import { StepsService } from '../accounts-service/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  current: number;
  constructor(private steps: StepsService) {}

  ngOnInit(): void {
    this.steps.currentStep.subscribe(step => (this.current = step));
  }
}
