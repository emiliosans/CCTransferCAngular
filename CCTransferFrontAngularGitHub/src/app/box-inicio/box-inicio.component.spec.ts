import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInicioComponent } from './box-inicio.component';

describe('BoxInicioComponent', () => {
  let component: BoxInicioComponent;
  let fixture: ComponentFixture<BoxInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
