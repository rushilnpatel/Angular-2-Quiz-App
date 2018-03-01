import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { quizService } from '../service/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  id = 0;
  total = 0;
  answers = [];
  quizQuestions = [];
  displayResult: boolean = false;
  
  result: Number;

  point = {
    index: 0,
    size: 1,
    count: 1
  };
  constructor(private router: Router, private route: ActivatedRoute, private _q: quizService) { }

  ngOnInit() {
 

    //subscribe router params and get updated quesiton and answers list form service
   
    this.route.params.subscribe(() => {

      this.quizQuestions = this._q.questions();

      this.point.count = this.quizQuestions.length;

      this.id = this.point.index;
     this.total = this.quizQuestions.length;
      this.answers = this._q.answerList(this.point.index + 1);

    });
  }

  // When user select perticular Answer
  onSelect(selected) {
    console.log(selected);
    
    //call udpateAnswer to udpate anwser list 
    this._q.updateAnswer(this.point.index + 1, selected);

    // Check if it has more questions, jump to next one, otherwise, show result
   
    if (this.point.index >= 0 && this.point.index < this.point.count - 1) {
      this.forwardNav();
    }
    else {
      this.displayResult = true;
      this.result = this._q.result();
    }
  }

  // Check to show back button
  backBtn(): boolean {
    return this.point.index > 0;
  }

  // fire when to click back btn, nav back to prev page
  backNav() {
    this.displayResult = false;
    this.answers = this._q.answerList(this.point.index);
    this.point.index -= 1;


  }
  // Check to show Forward button
  forwardBtn(): boolean {
    return this.point.index < this.point.count - 1;
  }

  get questionofPage() {
    return (this.quizQuestions) ?
      this.quizQuestions.slice(this.point.index, this.point.index + this.point.size) : [];
  }


  //// fire when to click Forward btn, nav forward to next page
  forwardNav() {

    if (this.point.index >= 0 && this.point.index < this.point.count - 1) {
      this.point.index += 1;

      this.answers = this._q.answerList(this.point.index + 1);
    }
  }



}
