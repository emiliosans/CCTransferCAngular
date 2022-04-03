import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConversionesComponent } from './tabla-conversiones.component';

describe('TablaConversionesComponent', () => {
  let component: TablaConversionesComponent;
  let fixture: ComponentFixture<TablaConversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaConversionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
