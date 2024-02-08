import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGifComponent } from './buscar-gif.component';

describe('BuscarGifComponent', () => {
  let component: BuscarGifComponent;
  let fixture: ComponentFixture<BuscarGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarGifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
