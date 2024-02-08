import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styleUrl: './buscar-gif.component.css',
})
export class BuscarGifComponent {
  lista: Datum[] = [];

  constructor(private fb: FormBuilder, private gifService: GifService) {}

  formulario: FormGroup = this.fb.group({
    busqueda: ['', Validators.required],
  });

  mostrarGif(term: string) {}

  onSearch() {
    if (this.formulario.invalid) return;

    const value = this.formulario.controls['busqueda'].value;

    this.gifService.getGifs(value).subscribe({
      next: (gifs) => {
        // this.lista = gifs.data;

        // Formas para manejar la data

        // SE DEBE REVISAR PARA CUANDO HAYA UNA BUSQUEDA SOBREESCRIBIR EL ARRAY Y NO CONCATENARLO

        if (Array.isArray(gifs)) {
          // Si la lista es un array se debe usar directamente
          this.lista = [...gifs, ...this.lista];
        } else {
          // Si la lista es de tipo GifExpert, acceder a la propiedad
          this.lista = [...gifs.data, ...this.lista];
        }

        console.log(this.lista);

        this.gifService.listaProductos.emit(this.lista);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
