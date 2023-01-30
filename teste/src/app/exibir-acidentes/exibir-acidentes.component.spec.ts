import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirAcidentesComponent } from './exibir-acidentes.component';

describe('ExibirAcidentesComponent', () => {
  let component: ExibirAcidentesComponent;
  let fixture: ComponentFixture<ExibirAcidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirAcidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirAcidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
