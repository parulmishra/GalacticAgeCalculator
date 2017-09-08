import { Person } from './../js/galactic_age_calculator.js';

describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(03,17,1987);
    expect(newPerson.calculateEarthAge(birth_month,birth_day,birth_year)).toEqual(946080000);
  })
  
describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(03,17,1987);
    expect(newPerson.calculateMercuryAge(birth_month,birth_day,birth_year)).toEqual(125.00);
  })

describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(03,17,1987);
    expect(newPerson.calculateMarsAge(birth_month,birth_day,birth_year)).toEqual(15.96);
  })

describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(03,17,1987);
    expect(newPerson.calculateVenusAge(birth_month,birth_day,birth_year)).toEqual(48.39);
  })

describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(03,17,1987);
    expect(newPerson.calculateEarthAge(birth_month,birth_day,birth_year)).toEqual(2.53);
  })  
