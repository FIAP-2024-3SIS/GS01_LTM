import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicoesOceanicasComponent } from './condicoes-oceanicas.component';

describe('CondicoesOceanicasComponent', () => {
  let component: CondicoesOceanicasComponent;
  let fixture: ComponentFixture<CondicoesOceanicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CondicoesOceanicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondicoesOceanicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
