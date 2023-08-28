import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgComponent } from './backg.component';

describe('BackgComponent', () => {
  let component: BackgComponent;
  let fixture: ComponentFixture<BackgComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
