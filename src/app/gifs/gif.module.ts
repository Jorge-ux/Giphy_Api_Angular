import { NgModule } from '@angular/core';
import { BuscarGifComponent } from './components/buscar-gif/buscar-gif.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListarGifComponent } from './components/listar-gif/listar-gif.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifRoutingModule } from './gif-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  exports: [GifRoutingModule],
  declarations: [BuscarGifComponent, ListarGifComponent, HomePageComponent],
  providers: [],
})
export class gifModule {}
