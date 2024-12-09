import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsListComponent } from './dropdowns-list.component';

describe('DropdownsListComponent', () => {
  let component: DropdownsListComponent;
  let fixture: ComponentFixture<DropdownsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
