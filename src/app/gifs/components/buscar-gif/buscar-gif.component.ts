import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styleUrl: './buscar-gif.component.css',
})
export class BuscarGifComponent {
  constructor(private fb: FormBuilder, private gifService: GifService) {}

  formulario: FormGroup = this.fb.group({
    busqueda: ['', Validators.required],
  });

  onSearch() {
    if (this.formulario.invalid) return;
  }
}
