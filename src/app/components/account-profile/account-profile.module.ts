import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

const routes: Routes = [{ path: 'profile', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, DoughnutChartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ChartsModule]
})
export class AccountProfileModule {}
