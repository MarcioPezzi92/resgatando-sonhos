import { GalleriaModule } from 'primeng/galleria';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './pages/home/components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
