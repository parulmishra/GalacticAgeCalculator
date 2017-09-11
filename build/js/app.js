(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
	function Person(month, day, year, country) {
		_classCallCheck(this, Person);

		this.month = month;
		this.day = day;
		this.year = year;
		this.country = country;
		this.expectancy = {};
		this.expectancy.Add("japan", 83.7);
		this.expectancy.Add("switzerland", 83.4);
		this.expectancy.Add("singapore", 83.1);
		this.expectancy.Add("australia", 82.8);
		this.expectancy.Add("spain", 82.8);
		this.expectancy.Add("iceland", 82.7);
		this.expectancy.Add("india", 68.3);
		this.expectancy.Add("usa", 78);
	}

	_createClass(Person, [{
		key: "GetExpectancy",
		value: function GetExpectancy(key) {
			return this.expectancy[key];
		}
	}, {
		key: "calculateEarthAge",
		value: function calculateEarthAge(birth_month, birth_day, birth_year) {
			var today_date = new Date();
			var today_year = today_date.getFullYear();
			var today_month = today_date.getMonth();
			var today_day = today_date.getDate();
			var earthAge = today_year - birth_year;

			if (today_month < birth_month - 1) {
				earthAge--;
			}
			if (birth_month - 1 == today_month && today_day < birth_day) {
				earthAge--;
			}
			earthAge = earthAge * (24 * 60 * 60 * 365);
			return earthAge.toFixed(2);
		}
	}, {
		key: "calculateMercuryAge",
		value: function calculateMercuryAge(birth_month, birth_day, birth_year) {
			var earthAge = this.calculateEarthAge(birth_month, birth_day, birth_year);
			var mercuryAge = earthAge / (24 * 60 * 60 * 365 * 0.24);
			return mercuryAge.toFixed(2);
		}
	}, {
		key: "calculateVenusAge",
		value: function calculateVenusAge(birth_month, birth_day, birth_year) {
			var earthAge = this.calculateEarthAge(birth_month, birth_day, birth_year);
			var venusAge = earthAge / (24 * 60 * 60 * 365 * 0.62);
			return venusAge.toFixed(2);
		}
	}, {
		key: "calculateMarsAge",
		value: function calculateMarsAge(birth_month, birth_day, birth_year) {
			var earthAge = this.calculateEarthAge(birth_month, birth_day, birth_year);
			var marsAge = earthAge / (24 * 60 * 60 * 365 * 1.88);
			return marsAge.toFixed(2);
		}
	}, {
		key: "calculateJupiterAge",
		value: function calculateJupiterAge(birth_month, birth_day, birth_year) {
			var earthAge = this.calculateEarthAge(birth_month, birth_day, birth_year);
			var jupiterAge = earthAge / (24 * 60 * 60 * 365 * 11.86);
			return jupiterAge.toFixed(2);
		}
	}, {
		key: "calculateLifeExpectancyForEarth",
		value: function calculateLifeExpectancyForEarth(birth_month, birth_day, birth_year, country) {
			var planetAge = this.calculateEarthAge(birth_month, birth_day, birth_year);
			console.log(country + "," + this.GetExpectancy(country));
			var lifeLeft = this.GetExpectancy(country) * (365 * 24 * 60 * 60) - planetAge;
			if (lifeLeft <= 0) lifeLeft = 0;
			return lifeLeft;
		}
	}, {
		key: "calculateLifeExpectancyForMercury",
		value: function calculateLifeExpectancyForMercury(birth_month, birth_day, birth_year, country) {
			var planetAge = this.calculateMercuryAge(birth_month, birth_day, birth_year);
			var lifeLeft = this.expectancy[country] / 0.24 - planetAge;
			if (lifeLeft <= 0) lifeLeft = 0;
			return lifeLeft.toFixed(2);
		}
	}, {
		key: "calculateLifeExpectancyForMars",
		value: function calculateLifeExpectancyForMars(birth_month, birth_day, birth_year, country) {
			var planetAge = this.calculateMarsAge(birth_month, birth_day, birth_year);
			var lifeLeft = this.expectancy[country] / 1.88 - planetAge;
			if (lifeLeft <= 0) lifeLeft = 0;
			return lifeLeft.toFixed(2);
		}
	}, {
		key: "calculateLifeExpectancyForVenus",
		value: function calculateLifeExpectancyForVenus(birth_month, birth_day, birth_year, country) {
			var planetAge = this.calculateVenusAge(birth_month, birth_day, birth_year);
			var lifeLeft = this.expectancy[country] / 0.62 - planetAge;
			if (lifeLeft <= 0) lifeLeft = 0;
			return lifeLeft.toFixed(2);
		}
	}, {
		key: "calculateLifeExpectancyForJupiter",
		value: function calculateLifeExpectancyForJupiter(birth_month, birth_day, birth_year, country) {
			var planetAge = this.calculateJupiterAge(birth_month, birth_day, birth_year);
			var lifeLeft = this.expectancy[country] / 11.86 - planetAge;
			if (lifeLeft <= 0) lifeLeft = 0;
			return lifeLeft.toFixed(2);
		}
	}, {
		key: "calculateAges",
		value: function calculateAges(birth_month, birth_day, birth_year) {
			var ages = [];

			var earth_age = this.calculateEarthAge(birth_month, birth_day, birth_year);
			ages.push(earth_age);
			var mercury_age = this.calculateMercuryAge(birth_month, birth_day, birth_year);
			ages.push(mercury_age);
			var mars_age = this.calculateMarsAge(birth_month, birth_day, birth_year);
			ages.push(mars_age);
			var venus_age = this.calculateVenusAge(birth_month, birth_day, birth_year);
			ages.push(venus_age);
			var jupiter_age = this.calculateJupiterAge(birth_month, birth_day, birth_year);
			ages.push(jupiter_age);

			return ages;
		}
	}]);

	return Person;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _galactic_age_calculator = require("./../js/galactic_age_calculator.js");

$(document).ready(function () {

	$("#calculate").submit(function (event) {

		event.preventDefault();

		var day = $("#day").val();
		console.log(day);
		var month = $("#month").val();
		var year = $("#year").val();
		var country = $("#country option:selected").val();

		var newPerson = new _galactic_age_calculator.Person(month, day, year, country);
		console.log("country : " + country);
		var ages = newPerson.calculateAges(month, day, year);

		$("#earthage").html("Your Age on Earth is : " + ages[0] + " seconds");
		$("#mercuryage").html("Your Age on Mercury is : " + ages[1] + " years");
		$("#marsage").html("Your Age on Mars is : " + ages[2] + " years");
		$("#venusage").html("Your Age on Venus is : " + ages[3] + " years");
		$("#jupiterage").html("Your Age on Jupiter is : " + ages[4] + " years");

		$("#earthlife").html("Your life left in years on Earth: " + newPerson.calculateLifeExpectancyForEarth(month, day, year, country) + " seconds");
		$("#mercurylife").html("Your life left in years on Mercury: " + newPerson.calculateLifeExpectancyForMercury(month, day, year, country) + " years");
		$("#marslife").html("Your life left in years on Mars: " + newPerson.calculateLifeExpectancyForMars(month, day, year, country) + " years");
		$("#venuslife").html("Your life left in years on Venus: " + newPerson.calculateLifeExpectancyForVenus(month, day, year, country) + " years");
		$("#jupiterlife").html("Your life left in years on Jupiter: " + newPerson.calculateLifeExpectancyForJupiter(month, day, year, country) + " years");
	});
});

},{"./../js/galactic_age_calculator.js":1}]},{},[2]);
