import { Person } from './../js/galactic_age_calculator.js';

describe('Person', function(){
  it('should check whether the earth age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(3,17,1987, "usa");
    console.log(newPerson);
    expect(newPerson.calculateEarthAge(3,17,1987)).toEqual('946080000.00');
  });
});

describe('Person', function(){
  it('should check whether the Mercury age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(3,17,1987, "usa");
    expect(newPerson.calculateMercuryAge(3,17,1987)).toEqual('125.00');
  });
});


describe('Person', function(){
  it('should check whether the mars age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(3,17,1987, "usa");
    expect(newPerson.calculateMarsAge(3,17,1987)).toEqual('15.96');
  });
});


describe('Person', function(){
  it('should check whether the venus age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(3,17,1987, "usa");
    expect(newPerson.calculateVenusAge(3,17,1987)).toEqual('48.39');
  });
});


describe('Person', function(){
  it('should check whether the jupiter age is correct or not on the basis of birth date entered', function(){
    var newPerson = new Person(3,17,1987, "usa");
    expect(newPerson.calculateJupiterAge(3,17,1987)).toEqual('2.53');
  });
});
