import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenitcationHomeComponent } from './authenitcation-home.component';

describe('AuthenitcationHomeComponent', () => {
  let component: AuthenitcationHomeComponent;
  let fixture: ComponentFixture<AuthenitcationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenitcationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenitcationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
