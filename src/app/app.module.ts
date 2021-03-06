import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppArtistComponent } from './app-artist/app-artist.component';
import { AppAlbumComponent } from './app-album/app-album.component';
import { AlbumResolver } from './app-album/album-resolver.service';
import { routing } from './app.routing';
import { SpotifyService } from './services/spotify.service';
import { ToastrService } from './services/toastr.service';
import { PageNotFoundComponent } from './errors/404.component';
import { RouteTo404GuardService } from './guards/route-to-404-guard.service';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule, PopoverModule.forRoot() ],
  declarations: [ AppComponent, AppNavbarComponent, AppAboutComponent, 
                  AppSearchComponent, AppArtistComponent, AppAlbumComponent,
                  PageNotFoundComponent ],
  providers:    [ SpotifyService, ToastrService, RouteTo404GuardService, AlbumResolver ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
