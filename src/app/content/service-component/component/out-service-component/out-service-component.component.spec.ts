import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutServiceComponentComponent } from './out-service-component.component';

describe('OutServiceComponentComponent', () => {
  let component: OutServiceComponentComponent;
  let fixture: ComponentFixture<OutServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutServiceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
