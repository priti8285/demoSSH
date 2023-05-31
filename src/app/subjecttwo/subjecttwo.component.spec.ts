import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecttwoComponent } from './subjecttwo.component';

describe('SubjecttwoComponent', () => {
  let component: SubjecttwoComponent;
  let fixture: ComponentFixture<SubjecttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjecttwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjecttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
