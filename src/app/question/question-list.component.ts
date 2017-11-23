import { Component } from '@angular/core';
import { Question } from './question.model';


const q = new Question(
  '¿Comó funciona una variable?',
  'Este es mi lo creo',
  new Date(),
  'none'
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
    .add-question {
      position: fixed;
      bottom: 30px;
      right: 30px;
      font-size: 30px;
    }
    `]
})

export class  QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);

}
