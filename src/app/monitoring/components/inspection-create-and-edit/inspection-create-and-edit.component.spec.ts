import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionCreateAndEditComponent } from './inspection-create-and-edit.component';

describe('InspectionCreateAndEditComponent', () => {
  let component: InspectionCreateAndEditComponent;
  let fixture: ComponentFixture<InspectionCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
