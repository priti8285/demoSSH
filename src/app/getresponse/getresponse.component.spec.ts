import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetresponseComponent } from './getresponse.component';

describe('GetresponseComponent', () => {
  let component: GetresponseComponent;
  let fixture: ComponentFixture<GetresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
