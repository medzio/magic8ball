const ball = document.querySelector('.ball-img img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const input = document.querySelector('input')

const randomAnswers = [
	'Tak!',
	'Oczywiście, że tak!',
	'hmm, muszę pomyśleć...',
	'co??? XD',
	'Nie!',
	'Proste, że nie',
	'Nie chcesz znać odpowiedzi na to pytanie',
]

const showAnswer = () => {
	ballAnimation()
	let inputText = input.value
	setTimeout(() => errorInput(inputText), 1000)
	setTimeout(() => correctInput(inputText), 1000)
}

const ballAnimation = () => {
	ball.classList.add('shake-animation')
	setTimeout(() => ball.classList.remove('shake-animation'), 1000)
	error.textContent = ''
}

const errorInput = input => {
	if (input === '') {
		answer.textContent = ''
		error.textContent = 'Nie zadałeś pytania :('
	} else if (input.charAt(input.length - 1) !== '?') {
		answer.textContent = ''
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania "?"'
	}
}

const correctInput = input => {
	if (input !== '' && input.charAt(input.length - 1) === '?') {
		error.textContent = ''
		let randomIndex = Math.floor(Math.random() * randomAnswers.length)
		answer.innerHTML = `<span>Odpowiedź:</span> ${randomAnswers[randomIndex]}`
	}
}

ball.addEventListener('click', showAnswer)
