import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionControlService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
