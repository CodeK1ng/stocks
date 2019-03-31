import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
    public chartLabels = ['Account Value', 'Buying Power', 'Cash'];
    public chartData = [120, 150, 180];
    public chartType = 'doughnut';

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
