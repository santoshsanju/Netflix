import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianBodyComponent } from './accordian-body.component';

describe('AccordianBodyComponent', () => {
  let component: AccordianBodyComponent;
  let fixture: ComponentFixture<AccordianBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordianBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
