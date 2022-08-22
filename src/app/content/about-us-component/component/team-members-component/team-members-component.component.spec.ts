import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersComponentComponent } from './team-members-component.component';

describe('TeamMembersComponentComponent', () => {
  let component: TeamMembersComponentComponent;
  let fixture: ComponentFixture<TeamMembersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMembersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
