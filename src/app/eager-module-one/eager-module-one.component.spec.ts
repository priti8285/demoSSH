import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerModuleOneComponent } from './eager-module-one.component';

describe('EagerModuleOneComponent', () => {
  let component: EagerModuleOneComponent;
  let fixture: ComponentFixture<EagerModuleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerModuleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerModuleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
