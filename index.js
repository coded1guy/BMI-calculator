function calcBMI() {
	var height = Number(document.getElementById('height').value);
	var rheight = height*0.3048780488;
	var weight = Number(document.getElementById('weight').value);
	var result = weight / (rheight*rheight);
	document.getElementById("BMI_result").innerHTML = "Your BMI is  " + result.toFixed(2);
}