import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDataComponent } from './cliente-data.component';

describe('ClienteDataComponent', () => {
  let component: ClienteDataComponent;
  let fixture: ComponentFixture<ClienteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
