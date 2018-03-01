import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component'
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuizComponent } from './quiz/quiz.component';


const appRoutes: Routes = [
  { path: 'base', component: BaseComponent },
  // {path: 'questions/:id', component: QuestionsComponent},
  { path: 'assessment', component: QuizComponent },
  { path: '', redirectTo: '/base', pathMatch: 'full' }
  ,{ path: '**', component: BaseComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
