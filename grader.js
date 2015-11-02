
function letterGrade(grade) {
  if (grade >= 90){
    return  "A";
  } else if (grade <= 89 && grade >= 80){
    return "B";
  } else if (grade <= 79 && grade >= 70) {
    return "C";
  } else if (grade <= 69 && grade >= 60) {
    return "D";
  } else if (grade <= 59){
    return "F";
  }
}

function average(testScores) {
  var num = 0;
  for (var i = 0; i < testScores.length; i++){
    num = num + testScores[i];
  }
  return num/testScores.length;
}

function medianScore(testScores){
  var sortedArray = testScores.sort();
  var middle = Math.floor(sortedArray.length/2);
  if (sortedArray.length % 2 !== 0) {
    return  sortedArray[middle];
  } else {
    return (sortedArray[middle - 1] + sortedArray[middle])/2;
  }
}




function modeScore(testScores){
  var answer = 0;
  var sortedArray = testScores.sort();
  for (var i = 0; sortedArray.length; i++){
    answer = sortedArray[i];
    if (answer === sortedArray[i + 1]) {
      return answer;
    }
  }
}



var obj = {
  letterGrade: letterGrade,
  average: average,
  medianScore: medianScore,
  modeScore: modeScore
};


module.exports = obj;
