import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailComponentComponent } from './blog-detail-component.component';

describe('BlogDetailComponentComponent', () => {
  let component: BlogDetailComponentComponent;
  let fixture: ComponentFixture<BlogDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
