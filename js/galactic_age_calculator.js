export class Person
{
	constructor(month,day,year,country)
	{
		this.month = month;
		this.day = day;
		this.year = year;
		this.country = country;
		this.expectancy = {};
		this.expectancy["japan"] = 83.7;
		this.expectancy["switzerland"] = 83.4;
		this.expectancy["singapore"] = 83.1;
		this.expectancy["australia"] = 82.8;
		this.expectancy["spain"] = 82.8;
		this.expectancy["iceland"] = 82.7;
		this.expectancy["india"] = 68.3;
		this.expectancy["usa"] =78;
	}	
	calculateEarthAge(birth_month,birth_day,birth_year)
	{
		var today_date = new Date();
		var today_year = today_date.getFullYear();
		var today_month = today_date.getMonth();
		var today_day = today_date.getDate();
		var earthAge = today_year - birth_year;

		if ( today_month < (birth_month - 1))
		{
			earthAge--;
		}
		if (((birth_month - 1) == today_month) && (today_day < birth_day))
		{
			earthAge--;
		} 
		earthAge = earthAge*(24*60*60*365);
		return earthAge.toFixed(2);
	}
	calculateMercuryAge(birth_month,birth_day,birth_year)
	{
		let earthAge = calculateCurrentAge(birth_month,birth_day,birth_year);
		let mercuryAge = earthAge/(24*60*60*365*0.24); 
		return mercuryAge.toFixed(2);
	}	
	calculateVenusAge(birth_month,birth_day,birth_year)
	{
		let earthAge = calculateCurrentAge(birth_month,birth_day,birth_year);
		let venusAge = earthAge/(24*60*60*365*0.62); 
		return venusAge.toFixed(2);
	}	
	calculateMarsAge(birth_month,birth_day,birth_year)
	{
		let earthAge = calculateCurrentAge(birth_month,birth_day,birth_year);
		let marsAge = earthAge/(24*60*60*365*1.88); 
		return marsAge.toFixed(2);
	}	
	calculateJupiterAge(birth_month,birth_day,birth_year)
	{
		let earthAge = calculateCurrentAge(birth_month,birth_day,birth_year);
		let jupiterAge = earthAge/(24*60*60*365*11.86); 
		return jupiterAge.toFixed(2);
	}
	calculateLifeExpectancy(birth_month,birth_day,birth_year,planet,country)
	{
		var lifeLeft = 0.0;
		var planetAge = 0.0;
		if(planet == "mercury")
		{
			planetAge = calculateMercuryAge(birth_month,birth_day,birth_year);
		}
		if(planet == "earth")
		{
			planetAge = calculateEarthAgeAge(birth_month,birth_day,birth_year);
		}
		if(planet == "mars")
		{
			planetAge = calculateMarsAge(birth_month,birth_day,birth_year);
		}
		if(planet == "jupiter")
		{
			planetAge = calculateJupiterAge(birth_month,birth_day,birth_year);
		}
		if(planet == "venus")
		{
			planetAge = calculateVenusAge(birth_month,birth_day,birth_year);
		}
		if(this.expectancy.hasOwnProperty(country))
		{
			let temp = target[key];
			lifeLeft = temp - planetAge;
		}
		return lifeLeft;
	}
	calculateAges(birth_month,birth_day,birth_year)
	{
		var ages = [];
		
		var earth_age = calculateEarthAgeAge(birth_month,birth_day,birth_year);
		ages.push(earth_age);
		var mercury_age = calculateMercuryAge(birth_month,birth_day,birth_year);
		ages.push(mercury_age);
		var mars_age = calculateMarsAge(birth_month,birth_day,birth_year);		
		ages.push(mars_age);
		var venus_age = calculateVenusAge(birth_month,birth_day,birth_year);
		ages.push(venus_age);
		var jupiter_age = calculateJupiterAge(birth_month,birth_day,birth_year);
		ages.push(jupiter_age);
		
		return ages;
	}
	calculateLives(birth_month,birth_day,birth_year,country)
	{
		var lifeLeft = [];
		
		var earthLifeLeft = calculateLifeExpectancy(birth_month,birth_day,birth_year,earth,country);
		lifeLeft["earth"] = earthLifeLeft;
		var mercuryLifeLeft = calculateLifeExpectancy(birth_month,birth_day,birth_year,mercury,country);
		lifeLeft["mercury"] = mercuryLifeLeft;
		var marsLifeLeft = calculateLifeExpectancy(birth_month,birth_day,birth_year,mars,country);
		lifeLeft["mars"] = marsLifeLeft;;
		var venusLifeLeft = calculateLifeExpectancy(birth_month,birth_day,birth_year,venus,country);
		lifeLeft["venus"] = venusLifeLeft;
		var jupiterLifeLeft = calculateLifeExpectancy(birth_month,birth_day,birth_year,jupiter,country);
		lifeLeft[jupiter] = jupiterLifeLeft;
		
		return lifeLeft;
	}
}