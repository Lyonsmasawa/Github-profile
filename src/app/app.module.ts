import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { UserDataComponent } from './data/user-data/user-data.component';
import { UserProfComponent } from './data/user-prof/user-prof.component';
import { HighlightDirective } from './highlight.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    UserDataComponent,
    UserProfComponent,
    HighlightDirective,
    CapitalizePipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
