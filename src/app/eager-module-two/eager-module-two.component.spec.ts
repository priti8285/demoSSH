import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerModuleTwoComponent } from './eager-module-two.component';

describe('EagerModuleTwoComponent', () => {
  let component: EagerModuleTwoComponent;
  let fixture: ComponentFixture<EagerModuleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerModuleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
