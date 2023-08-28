import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiseasComponent } from './diseas.component';

describe('DiseasComponent', () => {
  let component: DiseasComponent;
  let fixture: ComponentFixture<DiseasComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
