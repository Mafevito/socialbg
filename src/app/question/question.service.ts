import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import urlJoin from 'url-join';

@Injectable()
export class QuestionService {
  constructor(private http: Http) {
    this.questionsUrl = urlJoin(environment.apiUrl, 'questions')
  }

// metodo para obtener todas las preguntas del backend
  getQuestions(): Promise<void | Question[]> {
    return

  }
}
