function calcBMI() {
	var height = Number(document.getElementById('height').value);
	var weight = Number(document.getElementById('weight').value);
	var result = weight / height * height;
	document.getElementById("BMI_result").innerHTML = "Your BMI is  " + result.toFixed(2);
        //remarks for the bmi
        if ( result < 15 ) {
            document.getElementById("advice").InnerHTML = "Very severely underweight";
        } else if ( result < 16) {
            document.getElementById("advice").innerHTML = "Severely underweight";
        } else if ( result < 18.5 ) {
            document.getElementById("advice").innerHTML = "Underweight";
        } else if ( result < 25 ) {   
            document.getElementById("advice").innerHTML = "Normal (healthy weight)";
        } else if ( result < 30 ) {
            document.getElementById("advice").innerHTML "Overweight";
        } else if ( result < 35 ) {
            document.getElementById("advice").innerHTML = "Moderately obese";
        } else if ( result < 40 ) {
            document.getElementById("advice").innerHTML = "Severely obese";
        } else {
            document.getElementById("advice").innerHTML = "Very severely obese";
    };
};
