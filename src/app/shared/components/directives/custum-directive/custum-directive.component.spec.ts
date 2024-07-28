import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumDirectiveComponent } from './custum-directive.component';

describe('CustumDirectiveComponent', () => {
  let component: CustumDirectiveComponent;
  let fixture: ComponentFixture<CustumDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
