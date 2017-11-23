import { Question } from '../question/question.model';
import { User } from '../auth/user.module';

export class Answer {
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User,
  ) {}
}


// Si son publicos, podemos acceder desde fuera
// Cuando muestra errores, es porque falta la implementacion del metodo, por eso lo ponemos, pero Angular lo hace por nosotros
