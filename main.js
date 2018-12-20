$(document).ready(function(){
		var filter = commonWords.filter(word => word.length >= 3);

		var random = filter[Math.floor(Math.random()*filter.length)];

		var answer = []

		var attempt = 8

		var attemptIn = document.querySelector("#attempt")

			attemptIn.innerHTML = attempt

		random.split('').forEach(word => answer.push('_'));

		var placeIn = document.querySelector("#underscore")

			placeIn.innerHTML = answer

		console.log(random)
		console.log(answer)
		
		var used = []

		$("#answertext").on("change", function(){
				 attempt--
				
				var letter = $("#answertext").val()

				if(used.indexOf(letter) === -1){
					used.push(letter)

				document.querySelector("#letterguess").innerHTML = used

				console.log(used);

				var playerAnswer = $("#answertext").val();
				console.log(playerAnswer)

				var counter = document.querySelector("#attempt")
				counter.innerHTML = attempt

				if(attempt === 7){
					$("#lifebar").css("width", "220")
				} else if (attempt === 6){
					$("#lifebar").css("width", "203")
				} else if (attempt === 5){
					$("#lifebar").css("width", "185")
				} else if (attempt === 4){
					$("#lifebar").css("width", "166")
				} else if (attempt === 3){
					$("#lifebar").css("width", "149")
				} else if (attempt === 2){
					$("#lifebar").css("width", "130")
				} else if (attempt === 1){
					$("#lifebar").css("width", "113")
				} else if (attempt === 0){
					$("#lifebar").css("width", "95")
				} 
		
				random.split('').forEach(function(e, i){
					
					if(playerAnswer === e){
					answer[i] = playerAnswer
					placeIn.innerHTML = answer.join('')
					}	

					if( answer.join('') === random ){
				
					document.querySelector("#status").innerHTML = "You win!"
					$('#answertext').prop("readonly", true)

					} 

					if (attempt === 0) {
					document.querySelector("#status").innerHTML = "You lose!"
					$('#answertext').prop("readonly", true)

					}
				
				})

			}
				
				
			})

})







	

