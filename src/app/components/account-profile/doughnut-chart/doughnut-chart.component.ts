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
  constructor() {}

  ngOnInit() {}
}
