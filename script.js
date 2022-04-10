function calculate() {

	// Inputs
	let sex = document.getElementById('sex').value;
	let age = parseInt(document.getElementById('age').value);
	let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
	let height = parseFloat(document.getElementById('height').value.replace(',', '.'));
	let act = parseInt(document.getElementById('act').value);

	let imc = () => {
		return (weight / (height ** 2)).toFixed(2);
	};

	let averageImc = () => {
		if (sex === "m") {
			return 22;
		} else if (sex === "f") {
			return 20;
		} else {
			return undefined;
		}
	};

	let imcClassification = () => {

		if (age < 10) {
			return "Não calculado devido à faixa etária.";

		} else if (age >= 10 && age < 20) {
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

			if (imc() < percentil[sex][age][0]) {
				return "<5%: Baixo Peso";
			} else if (imc() >= percentil[sex][age][0] && imc() < percentil[sex][age][1]) {
				return "5~15%: Eutrofia";
			} else if (imc() >= percentil[sex][age][1] && imc() < percentil[sex][age][2]) {
				return "15~50%: Eutrofia";
			} else if (imc() >= percentil[sex][age][2] && imc() < percentil[sex][age][3]) {
				return "50~85%: Eutrofia";
			} else if (imc() >= percentil[sex][age][3] <= imc() < percentil[sex][age][4]) {
				return "85~95%: Sobrepeso";
			} else {
				return ">95%: Obesidade";
			}

		} else if (age >= 20 && age < 65) {
			if (imc() < 16) {
				return "Magreza Grau III";
			} else if (imc() >= 16 && imc() < 17) {
				return "Magreza Grau II";
			} else if (imc() >= 17 && imc() < 18.5) {
				return "Magreza Grau I";
			} else if (imc() >= 18.5 && imc() < 25) {
				return "Eutrofia";
			} else if (imc() >= 25 && imc() < 30) {
				return "Sobrepeso";
			} else if (imc() >= 30 && imc() < 35) {
				return "Obesidade Grau I";
			} else if (imc() >= 35 && imc() < 40) {
				return "Obesidade Grau II";
			} else if (imc() >= 40) {
				return "Obesidade Grau III";
			} else {
				return undefined;
			}

		} else {
			if (imc() < 23) {
				return "Baixo Peso";
			} else if (imc() >= 23 && imc() < 28) {
				return "Eutrofia";
			} else if (imc() >= 28 && imc() < 30) {
				return "Sobrepeso";
			} else {
				return "Obesidade";
			}
		}
	};

	let theoricalWeight = () => {
		return (averageImc() * (height ** 2)).toFixed(2);
	}

	let vet = () => {
		if (age >= 19 && age < 60) {
			if (act === 0 || act === 1) {
				return (tmb() * 1.53).toFixed(2);
			} else if (act === 2) {
				return (tmb() * 1.76).toFixed(2);
			} else if (act === 3) {
				return (tmb() * 2.25).toFixed(2);
			} else {
				return null;
			}
		} else {
			return undefined;
		}
	}

	let tmb = () => {

		if (sex === "m") {
			if (age < 3) {
				return (59.512 * weight - 30.4).toFixed(2);
			} else if (age >= 3 && age < 10) {
				return (22.706 * weight + 504.3).toFixed(2);
			} else if (age >= 10 && age < 18) {
				return (17.686 * weight + 658.2).toFixed(2);
			} else if (age >= 18 && age < 30) {
				return (15.057 * weight + 692.2).toFixed(2);
			} else if (age >= 30 && age < 60) {
				return (11.472 * weight + 873.1).toFixed(2);
			} else {
				return (11.711 * weight + 587.7).toFixed(2);
			}
		} else {
			if (age < 3) {
				return (58.317 * weight - 31.1).toFixed(2);
			} else if (age >= 3 && age < 10) {
				return (20.317 * weight + 485.9).toFixed(2);
			} else if (age >= 10 && age < 18) {
				return (13.384 * weight + 692.6).toFixed(2);
			} else if (age >= 18 && age < 30) {
				return (14.818 * weight + 486.6).toFixed(2);
			} else if (age >= 30 && age < 60) {
				return (8.126 * weight + 845.6).toFixed(2);
			} else {
				return (9.082 * weight + 658.5).toFixed(2);
			}
		}
	}

	let gte = () => {

		if (age < 9) {
			return undefined;

		} else if (age >= 9 && age < 18) {
			if (sex === "m") {
				switch (act) {
					case 0:
						return (88.5 - 61.9 * age + 1.00 * (26.7 * weight + 903 * height) + 25).toFixed(2);
					case 1:
						return (88.5 - 61.9 * age + 1.13 * (26.7 * weight + 903 * height) + 25).toFixed(2);
					case 2:
						return (88.5 - 61.9 * age + 1.26 * (26.7 * weight + 903 * height) + 25).toFixed(2);
					case 3:
						return (88.5 - 61.9 * age + 1.42 * (26.7 * weight + 903 * height) + 25).toFixed(2);
					default:
						break;
				}
			} else {
				switch (act) {
					case 0:
						return (135.3 - 30.8 * age + 1.00 * (10 * weight + 934 * height) + 20).toFixed(2);
					case 1:
						return (135.3 - 30.8 * age + 1.16 * (10 * weight + 934 * height) + 20).toFixed(2);
					case 2:
						return (135.3 - 30.8 * age + 1.31 * (10 * weight + 934 * height) + 20).toFixed(2);
					case 3:
						return (135.3 - 30.8 * age + 1.56 * (10 * weight + 934 * height) + 20).toFixed(2);
					default:
						break;
				}
			}
		} else {
			if (sex === "m") {
				switch (act) {
					case 0:
						return (662 - 9.53 * age + 1.00 * (15.91 * weight + 539.6 * height)).toFixed(2);
					case 1:
						return (662 - 9.53 * age + 1.11 * (15.91 * weight + 539.6 * height)).toFixed(2);
					case 2:
						return (662 - 9.53 * age + 1.25 * (15.91 * weight + 539.6 * height)).toFixed(2);
					case 3:
						return (662 - 9.53 * age + 1.48 * (15.91 * weight + 539.6 * height)).toFixed(2);
					default:
						break;
				}
			} else {
				switch (act) {
					case 0:
						return (354 - 6.91 * age + 1.00 * (9.35 * weight + 726 * height)).toFixed(2);
					case 1:
						return (354 - 6.91 * age + 1.00 * (9.35 * weight + 726 * height)).toFixed(2);
					case 2:
						return (354 - 6.91 * age + 1.27 * (9.35 * weight + 726 * height)).toFixed(2);
					case 3:
						return (354 - 6.91 * age + 1.45 * (9.35 * weight + 726 * height)).toFixed(2);
					default:
						break;
				}
			}
		}
	}

	let imcResult = document.getElementById("imc");
	let theoricalWeightResult = document.getElementById("theoricalWeight");
	let vetResult = document.getElementById("vet");
	let tmbResult = document.getElementById("tmb");
	let gteResult = document.getElementById("gte");

	imcResult.innerHTML = imc() + " <span>kg/m²</span>" + `<span> - ${imcClassification()}</span>`;
	theoricalWeightResult.innerHTML = theoricalWeight() + " <span>kg</span>";
	vetResult.innerHTML = vet() + " <span>kcal</span>";
	tmbResult.innerHTML = tmb() + " <span>kcal</span>";
	gteResult.innerHTML = gte() + " <span>kcal</span>";

	displayResults();
}

function displayResults() {
	let main = document.getElementById("main-container");
	let result = document.getElementById("result-container");
	window.scrollTo(0, 0);
	main.style.display = "none";
	result.style.display = "block";
}

function redo() {
	location.reload();
	window.scrollTo(0, 0);
}