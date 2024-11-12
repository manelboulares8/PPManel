import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicceComponent } from './servicce.component';

describe('ServicceComponent', () => {
  let component: ServicceComponent;
  let fixture: ComponentFixture<ServicceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
