import { Person } from './../js/galactic_age_calculator.js';

$(document).ready(function(){
	
	$("#calculate").submit(function(event){
		
		event.preventDefault();
		
		var day = $("#day").val();
		console.log(day);
		var month = $("#month").val();
		var year = $("#year").val();
		var country = $("#country option:selected").val();
		
		var newPerson = new Person(month,day,year,country);
		
		var ages = newPerson.calculateAges(month,day,year);
		
		$("#earthage").html("Your Age on Earth is : " + ages[0] + " seconds");
		$("#mercuryage").html("Your Age on Mercury is : " + ages[1] + " years");
		$("#marsage").html("Your Age on Mars is : " + ages[2] + " years");
		$("#venusage").html("Your Age on Venus is : " + ages[3] + " years");
		$("#jupiterage").html("Your Age on Jupiter is : " + ages[4] + " years");
		
		$("#earthlife").html("Your life left in years on Earth: " + newPerson.calculateLifeExpectancyForEarth(month,day,year,country) + " seconds");
		$("#mercurylife").html("Your life left in years on Mercury: " + newPerson.calculateLifeExpectancyForMercury(month,day,year,country) + " years");
		$("#marslife").html("Your life left in years on Mars: " + newPerson.calculateLifeExpectancyForMars(month,day,year,country) + " years");
		$("#venuslife").html("Your life left in years on Venus: " + newPerson.calculateLifeExpectancyForVenus(month,day,year,country) + " years");
		$("#jupiterlife").html("Your life left in years on Jupiter: " + newPerson.calculateLifeExpectancyForJupiter(month,day,year,country) + " years");
		
	});
});