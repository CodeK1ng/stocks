import { ChartsModule } from 'ng2-charts';
import { AccountProfileModule } from './components/account-profile/account-profile.module';
import { AccountsModule } from './components/account/accounts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { MarketComponent } from './components/market/market.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';

registerLocaleData(en);

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'market', component: MarketComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TutorialsComponent,
    MarketComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccountsModule,
    ChartModule,
    AccountProfileModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HIGHCHARTS_MODULES,
      useFactory: () => [more, exporting, highstock]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
