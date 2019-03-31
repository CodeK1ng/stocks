import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-stock-portfolio',
   templateUrl: './stock-portfolio.component.html',
   styleUrls: ['./stock-portfolio.component.scss']
})
export class StockPortfolioComponent implements OnInit {
   public listOfData = [
      {
         key: '1',
         name: 'Profit/Loss on Current Holdings',
         age: 0.0,
         address: 'New York No. 1 Lake Park'
      },
      {
         key: '2',
         name: 'Brokerage and Statutory Costs',
         age: 0.0,
         address: 'London No. 1 Lake Park'
      },
      {
         key: '3',
         name: 'Funds to Invest',
         age: 32000,
         address: 'Sidney No. 1 Lake Park'
      }
   ];
   constructor() {}

   ngOnInit() {}
}
