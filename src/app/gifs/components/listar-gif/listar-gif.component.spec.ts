import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGifComponent } from './listar-gif.component';

describe('ListarGifComponent', () => {
  let component: ListarGifComponent;
  let fixture: ComponentFixture<ListarGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarGifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
