import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllergyComponent } from './allergy.component';

describe('AllergyComponent', () => {
  let component: AllergyComponent;
  let fixture: ComponentFixture<AllergyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
