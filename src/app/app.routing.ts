import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent} from './auth/signup.component';
import { QUESTION_ROUTES } from './question/question.routing';

const APP_ROUTES: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'questions', children: QUESTION_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

// Sistema de rutas de la app
