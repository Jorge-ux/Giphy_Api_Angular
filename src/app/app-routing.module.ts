import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/gifs/gif.module').then((m) => m.gifModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
