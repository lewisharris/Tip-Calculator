function tipCalculate(slider,bill){
	var tip = document.getElementById('tip');
	var slideVal = document.getElementById('slideVal');
	var bill = document.getElementById(bill).value;
	var	prcnt = slider * 0.01;

	tip.innerHTML = "£" + (bill * prcnt).toFixed(2);
	slideVal.innerHTML = slider + '%';
}


function autoTipCalculate(bill, prcnt) {
	var autobill = bill * 0.01;
	tip.innerHTML = "£" + (autobill*slider.value).toFixed(2);
}
