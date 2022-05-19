const main = document.querySelector(".main-container");

const sex = document.querySelector('.sex');
const sexError = document.querySelector('.sex-error');
const age = document.querySelector('.age');
const ageError = document.querySelector('.age-error');
const weight = document.querySelector('.weight');
const weightError = document.querySelector('.weight-error');
const height = document.querySelector('.height');
const heightError = document.querySelector('.height-error');
const act = document.querySelector('.act');
const actError = document.querySelector('.act-error');

function validateInputs() {
	(sex.value === '') ? sexError.style.display = 'flex' : sexError.style.display = 'none';
	(age.value === '') ? ageError.style.display = 'flex' : ageError.style.display = 'none';
	(weight.value === '') ? weightError.style.display = 'flex' : weightError.style.display = 'none';
	(height.value === '') ? heightError.style.display = 'flex' : heightError.style.display = 'none';
	(act.value === '') ? actError.style.display = 'flex' : actError.style.display = 'none';

	if (sex.value && age.value && weight.value && height.value && act.value) {
		calculate();
	}
}

function calculate() {
	const sexValue = sex.value;
	const ageValue = parseInt(age.value);
	const weightValue = parseFloat(weight.value.replace(',', '.'));
	const heightValue = parseFloat(height.value.replace(',', '.'));
	const actValue = parseInt(act.value);
	const imc = (weightValue / (heightValue ** 2)).toFixed(2);
	const averageImc = (sexValue === "m") ? 22 : 20;
	const theoricalWeight = (averageImc * (heightValue ** 2)).toFixed(2);

	const imcClassification = () => {
		if (ageValue < 10) {
			return "Não calculado devido à faixa etária.";
		} else if (ageValue >= 10 && ageValue < 20) {
			const percentil = {
				"m": {
					10: [14.42, 15.15, 16.72, 19.60, 22.60],
					11: [14.83, 15.59, 17.28, 20.35, 23.70],
					12: [15.24, 16.06, 17.87, 21.12, 24.89],
					13: [15.73, 16.62, 18.53, 21.93, 25.93],
					14: [16.18, 17.20, 19.22, 22.77, 26.93],
					15: [16.59, 17.76, 19.92, 23.63, 27.76],
					16: [17.01, 18.32, 20.63, 24.45, 28.53],
					17: [17.31, 18.68, 21.12, 25.28, 29.32],
					18: [17.54, 18.89, 21.45, 25.95, 30.02],
					19: [17.80, 19.20, 21.86, 26.63, 30.66]
				},
				"f": {
					10: [14.23, 15.09, 17.00, 20.19, 23.20],
					11: [14.60, 15.53, 17.67, 21.18, 24.59],
					12: [14.98, 15.98, 18.35, 22.17, 25.95],
					13: [15.36, 16.43, 18.95, 23.08, 27.07],
					14: [15.67, 16.79, 19.32, 23.88, 27.97],
					15: [16.01, 17.16, 19.69, 24.29, 28.51],
					16: [16.37, 17.54, 20.09, 24.74, 29.10],
					17: [16.59, 17.81, 20.36, 25.23, 29.72],
					18: [16.71, 17.99, 20.57, 25.56, 30.22],
					19: [16.87, 18.20, 20.80, 25.85, 30.72]
				}
			}
			if (imc < percentil[sexValue][ageValue][0]) { return "<5%: Baixo Peso"; }
			if (imc >= percentil[sexValue][ageValue][0] && imc < percentil[sexValue][ageValue][1]) { return "5~15%: Eutrofia"; }
			if (imc >= percentil[sexValue][ageValue][1] && imc < percentil[sexValue][ageValue][2]) { return "15~50%: Eutrofia"; }
			if (imc >= percentil[sexValue][ageValue][2] && imc < percentil[sexValue][ageValue][3]) { return "50~85%: Eutrofia"; }
			if (imc >= percentil[sexValue][ageValue][3] <= imc < percentil[sexValue][ageValue][4]) { return "85~95%: Sobrepeso"; }
			return ">95%: Obesidade";

		} else if (ageValue >= 20 && ageValue < 65) {
			if (imc < 16) { return "Magreza Grau III"; }
			if (imc >= 16 && imc < 17) { return "Magreza Grau II"; }
			if (imc >= 17 && imc < 18.5) { return "Magreza Grau I"; }
			if (imc >= 18.5 && imc < 25) { return "Eutrofia"; }
			if (imc >= 25 && imc < 30) { return "Sobrepeso"; }
			if (imc >= 30 && imc < 35) { return "Obesidade Grau I"; }
			if (imc >= 35 && imc < 40) { return "Obesidade Grau II"; }
			if (imc >= 40) { return "Obesidade Grau III"; }
			return;

		} else {
			if (imc < 23) { return "Baixo Peso"; }
			if (imc >= 23 && imc < 28) { return "Eutrofia"; }
			if (imc >= 28 && imc < 30) { return "Sobrepeso"; }
			return "Obesidade";
		}
	};

	const tmb = () => {
		if (sexValue === "m") {
			if (ageValue < 3) { return (59.512 * weightValue - 30.4).toFixed(2); }
			if (ageValue >= 3 && ageValue < 10) { return (22.706 * weightValue + 504.3).toFixed(2); }
			if (ageValue >= 10 && ageValue < 18) { return (17.686 * weightValue + 658.2).toFixed(2); }
			if (ageValue >= 18 && ageValue < 30) { return (15.057 * weightValue + 692.2).toFixed(2); }
			if (ageValue >= 30 && ageValue < 60) { return (11.472 * weightValue + 873.1).toFixed(2); }
			return (11.711 * weightValue + 587.7).toFixed(2);

		} else {
			if (ageValue < 3) { return (58.317 * weightValue - 31.1).toFixed(2); }
			if (ageValue >= 3 && ageValue < 10) { return (20.317 * weightValue + 485.9).toFixed(2); }
			if (ageValue >= 10 && ageValue < 18) { return (13.384 * weightValue + 692.6).toFixed(2); }
			if (ageValue >= 18 && ageValue < 30) { return (14.818 * weightValue + 486.6).toFixed(2); }
			if (ageValue >= 30 && ageValue < 60) { return (8.126 * weightValue + 845.6).toFixed(2); }
			return (9.082 * weightValue + 658.5).toFixed(2);
		}
	}

	const vet = () => {
		if (ageValue < 19) { return; }
		if (ageValue >= 19 && ageValue < 60) {
			if (actValue === 0 || actValue === 1) { return (tmb() * 1.53).toFixed(2); }
			if (actValue === 2) { return (tmb() * 1.76).toFixed(2); }
			if (actValue === 3) { return (tmb() * 2.25).toFixed(2); }
			return;
		}
		return;
	}

	const gte = () => {
		if (ageValue < 9) { return; }
		if (ageValue >= 9 && ageValue < 18) {
			if (sex === "m") {
				if (actValue === 0) { return (88.5 - 61.9 * ageValue + 1.00 * (26.7 * weightValue + 903 * heightValue) + 25).toFixed(2); }
				if (actValue === 1) { return (88.5 - 61.9 * ageValue + 1.13 * (26.7 * weightValue + 903 * heightValue) + 25).toFixed(2); }
				if (actValue === 2) { return (88.5 - 61.9 * ageValue + 1.26 * (26.7 * weightValue + 903 * heightValue) + 25).toFixed(2); }
				if (actValue === 3) { return (88.5 - 61.9 * ageValue + 1.42 * (26.7 * weightValue + 903 * heightValue) + 25).toFixed(2); }
			} else {
				if (actValue === 0) { return (135.3 - 30.8 * ageValue + 1.00 * (10 * weightValue + 934 * heightValue) + 20).toFixed(2); }
				if (actValue === 1) { return (135.3 - 30.8 * ageValue + 1.16 * (10 * weightValue + 934 * heightValue) + 20).toFixed(2); }
				if (actValue === 2) { return (135.3 - 30.8 * ageValue + 1.31 * (10 * weightValue + 934 * heightValue) + 20).toFixed(2); }
				if (actValue === 3) { return (135.3 - 30.8 * ageValue + 1.56 * (10 * weightValue + 934 * heightValue) + 20).toFixed(2); }
			}
		} else {
			if (sex === "m") {
				if (actValue === 0) { return (662 - 9.53 * ageValue + 1.00 * (15.91 * weightValue + 539.6 * heightValue)).toFixed(2); }
				if (actValue === 1) { return (662 - 9.53 * ageValue + 1.11 * (15.91 * weightValue + 539.6 * heightValue)).toFixed(2); }
				if (actValue === 2) { return (662 - 9.53 * ageValue + 1.25 * (15.91 * weightValue + 539.6 * heightValue)).toFixed(2); }
				if (actValue === 3) { return (662 - 9.53 * ageValue + 1.48 * (15.91 * weightValue + 539.6 * heightValue)).toFixed(2); }
			} else {
				if (actValue === 0) { return (354 - 6.91 * ageValue + 1.00 * (9.35 * weightValue + 726 * heightValue)).toFixed(2); }
				if (actValue === 1) { return (354 - 6.91 * ageValue + 1.00 * (9.35 * weightValue + 726 * heightValue)).toFixed(2); }
				if (actValue === 2) { return (354 - 6.91 * ageValue + 1.27 * (9.35 * weightValue + 726 * heightValue)).toFixed(2); }
				if (actValue === 3) { return (354 - 6.91 * ageValue + 1.45 * (9.35 * weightValue + 726 * heightValue)).toFixed(2); }
			}
		}
	}

	localStorage.setItem('imc', imc);
	localStorage.setItem('imcClassification', imcClassification());
	localStorage.setItem('theoricalWeight', theoricalWeight);
	localStorage.setItem('vet', vet());
	localStorage.setItem('tmb', tmb());
	localStorage.setItem('gte', gte());

	location.href = "/results.html";
}
