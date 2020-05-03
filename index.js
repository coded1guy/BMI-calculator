function calcBMI() {
	var height = Number(document.getElementById('height').value);
	var weight = Number(document.getElementById('weight').value);
	var result = weight / (height * height);
	document.getElementById("BMI_result").innerHTML = "Your BMI is  " + result.toFixed(2);
}