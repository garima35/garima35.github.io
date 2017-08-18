 
var number = Math.floor((Math.random() * 100) + 1);

function playAgain(){
	document.getElementById("guess_text").value = "";
	number = Math.floor((Math.random() * 100) + 1);
	document.getElementById("play2").style.display = "none";
    document.getElementById("result").innerHTML = ""; 
    document.getElementById("gaveUp").style.display = "inline";  
    document.getElementById("guessed").style.display = "inline";
    document.getElementById("guess_text").focus();
}

function user_guess(){
	var guess_number_string = document.getElementById("guess_text").value;
    var guess_number_int = parseInt(guess_number_string);
    document.getElementById("result").style.display = "inline";
    
    if ( guess_number_string.length == 0){
    	document.getElementById("result").innerHTML = "Cannot be blank.";
        document.getElementById("guess_text").focus();
        document.getElementById("guess_text").value = "";
    }
    else if (guess_number_int < 1 || guess_number_int > 100){
    	document.getElementById("result").innerHTML = "You can only guess a number between 1 and 100.";
        document.getElementById("guess_text").focus();
        document.getElementById("guess_text").value = "";
    }
    
	else if (guess_number_int == number){	 
        document.getElementById("result").innerHTML = "You're right! The number was " + number + ".";
        document.getElementById("play2").style.display = "inline";
        document.getElementById("gaveUp").style.display = "none";   
    }
    else if (guess_number_int < number){
    	document.getElementById("result").innerHTML = "More than " + guess_number_int + ". <br><p> Guess again!</p>";
        document.getElementById("guess_text").value = "";
        document.getElementById("guess_text").focus();
    }
    else if (guess_number_int > number){
    	document.getElementById("result").innerHTML = "Less than " + guess_number_int + ". <br><p> Guess again!</p>";
        document.getElementById("guess_text").value = "";
        document.getElementById("guess_text").focus();
    }
}

function user_giveUp(){
	var give_up = "";
    var did_give_up = confirm("Are you SURE you want to give up?");
    
    if (did_give_up == true) {
        give_up = "The number was " + number + ". Try again?";
        document.getElementById("play2").style.display = "inline";
        document.getElementById("guessed").style.display = "none";
        document.getElementById("guess_text").value = "";
    }
    else {
    	document.getElementById("guess_text").focus();
    }
	document.getElementById("result").innerHTML = give_up;
}

/*this function doesn't let you press certain keys using their corresponding key code*/
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
