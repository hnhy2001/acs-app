import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeQuoteComponentComponent } from './free-quote-component.component';

describe('FreeQuoteComponentComponent', () => {
  let component: FreeQuoteComponentComponent;
  let fixture: ComponentFixture<FreeQuoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeQuoteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeQuoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
