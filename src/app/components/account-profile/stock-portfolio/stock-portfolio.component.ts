import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-stock-portfolio',
   templateUrl: './stock-portfolio.component.html',
   styleUrls: ['./stock-portfolio.component.scss']
})
export class StockPortfolioComponent implements OnInit {
   public isVisible = false;

   public listOfData2 = [
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
   public listOfData = [
      {
         key: '1',
         name: 'Profit/Loss on Current Holdings',
         age: 0.0,
         address: 'Account Balance Carried Forward'
      },
      {
         key: '2',
         name: 'Brokerage and Statutory Costs',
         age: 0.0,
         address: 'Brokerage and Statutory Costs'
      },
      {
         key: '3',
         name: 'Funds to Invest',
         age: 32000,
         address: 'Funds to Invest'
      }
   ];
   constructor(private route: Router) {}

   ngOnInit() {}

   tradeStock() {
      this.route.navigate(['market']);
   }

   showModal(): void {
      this.isVisible = true;
   }

   handleOk(): void {
      this.isVisible = false;
   }

   handleCancel(): void {
      this.isVisible = false;
   }
}
