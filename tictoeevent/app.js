var bench = document.getElementById("bench");
var a;

bench.addEventListener("keyup",function(e){
    console.log(e.target);
    validateKey(e.target);
    validate();
})




function validateKey(ele) {
	if (a === ele.value) {
		ele.value = "";
	}

	if (ele.value !== "X" &&
		ele.value !== "x" &&
		ele.value !== "O" &&
		ele.value !== "o"
	) {
		ele.value = "";
	}
	else {
		validate(ele);
		a = ele.value;
	}
}

function validate(ele) {
	var character = ele.value;
	if (
		ele.id === '1' ||
		ele.id === '4' ||
		ele.id === '7' ||
		ele.id === '2' ||
		ele.id === '3' ||
		ele.id === '5' ||
		ele.id === '9'
	) {
		var one = document.getElementById("1");
		var four = document.getElementById("4");
		var seven = document.getElementById("7");
		var two = document.getElementById("2");
		var three = document.getElementById("3");
		var five = document.getElementById("5");
		var nine = document.getElementById("9");
		if (
			(one.value === character &&
				four.value === character &&
				seven.value === character
			) ||
			(one.value === character &&
				two.value === character &&
				three.value === character
			) ||
			(one.value === character &&
				five.value === character &&
				nine.value === character
			)
		) {
			alert(character + " won the game");
		}
	}
	if (
		ele.id === '1' ||
		ele.id === '2' ||
		ele.id === '3' ||
		ele.id === '4' ||
		ele.id === '5' ||
		ele.id === '6' ||
		ele.id === '7' ||
		ele.id === '8' ||
		ele.id === '9'
	) {
		var one = document.getElementById("1");
		var two = document.getElementById("2");
		var three = document.getElementById("3");
		var four = document.getElementById("4");
		var five = document.getElementById("5");
		var six = document.getElementById("6");
		var seven = document.getElementById("7");
		var eight = document.getElementById("8");
		var nine = document.getElementById("9");
		if (
			(three.value === character &&
				five.value === character &&
				seven.value === character
			) ||
			(two.value === character &&
				five.value === character &&
				eight.value === character
			) ||
			(four.value === character &&
				five.value === character &&
				six.value === character
			)
		) {
			alert(character + " won the game");
		}
	}
	if (
		ele.id === '1' ||
		ele.id === '3' ||
		ele.id === '5' ||
		ele.id === '6' ||
		ele.id === '7' ||
		ele.id === '8' ||
		ele.id === '9'
	) {
		var one = document.getElementById("1");
		var three = document.getElementById("3");
		var five = document.getElementById("5");
		var six = document.getElementById("6");
		var seven = document.getElementById("7");
		var eight = document.getElementById("8");
		var nine = document.getElementById("9");

		if (
			(
				three.value === character &&
				six.value === character &&
				nine.value === character
			) ||
			(
				seven.value === character &&
				eight.value === character &&
				nine.value === character
			)
		) {
			alert(character + " won the game");
		}
	}
}