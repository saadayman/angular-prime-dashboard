import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageHeader } from './user-page-header';

describe('UserPageHeader', () => {
  let component: UserPageHeader;
  let fixture: ComponentFixture<UserPageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPageHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPageHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
