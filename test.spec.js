var letterGrade = require('./grader').letterGrade;
var average = require('./grader').average;
var medianScore = require('./grader').medianScore;
var modeScore = require('./grader').modeScore;

describe('letterGrade()', function() {

  it('return A if grade is between 90 and 100', function() {
    expect(letterGrade(95)).toEqual("A");
  });
  it('return B if grade is between 80 and 89', function() {
    expect(letterGrade(85)).toEqual("B");
  });
  it('return C if grade is between 70 and 79', function() {
    expect(letterGrade(75)).toEqual("C");
  });
  it('return D if grade is between 60 and 69', function() {
    expect(letterGrade(65)).toEqual("D");
  });
  it('return F if grade is between 0 and 59', function() {
    expect(letterGrade(55)).toEqual("F");
  });
});

describe('average()', function() {

  it('returns 94.2 if testScores 90, 92, 95, 96, 98', function() {
    expect(average([90, 92, 95, 96, 98])).toEqual(94.2);
  });
  it('return 87 if testScores 70, 80, 90, 95, 100', function() {
    expect(average([70, 80, 90, 95, 100])).toEqual(87);
  });
});


describe('medianScore()', function(){

  it('returns 80 if testScores 70, 75, 80, 85, 90, 95', function(){
    expect(medianScore([70,75,80,90,95])).toEqual(80);
  });
  it('returns 85 if testScores 70, 75, 80, 85, 90, 95, 99', function(){
    expect(medianScore([70,75,80,90,95,99])).toEqual(85);
  });
});

describe('modeScore()', function(){

  it('returns 10 if testScores 10, 20, 10, 30, 40 ,10', function(){
    expect(modeScore([10,20,10,30,40,10])).toEqual(10);
  });
  it('returns 80 if testScores 80, 75, 60, 65, 80 ,20', function(){
    expect(modeScore([80,75,60,65,80,20])).toEqual(80);
  });
});

















