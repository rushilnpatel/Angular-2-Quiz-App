import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { BaseComponent } from './base/base.component';
import { QuizComponent } from './quiz/quiz.component';
import {quizService} from './service/quiz.service';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [quizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
