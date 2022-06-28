$(document).ready(function(){
	$('#one').click(function(){
		document.forms.display.value += 1;
	});

	$('#two').click(function(){
		document.forms.display.value += 2;
	});

	$('#three').click(function(){
		document.forms.display.value += 3;
	});

	$('#four').click(function(){
		document.forms.display.value += 4;
	});

	$('#five').click(function(){
		document.forms.display.value += 5;
	});

	$('#six').click(function(){
		document.forms.display.value += 6;
	});

	$('#seven').click(function(){
		document.forms.display.value += 7;
	});

	$('#eight').click(function(){
		document.forms.display.value += 8;
	});

	$('#nine').click(function(){
		document.forms.display.value += 9;
	});

	$('#zero').click(function(){
		document.forms.display.value += 0;
	});

	$('#addition').click(function(){
		document.forms.display.value += '+';
	});

	$('#sub').click(function(){
		document.forms.display.value += '-';
	});

	$('#mul').click(function(){
		document.forms.display.value += '*';
	});

	$('#division').click(function(){
		document.forms.display.value += '/';
	});

	$('#dot').click(function(){
		document.forms.display.value += '.';
	});

	$('#equal').click(function(){
		if (display.value == "") {
			alert("Please enter any value");
		}
		else{
			document.forms.display.value = eval(document.forms.display.value);
		}
	});

	$('#clear').click(function(){
		document.forms.display.value = "";
	});
})





































// calculater design 2


// function getHistory(){
// 	return document.getElementById("historyValue").innerText;
// }
// function printHistory(num){
// 	document.getElementById("historyValue").innerText=num;
// }
// function getOutput(){
// 	return document.getElementById("outputValue").innerText;
// }
// function printOutput(num){
// 	if(num==""){
// 		document.getElementById("outputValue").innerText=num;
// 	}
// 	else{
// 		document.getElementById("outputValue").innerText=getFormattedNumber(num);
// 	}	
// }
// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }
// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
// 	operator[i].addEventListener('click',function(){
// 		if(this.id=="clear"){
// 			printHistory("");
// 			printOutput("");
// 		}
// 		else if(this.id=="backspace"){
// 			var output=reverseNumberFormat(getOutput()).toString();
// 			if(output){//if output has a value
// 				output= output.substr(0,output.length-1);
// 				printOutput(output);
// 			}
// 		}
// 		else{
// 			var output=getOutput();
// 			var history=getHistory();
// 			if(output==""&&history!=""){
// 				if(isNaN(history[history.length-1])){
// 					history= history.substr(0,history.length-1);
// 				}
// 			}
// 			if(output!="" || history!=""){
// 				output= output==""?output:reverseNumberFormat(output);
// 				history=history+output;
// 				if(this.id=="="){
// 					var result=eval(history);
// 					printOutput(result);
// 					printHistory("");
// 				}
// 				else{
// 					history=history+this.id;
// 					printHistory(history);
// 					printOutput("");
// 				}
// 			}
// 		}
		
// 	});
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNumberFormat(getOutput());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			printOutput(output);
// 		}
// 	});
// }