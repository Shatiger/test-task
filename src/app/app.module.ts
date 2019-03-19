import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RemovedComponent } from './removed/removed.component';

import { FilterPipe} from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: AllComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'removed', component: RemovedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FavoriteComponent,
    RemovedComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
