import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/*Materialize*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

import { MomentModule } from 'angular2-moment';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { QuestionListComponent} from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    SigninComponent,
    SignupComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
