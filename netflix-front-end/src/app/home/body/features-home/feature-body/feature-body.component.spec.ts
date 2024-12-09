import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBodyComponent } from './feature-body.component';

describe('FeatureBodyComponent', () => {
  let component: FeatureBodyComponent;
  let fixture: ComponentFixture<FeatureBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
