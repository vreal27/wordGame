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
	

	$("#answertext").on("change", function(){
			
			
			var playerAnswer = $("#answertext").val();
			console.log(playerAnswer)

			var counter = document.querySelector("#attempt")
			counter.innerHTML = attempt--
	
			random.split('').forEach(function(e, i){
				
				if(playerAnswer === e){
				answer[i] = playerAnswer
				placeIn.innerHTML = answer.join('')
				}	

				if( answer.join('') === random ){
			
				document.querySelector("#status").innerHTML = "You win!"
				$('#answertext').prop("readonly", true)

				} 

				if (attempt === -1) {
				document.querySelector("#status").innerHTML = "You lose!"
				$('#answertext').prop("readonly", true)

			}
			
			})





		})

})







	

