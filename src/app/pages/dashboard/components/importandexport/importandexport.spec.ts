import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Importandexport } from './importandexport';

describe('Importandexport', () => {
  let component: Importandexport;
  let fixture: ComponentFixture<Importandexport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Importandexport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Importandexport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
