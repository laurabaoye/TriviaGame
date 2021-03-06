$(document).ready(function () {

	let starbtn = $('#start-button');
	starbtn.on('click', function () {
		$('.content').css('display', 'unset');
		starbtn.css('display', 'none');
		starTimer();

		if (remainingTime === 0) {
			console.log('zero');
		}
	});

});

let pos = 0;
let remainingTime = 10;
let timerID = "";
let test;
let test_status;
let question;
let choice;
let choices;
let chA;
let chB;
let chC;
let correct = 0;


var questions = [
	["What is 4 + 11?", "16", "15", "17", "B"],
	["What is 9 - 2?", "7", "5", "9", "C"],
	["What is 4 x 5?", "20", "19", "21", "A"],
	["What is 27 / 3?", "5", "9", "7", "B"]
];

function _(x) {
	return document.getElementById(x);
}

function renderQuestion() {
	test = _("test");
	if (pos >= questions.length) {
		test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][4]) {
		correct++;
		resetTimer();
	}
	pos++;
	renderQuestion();
	resetTimer();
}

function starTimer() {
	timerID = setInterval(function () {
		remainingTime--;
		$('#timer').text(remainingTime);
	}, 1000);
}

function stopTimer() {
	clearInterval(timerID);
}

function resetTimer() {
	stopTimer();
	remainingTime = 10;
	starTimer();
}

function timerIsZero() {
	if (remainingTime === 0) {
		console.log('hi');
	}
}


window.addEventListener("load", renderQuestion, false);

