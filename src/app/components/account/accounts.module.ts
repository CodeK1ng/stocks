import { AccountsComponent } from './accounts.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TypeComponent } from '../../components/account/type/type.component';
import { StepsComponent } from '../../components/account/steps/steps.component';
import { PersonalInfoComponent } from '../../components/account/personal-info/personal-info.component';
import { AddressInfoComponent } from '../../components/account/address-info/address-info.component';
import { TaxInfoComponent } from '../../components/account/tax-info/tax-info.component';
import { BankInfoComponent } from '../../components/account/bank-info/bank-info.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountsNavigatorComponent } from '../../components/account/accounts-navigator/accounts-navigator.component';

registerLocaleData(en);

const appRoutes: Routes = [
  { path: 'account-type', component: TypeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'address-info', component: AddressInfoComponent },
  { path: 'tax-info', component: TaxInfoComponent },
  { path: 'bank-info', component: BankInfoComponent },
  { path: 'create-account', component: AccountsNavigatorComponent }
];

@NgModule({
  declarations: [
    AccountsComponent,
    TypeComponent,
    StepsComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    TaxInfoComponent,
    BankInfoComponent,
    AccountsNavigatorComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AccountsComponent]
})
export class AccountsModule {}
