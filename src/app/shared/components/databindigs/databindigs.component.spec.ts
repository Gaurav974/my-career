import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindigsComponent } from './databindigs.component';

describe('DatabindigsComponent', () => {
  let component: DatabindigsComponent;
  let fixture: ComponentFixture<DatabindigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
