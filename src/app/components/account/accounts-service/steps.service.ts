import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private stepCount = new BehaviorSubject(0);
  currentStep = this.stepCount.asObservable();

  constructor() {}

  changeStep(step: number) {
    this.stepCount.next(step);
  }
}
