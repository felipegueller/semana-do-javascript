/*
  You must use the reduce function when you want to reduce a array on a value
*/

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const anaScore = phaseScores.reduce((acc, phaseScore) => {
  const {name, score} = phaseScore

  return name === 'Ana Paula Rocha'
    ? acc + score 
    : acc
}, 0)

console.log("Ana's score: ", anaScore)