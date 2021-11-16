import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from 'src/views/container/container.component';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../views/button/button.component';
import { PicturesComponent } from '../views/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, ButtonComponent, PicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
