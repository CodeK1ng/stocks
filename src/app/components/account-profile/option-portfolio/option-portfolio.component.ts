import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-option-portfolio',
   templateUrl: './option-portfolio.component.html',
   styleUrls: ['./option-portfolio.component.scss']
})
export class OptionPortfolioComponent implements OnInit {
   public listOfData = [
      {
         key: '1',
         name: '24-03-2019',
         age: 32000,
         address: 'Account Balance Carried Forward'
      },
      {
         key: '2',
         name: '23-03-2019',
         age: 0.0,
         address: 'Brokerage and Statutory Costs'
      },
      {
         key: '3',
         name: '12-03-2019',
         age: 32000,
         address: 'Funds to Invest'
      }
   ];
   constructor() {}

   ngOnInit() {}
}
