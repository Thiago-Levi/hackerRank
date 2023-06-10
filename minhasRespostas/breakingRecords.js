function breakingRecords(scores) {
  // Write your code here
  let maxPoint = scores[0]
  let breakMaxPointsRecord = 0
  
  let minPoint = scores[0]
  let breakMinPointsRecord = 0

  scores.forEach((score) => {
    if(score < minPoint){
        minPoint = score
        breakMinPointsRecord++
    }
    if(score > maxPoint){
      maxPoint = score
      breakMaxPointsRecord++
      
    }
  });


  return [breakMaxPointsRecord, breakMinPointsRecord]
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(scores))