import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthorsComponent} from './authors.component';
import {AuthorsService} from './authors.service';
import {StarComponent} from './star.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AuthorsComponent, StarComponent],
  bootstrap: [AppComponent],
  providers: [AuthorsService]
})
export class AppModule {
}
