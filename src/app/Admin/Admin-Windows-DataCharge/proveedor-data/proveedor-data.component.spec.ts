import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDataComponent } from './proveedor-data.component';

describe('ProveedorDataComponent', () => {
  let component: ProveedorDataComponent;
  let fixture: ComponentFixture<ProveedorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
