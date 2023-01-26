import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAcidenteComponent } from './registrar-acidente.component';

describe('RegistrarAcidenteComponent', () => {
  let component: RegistrarAcidenteComponent;
  let fixture: ComponentFixture<RegistrarAcidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAcidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAcidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
