import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from '../auth/user.module';
import { Question } from '../question/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  //Decimos que es una propiedad que se le va a pasar
  @Input() question: Question;

  onSubmit(form: NgForm){
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(null, null, 'Paola', 'Lopez')
    );
    //Al array que tiene de respuestas se las asignamos a la pregunta
    this.question.answers.unshift(answer);
    form.reset();
  }
}


// Metodo para mostrar la respuesta en consola
// onSubmit(form: NgForm){
//   console.log(form.value.description)
// }

//unshift agrega al principio, push al final
