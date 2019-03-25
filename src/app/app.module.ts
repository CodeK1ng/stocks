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
import { TypeComponent } from './components/account/type/type.component';
import { StepsComponent } from './components/account/steps/steps.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/account/personal-info/personal-info.component';
import { AddressInfoComponent } from './components/account/address-info/address-info.component';
import { TaxInfoComponent } from './components/account/tax-info/tax-info.component';
import { BankInfoComponent } from './components/account/bank-info/bank-info.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    StepsComponent,
    HeaderComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    TaxInfoComponent,
    BankInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
