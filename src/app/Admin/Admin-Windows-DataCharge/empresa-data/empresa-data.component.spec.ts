import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDataComponent } from './empresa-data.component';

describe('EmpresaDataComponent', () => {
  let component: EmpresaDataComponent;
  let fixture: ComponentFixture<EmpresaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
