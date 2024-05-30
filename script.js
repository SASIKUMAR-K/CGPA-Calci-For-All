const formArea = document.querySelector('.inputArea');

const result = document.createElement('div');
const markTable = document.querySelector('.markTable');

let i = 2;

const countSub = document.querySelector('.count');
function createForm() {
	const formAreaAll = document.querySelectorAll('.oneInput');
	console.log(formAreaAll);
	if (formAreaAll.length == 0) {
		i = 1;
	}
	for (j = 0; j < countSub.value; j++) {
		const temp = document.createElement('div');
		temp.setAttribute('id', 'oneInput' + ' ' + i);
		temp.setAttribute('class', 'oneInput');
		const subjectTag = document.createElement('input');
		const markTag = document.createElement('input');
		const creditTag = document.createElement('input');
		const deleteButton = document.createElement('button');
		const deleteButtonI = document.createElement('i');
		subjectTag.setAttribute('type', 'text');
		markTag.setAttribute('type', 'number');
		creditTag.setAttribute('type', 'number');
		subjectTag.setAttribute('class', 'subjectName');
		markTag.setAttribute('class', 'mark');
		creditTag.setAttribute('class', 'credits');
		subjectTag.setAttribute('placeholder', 'Subject Name-' + i);
		markTag.setAttribute('placeholder', 'Mark-' + i + '*');
		creditTag.setAttribute('placeholder', 'Credit-' + i + '*');
		deleteButtonI.setAttribute('class', 'fa-solid fa-trash-can');
		deleteButtonI.setAttribute('id', 'deleteButton' + ' ' + i);
		deleteButton.setAttribute('class', 'deleteButton');
		deleteButton.appendChild(deleteButtonI);
		temp.appendChild(subjectTag);
		temp.appendChild(markTag);
		temp.appendChild(creditTag);
		temp.appendChild(deleteButton);
		formArea.appendChild(temp);
		i += 1;
	}
}

function calculate() {
	const subjectNames = document.querySelectorAll('.subjectName');
	const marks = document.querySelectorAll('.mark');
	const credits = document.querySelectorAll('.credits');
	let numerator = 0;
	let denominator = 0;
	let flag = false;
	for (j = 0; j < subjectNames.length; j++) {
		let sv = subjectNames[j].value;
		let mv = marks[j].value;
		let cv = credits[j].value;
		if (mv && cv) {
			if (mv >= 90) {
				var gp = 10;
			} else if (mv >= 80) {
				var gp = 9;
			} else if (mv >= 70) {
				var gp = 8;
			} else if (mv >= 60) {
				var gp = 7;
			} else if (mv >= 50) {
				var gp = 6;
			} else {
				var gp = 0;
			}
			numerator += gp * cv;
			denominator += cv;
		} else {
			flag = true;
			break;
		}
	}
	if (flag) {
		alert('Kindly Fill All Required Fields\n* Indicates Required Fields');
		result.setAttribute('class', '');
		result.innerHTML = '';
	} else {
		result.setAttribute('class', 'result');
		const cgpaText = document.createElement('div');
		cgpaText.setAttribute('class', 'cgpaText');
		let cgpaValue = numerator / denominator;
		cgpaText.innerHTML = 'CGPA is ' + cgpaValue.toFixed(2);
		result.innerHTML = '';
		result.appendChild(cgpaText);
		document.body.appendChild(result);
	}
}

document.addEventListener('click', function (event) {
	let reqIn = event.target.id;
	if (reqIn.slice(0, 12) == 'deleteButton') {
		console.log(reqIn);
		document.getElementById('oneInput ' + reqIn.substring(13)).remove();
	}
});
