function pfunction(){
	var num = parseInt(prompt("Please enter a POSITIVE number:", "8"));
	
	isPositive(num);	
}

function isPositive(x) {
   
	var z;
   
    if (isNaN(x) || x < 0 ) {
        alert("Input not positive");
    } else {
        z = factorial(x);
		if(z < 10){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color = "blue";
		}
		else if (z < 100){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color = "red";
			document.getElementById("demo").style.fontSize = "200%";
		}
		else if (z < (1000)){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color =  "black";
			document.getElementById("demo").style.fontSize = "300%";
		}
		else if (z < (10000)){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color =  "orange";
			document.getElementById("demo").style.fontSize = "400%";
		}
		else if (z < (100000)){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color =  "pink";
			document.getElementById("demo").style.fontSize = "500%";
		}
		else if (z < (10*10*10*10*10*10)){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color =  "brown";
			document.getElementById("demo").style.fontSize = "600%";
		}
		else if (z < (10*10*10*10*10*10*10)){
			document.getElementById("demo").innerHTML = z;
			document.getElementById("demo").style.color =  "teal";
			document.getElementById("demo").style.fontSize = "700%";
		}
		else{
		document.getElementById("demo").innerHTML = z;
		document.getElementById("demo").style.color = "green";}
		
    }
	
}

function factorial(y){
	
	if(y == 0){
		return 1;
	}
	else{
		return(y * factorial(y-1));
	}
}

function verifyEmail(){

var status = false;     

var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var strlen = document.myform.email1.value.length;
var str = document.myform.email1.value;
var output = "";

	if (document.myform.email1.value.search(emailRegEx) == -1) {
		//document.myform.email1.value= strlen;
		for(var i = 0; i < strlen; i++)
			{
			if(str.charAt(i) == "!" || str.charAt(i) == "^" )
				{
				output = output.concat(str.charAt(i)) + '\u0336' ;
				}
			else
				{
				output = output.concat(str.charAt(i));
				}
			}
		document.myform.email1.value = output;
         }
		else {
			status = true;
         }
			return status;
    }

function check() {
	var checkString = document.myform.email2.value;
	if (checkString != "") {
		if ( /[^A-Za-z0-9@\.]/.test(checkString)) {
			alert("Invalid character entered");
			return (false);
		}
	}	
}

document.getElementById("cat").style.top = "0px";
document.getElementById("cat").style.left = (window.innerWidth / 2 - 50) + "px";

function move(event) {
	var cat = document.getElementById("cat");
	
    var x = (event.pageX - 50);
    var y = (event.pageY - 50);
  
	var move = setInterval(animate,5);
	var catx = parseInt(cat.style.left, 10);
	var caty = parseInt(cat.style.top, 10);
	

	function animate() {
	if(catx != x)
		if( catx > x) {cat.style.left= --catx + "px";}
		else {cat.style.left= ++catx + "px";}
		
	if(caty != y)
		if(caty > y) {cat.style.top= --caty + "px";}
		else {cat.style.top= ++caty + "px";}
		
	if(catx == x && caty == y){
		clearInterval(move);
		}	
	}
}











