import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGithubComponent } from './about-github/about-github.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutGithubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
