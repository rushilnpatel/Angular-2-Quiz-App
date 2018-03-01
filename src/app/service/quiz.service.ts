export class quizService {
	private questionList = {

		"Which is Powerful JS Framework?": {
			"React JS": 1,
			"Angular": 2,
			"Vue JS": 3,
			"Angular 4": 4
		},
		"Do you know typescript?": {
			"javascript": 1,
			"css": 2,
			"js lib": 3
		},
		"Do you know Digest Cycle?": {
			"Angular 1": 1,
            "Angular 2": 2,
            "JS":3,
            "No":4
		}
	};

	private answers = [];

	// update answer queArray
	public updateAnswer(pageNum, selected): void {
		var point = this.selectedAns(+pageNum, selected);
		this.answers.splice(pageNum - 1, 1, point);
	}

	// get question with selected page
	public qeustion(id) {
		var queArray = Object.keys(this.questionList);
		return queArray[+id - 1];
	}

	// get  All question with selected page
	public questions() {
		var queArray = Object.keys(this.questionList);

		return queArray;
	}

	// get answer list with selected page
	public answerList(id) {
		console.log(id);
		var question = this.qeustion(id);
		console.log(question);
		return Object.keys(this.questionList[question]);
	}

	// get point with selected anwser
	private selectedAns(pageNum, selected) {
		var quePage = this.qeustion(pageNum);
		var as = this.questionList[quePage];
		return as[selected];
	}

	// caculate final test score
	public result() {
		return this.answers.reduce((a,b) => {
			return a + b;
		}, 0);
	}

	public answeredQestion(pageNum): void {
		if (this.answers.length != +pageNum) {
			this.answers.push(0);
		}
	}
}