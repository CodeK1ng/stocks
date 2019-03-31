import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { StockPortfolioComponent } from './stock-portfolio/stock-portfolio.component';
import { OptionPortfolioComponent } from './option-portfolio/option-portfolio.component';

const routes: Routes = [{ path: 'profile', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, DoughnutChartComponent, StockPortfolioComponent, OptionPortfolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AccountProfileModule {}
