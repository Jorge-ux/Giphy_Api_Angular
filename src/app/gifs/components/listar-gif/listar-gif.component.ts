import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-listar-gif',
  templateUrl: './listar-gif.component.html',
  styleUrl: './listar-gif.component.css',
})
export class ListarGifComponent implements OnInit {
  lista: Datum[] = [];

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.mostrarGif();
  }

  mostrarGif() {
    this.gifService.listaProductos.subscribe((lista) => {
      this.lista = lista;
    });
  }
}
