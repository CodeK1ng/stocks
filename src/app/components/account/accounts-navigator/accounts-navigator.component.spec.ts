import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsNavigatorComponent } from './accounts-navigator.component';

describe('AccountsNavigatorComponent', () => {
  let component: AccountsNavigatorComponent;
  let fixture: ComponentFixture<AccountsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
