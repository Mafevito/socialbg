import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question = new Question (
    'Pregunta Javascript',
    'Tengo una duda con los bucles for',
    new Date,
    'devicon-javascript-plain'
  );

  constructor() {}

  ngOnInit() {}

}
