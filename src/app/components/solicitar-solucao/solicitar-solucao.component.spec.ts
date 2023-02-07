import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarSolucaoComponent } from './solicitar-solucao.component';

describe('SolicitarSolucaoComponent', () => {
  let component: SolicitarSolucaoComponent;
  let fixture: ComponentFixture<SolicitarSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarSolucaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
