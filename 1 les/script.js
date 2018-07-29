// let answers = [],
// 		questions = [
// 		"Как ваше имя?",
// 		"Как ваша фамилия?",
// 		"Сколько вам лет?"
// 		];

// for (let i = 0; i < questions.length; i++){
// 	answers[i] = prompt(questions[i]);
// }
// document.write(answers);

// let age = prompt("Сколько вам лет?");
// if (age > 18) {
// 	alert ('Супер')
// } else {
// 	alert('Рановато еще')
// }

// function calc(a,b) {
// 	console.log(a+b);
// }

// calc(4,6);

var age = prompt("Укажите свой возраст", "");

function myFirstApp(name) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html", "css", "bootstrap4", "gulp"];

		for (let i = 0; i < skills.length; i++){
			document.write(skills[i] + "<br>");
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Контент для вас доступен");
			document.write("<br>" + "Отличные курсы! Жалко, что я тормоз хранический");
		} else {
			alert("Контент отображается не полностью");
		}
	}
	checkAge();

	function calcPow(num) {
		let result = num * 2 % 3;
		console.log("Ваш результат: " + result);
	}
	calcPow(4);
}

myFirstApp("Максимилиан");