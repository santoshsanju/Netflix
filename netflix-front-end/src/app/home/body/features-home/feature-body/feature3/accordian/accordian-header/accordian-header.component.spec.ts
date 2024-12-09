import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianHeaderComponent } from './accordian-header.component';

describe('AccordianHeaderComponent', () => {
  let component: AccordianHeaderComponent;
  let fixture: ComponentFixture<AccordianHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordianHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
