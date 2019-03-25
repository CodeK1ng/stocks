import { Component, OnInit } from '@angular/core';
import { StepsService } from '../accounts-service/steps.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  current: number;
  constructor(private steps: StepsService) {}

  ngOnInit() {
    this.steps.currentStep.subscribe(step => (this.current = step));
    this.steps.changeStep(1);
  }
}
