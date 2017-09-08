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
		var lives = newPerson.calculateLives(month,day,year,country);
		
		$("#earthage").html(ages[0] + " seconds");
		$("#mercuryage").html(ages[1] + " years");
		$("#marsage").html(ages[2] + " years");
		$("#venusage").html(ages[3] + " years");
		$("#jupiterage").html(ages[4] + " years");
		
		$("#earthlife").html(lives[0] + " seconds");
		$("#mercurylife").html(lives[1] + " years");
		$("#marslife").html(lives[2] + " years");
		$("#venuslife").html(lives[3] + " years");
		$("#jupiterlife").html(lives[4] + " years");
		
	});
});