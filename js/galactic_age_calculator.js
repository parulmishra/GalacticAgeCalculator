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
		let earthAge = this.calculateEarthAge(birth_month,birth_day,birth_year);
		let mercuryAge = earthAge/(24*60*60*365*0.24); 
		return mercuryAge.toFixed(2);
	}	
	calculateVenusAge(birth_month,birth_day,birth_year)
	{
		let earthAge = this.calculateEarthAge(birth_month,birth_day,birth_year);
		let venusAge = earthAge/(24*60*60*365*0.62); 
		return venusAge.toFixed(2);
	}	
	calculateMarsAge(birth_month,birth_day,birth_year)
	{
		let earthAge = this.calculateEarthAge(birth_month,birth_day,birth_year);
		let marsAge = earthAge/(24*60*60*365*1.88); 
		return marsAge.toFixed(2);
	}	
	calculateJupiterAge(birth_month,birth_day,birth_year)
	{
		let earthAge = this.calculateEarthAge(birth_month,birth_day,birth_year);
		let jupiterAge = earthAge/(24*60*60*365*11.86); 
		return jupiterAge.toFixed(2);
	}
	calculateLifeExpectancyForEarth(birth_month,birth_day,birth_year,country)
	{
		var planetAge = this.calculateEarthAge(birth_month,birth_day,birth_year);
		var lifeLeft = this.expectancy["earth"] - planetAge;
		return lifeLeft;
	}
	calculateLifeExpectancyForMercury(birth_month,birth_day,birth_year,country)
	{
		var planetAge = this.calculateMercuryAge(birth_month,birth_day,birth_year);
		var lifeLeft = this.expectancy["mercury"] - planetAge;
		return lifeLeft;
	}
	calculateLifeExpectancyForMars(birth_month,birth_day,birth_year,country)
	{
		var planetAge = this.calculateMarsAge(birth_month,birth_day,birth_year);
		var lifeLeft = this.expectancy["mars"] - planetAge;
		return lifeLeft;
	}
	calculateLifeExpectancyForVenus(birth_month,birth_day,birth_year,country)
	{
		var planetAge = this.calculateVenusAge(birth_month,birth_day,birth_year);
		var lifeLeft = this.expectancy["venus"] - planetAge;
		return lifeLeft;
	}
	calculateLifeExpectancyForJupiter(birth_month,birth_day,birth_year,country)
	{
		var planetAge = this.calculateJupiterAge(birth_month,birth_day,birth_year);
		var lifeLeft = this.expectancy["jupiter"] - planetAge;
		return lifeLeft;
	}

	calculateAges(birth_month,birth_day,birth_year)
	{
		var ages = [];
		
		var earth_age = this.calculateEarthAge(birth_month,birth_day,birth_year);
		ages.push(earth_age);
		var mercury_age = this.calculateMercuryAge(birth_month,birth_day,birth_year);
		ages.push(mercury_age);
		var mars_age = this.calculateMarsAge(birth_month,birth_day,birth_year);		
		ages.push(mars_age);
		var venus_age = this.calculateVenusAge(birth_month,birth_day,birth_year);
		ages.push(venus_age);
		var jupiter_age = this.calculateJupiterAge(birth_month,birth_day,birth_year);
		ages.push(jupiter_age);
		
		return ages;
	}
	
}