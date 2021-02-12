import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ResponseComponent } from './response/response.component';
import { QuestionaryComponent } from './questionary/questionary.component';

import {HelpService} from './help.service';


const routes: Routes = [
  { path: 'home', component: QuestionaryComponent },
  { path: 'hello', component: ResponseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, QuestionaryComponent, ResponseComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HelpService]
})
export class AppModule { }
