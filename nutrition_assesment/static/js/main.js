function validateForm() {
	let name = document.forms['form']['name'].value;
	let age = document.forms['form']['age'].value;
	let weight = document.forms['form']['weight'].value.replace(",", ".");
	let height = document.forms['form']['height'].value.replace(",", ".");

	if (name == "") {
		alert("Preencha o nome corretamente");
		return false;
	} else if (age == "" || isNaN(age)) {
		alert("Preencha a idade corretamente");
		return false;
	} else if (weight == "" || isNaN(weight)) {
		alert("Preencha o peso corretamente");
		return false;
	} else if (height == "" || isNaN(height)) {
		alert("Preencha a altura corretamente");
		return false;
	} else {
		return true;
	}
}
