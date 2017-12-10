import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionService]
})
export class QuestionComponent implements OnInit {
  question?: Question;
  loading = true;
  sub: any;

  constructor(private questionService: QuestionService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionService
      .getQuestion(params.id)
      .then((question:Question) => {
        this.question = question;
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
