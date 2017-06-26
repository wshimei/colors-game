var startButton = document.querySelector('#start')
var colors = ['salmon', 'lightpink', 'coral', 'plum', 'mediumslateblue', 'palegreen', 'aquamarine']
var background = ''
var textColor = ''
var text = ''
var point = 0

startButton.addEventListener('click', gamestart)

function gBackgroundColors () {
  background = colors[Math.floor(Math.random() * 7)]
  document.body.style.backgroundColor = background
  return background
}

function gTextColors () {
  textColor = colors[Math.floor(Math.random() * 7)]
  document.querySelector('h1').style.color = textColor
  return textColor
}

function gText () {
  text = colors[Math.floor(Math.random() * 7)]
  document.querySelector('h1').textContent = text
  return text
}

function gamestart () {
  startButton.parentNode.removeChild(startButton)

  var matchBtn = document.createElement('button')
  matchBtn.textContent = 'MATCH!'
  document.body.appendChild(matchBtn)
  matchBtn.addEventListener('click', checkMatch)

  var points = document.createElement('p')
  points.className = 'points'
  points.textContent = 'Points: ' + point
  document.body.appendChild(points)

  setInterval(gBackgroundColors, 1000)
  setInterval(gTextColors, 1000)
  setInterval(gText, 1000)
}

function checkMatch () {
  if (background === textColor) {
    point += 1
  } else {
    point -= 1
  }
  document.querySelector('.points').textContent = 'Points: ' + point
}
