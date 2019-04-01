import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   listOfData = [
      {
         key: '1',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         sum: 0.0159,
         total: 0.0159,
         size: 5680.47,
         bid: 0.0000028,
         ask: 0.00000281,
         size2: 360358.19,
         total2: 1.0126,
         sum2: 1.0126,
         date: '02/18/2018 05:36:12 PM',
         type: 'Limit Sell'
      },
      {
         key: '2',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         sum: 0.0159,
         total: 0.0159,
         size: 5680.47,
         bid: 0.0000028,
         ask: 0.00000281,
         size2: 360358.19,
         total2: 1.0126,
         sum2: 1.0126,
         date: '02/18/2018 05:36:12 PM',
         type: 'Limit Buy'
      },
      {
         key: '3',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         sum: 0.0159,
         total: 0.0159,
         size: 5680.47,
         bid: 0.0000028,
         ask: 0.00000281,
         size2: 360358.19,
         total2: 1.0126,
         sum2: 1.0126,
         date: '02/18/2018 05:36:12 PM',
         type: 'Market Buy'
      }
   ];
   constructor() {}

   ngOnInit() {}
}
