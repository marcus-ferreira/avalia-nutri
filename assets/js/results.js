const result = document.querySelector(".result-container");
const imcResult = document.querySelector(".imc");
const theoricalWeightResult = document.querySelector(".theoricalWeight");
const vetResult = document.querySelector(".vet");
const tmbResult = document.querySelector(".tmb");
const gteResult = document.querySelector(".gte");

const imc = localStorage.getItem('imc');
const imcClassification = localStorage.getItem('imcClassification');
const theoricalWeight = localStorage.getItem('theoricalWeight');
const vet = localStorage.getItem('vet');
const tmb = localStorage.getItem('tmb');
const gte = localStorage.getItem('gte');

imcResult.innerHTML = imc + " <span>kg/m²</span>" + `<span> - ${imcClassification}</span>`;
theoricalWeightResult.innerHTML = theoricalWeight + " <span>kg</span>";
vetResult.innerHTML = vet + " <span>kcal</span>";
tmbResult.innerHTML = tmb + " <span>kcal</span>";
gteResult.innerHTML = gte + " <span>kcal</span>";

function redo() {
	location.href = "/index.html";
}
