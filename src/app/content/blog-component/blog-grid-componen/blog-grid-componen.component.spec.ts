import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridComponenComponent } from './blog-grid-componen.component';

describe('BlogGridComponenComponent', () => {
  let component: BlogGridComponenComponent;
  let fixture: ComponentFixture<BlogGridComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridComponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
