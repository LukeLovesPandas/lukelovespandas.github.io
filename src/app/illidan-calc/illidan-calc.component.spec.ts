import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllidanCalcComponent } from './illidan-calc.component';

describe('IllidanCalcComponent', () => {
  let component: IllidanCalcComponent;
  let fixture: ComponentFixture<IllidanCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllidanCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllidanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
