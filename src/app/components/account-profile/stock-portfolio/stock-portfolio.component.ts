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
   public listOfData3 = [
      {
         key: '1',
         name: 'Bata',
         symbol: 'BATA',
         shares: 51,
         purchase: 53.87,
         price: 47.74,
         change: 276.82,
         profit: 21.72,
         age: 0.0,
         address: 'Account Balance Carried Forward'
      },
      {
         key: '2',
         name: 'Lafarge',
         symbol: 'LAFARGE',
         shares: 108,
         purchase: 22.49,
         price: 22.15,
         change: 36.72,
         profit: 21.52,
         age: 0.0,
         address: 'Account Balance Carried Forward'
      },
      {
         key: '3',
         name: 'Puma',
         symbol: 'PUMA',
         shares: 113,
         purchase: 21.46,
         price: 23.99,
         change: 285.89,
         profit: 25.43,
         age: 0.0,
         address: 'Account Balance Carried Forward'
      },
      {
         key: '4',
         name: 'Airtel',
         symbol: 'ATEL',
         shares: 26,
         purchase: 94.71,
         price: 101.38,
         change: 173.42,
         profit: 20.02,
         age: 0.0,
         address: 'Account Balance Carried Forward'
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
