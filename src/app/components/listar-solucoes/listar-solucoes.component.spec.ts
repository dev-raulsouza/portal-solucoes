import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolucoesComponent } from './listar-solucoes.component';

describe('ListarSolucoesComponent', () => {
  let component: ListarSolucoesComponent;
  let fixture: ComponentFixture<ListarSolucoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSolucoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
