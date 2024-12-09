import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderTitleComponent } from './sub-header-title.component';

describe('SubHeaderTitleComponent', () => {
  let component: SubHeaderTitleComponent;
  let fixture: ComponentFixture<SubHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeaderTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
