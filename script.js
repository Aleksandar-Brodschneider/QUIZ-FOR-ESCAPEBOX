
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion
})
function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion(question) {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
if (answer.correct) {
button.dataset.correct  = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}
function resetState() {
clearStatusClass(document.body)
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild) {
answerButtonsElement.removeChild (answerButtonsElement.firstChild)
}
}

var countWrongAnswers=0;
var countCorrectAnswers=0;
function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
if(correct=='true'){
alert('Odgovor je pravilen');
countCorrectAnswers++;
}
else{
alert('Odgovor je napačen');
countWrongAnswers++;
}

var totalAnswers=countCorrectAnswers+countWrongAnswers;
var percent=(countCorrectAnswers/totalAnswers)*100;
var percentRound=parseFloat(percent).toFixed(0);
document.getElementById('stat-container').innerHTML="Statistika odgovorov:<br>Pravilno ste odgovorili na "+countCorrectAnswers+" od skupno "+totalAnswers+" vprašanj<br>"+percentRound+"% pravilnih odgovorov";



setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
} else {
startButton.innerText = 'NEXT'
startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct) {

clearStatusClass(element)
if (correct) {
element.classList.add('correct')
} else {
element.classList.add('wrong')
}
}
function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')
}
const questions = 
[
{
question: 'Katero je glavno  mesto Slovenije?',
answers: [
{ text: 'Ljubljana', correct: true },
{ text: 'Maribor', correct: false }
]
},
{
question: 'Ali je Slovenija v Evropi',
answers: [
{ text: 'Da', correct: true },
{ text: 'Ne', correct: false }
]
},
{
question: 'Koliko prebivalcev ima Slovenija?',
answers: [
{ text: '2000', correct: false},
{ text: '2000000', correct: true },
{ text: '20', correct: false },
{ text: '200', correct: false}
]
},
{
question: 'Kateri jezik se govori v Sloveniji?',
answers: [
{ text: 'Ljubljanščina', correct: false },
{ text: 'Angleščina', correct: false },
{ text: 'Slovenščina', correct: true},
{ text: 'Vesoljščina', correct: false}
]
}
]

