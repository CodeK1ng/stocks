import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPortfolioComponent } from './option-portfolio.component';

describe('OptionPortfolioComponent', () => {
  let component: OptionPortfolioComponent;
  let fixture: ComponentFixture<OptionPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
