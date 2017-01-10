var number = undefined;
var userinput = undefined;
var counter = undefined;
var wrong = [];
var c = 0;
function hello() {
	c = 0;
	wrong = [];
	document.getElementById("false").innerHTML = wrong;
	counter = 0;
	document.getElementById("counter").innerHTML = counter;
    number = Math.ceil(Math.random() * 10);
	document.getElementById("guess").innerHTML = number;
	setTimeout(guess, 600);
}

function guess() {
    userinput = prompt("please enter your guess");
    check();
}

function check() {
    if (userinput == number) {
        document.getElementById("message").innerHTML= "You guessed correctly";
		counterupdate();
		clearInterval(myTimer);
	}else if (userinput > number && userinput < 11){
		document.getElementById("message").innerHTML= "Your guess was too high";
		counterupdate()
		wronglist()
		setTimeout(guess, 1500);
	}else if (userinput < number && userinput > 0){
		document.getElementById("message").innerHTML= "Your guess was too low";
		counterupdate()
		wronglist()
		setTimeout(guess, 1500);
	}else if(userinput > 10 || userinput < 1){
		document.getElementById("message").innerHTML= "Guesses must be between 1 and 10";
		setTimeout(guess, 1500);
    }else{
        document.getElementById("message").innerHTML = "You guessed wrong, please try again";
		counterupdate()
		wronglist()
		setTimeout(guess, 1500);
    }
}
function counterupdate(){
	counter += 1;
	document.getElementById("counter").innerHTML = counter;
}
function wronglist(){
	wrong[counter] = userinput;
	document.getElementById("false").innerHTML = wrong;
}
function myCounter() {
    document.getElementById("timer").innerHTML = ++c;
}