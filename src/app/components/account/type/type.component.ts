import { StepsService } from './../accounts-service/steps.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  selectIndivual = false;
  selectUnder18 = false;
  selectCorporate = false;
  selectOther = false;
  selected = false;

  current: number;
  constructor(private steps: StepsService, private router: Router) {}

  ngOnInit() {
    this.steps.currentStep.subscribe(step => (this.current = step));
    this.steps.changeStep(0);
  }

  onSubmit() {
    if (
      this.selectIndivual === false &&
      this.selectUnder18 === false &&
      this.selectCorporate === false &&
      this.selectOther === false
    ) {
      window.alert('Please select an account type');
      return;
    }
    this.router.navigate(['personal-info']);
  }

  selectedAccount(type: string): void {
    switch (type) {
      case 'individual':
        this.selectIndivual = true;
        this.selectUnder18 = false;
        this.selectCorporate = false;
        this.selectOther = false;
        break;
      case 'under18':
        this.selectIndivual = false;
        this.selectUnder18 = true;
        this.selectCorporate = false;
        this.selectOther = false;
        break;
      case 'corporate':
        this.selectIndivual = false;
        this.selectUnder18 = false;
        this.selectOther = false;
        this.selectCorporate = true;
        break;
      case 'other':
        this.selectIndivual = false;
        this.selectUnder18 = false;
        this.selectOther = true;
        this.selectCorporate = false;
        break;
      default:
        this.selectIndivual = false;
        this.selectUnder18 = false;
        this.selectOther = false;
        this.selectCorporate = false;
    }
  }
}
