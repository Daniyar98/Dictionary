const form = document.querySelector('form')
const addEng = document.querySelector('#engword')
const addRus = document.querySelector('#rusword')
const testModal = document.querySelector('.testModal')
testModal.style.display = 'none'
const btnTest = document.querySelector('#btnTest')
const h2 = document.querySelector('h2')
const answer = document.querySelector('#answer')
const bntCheck = document.querySelector('#check')
const points = document.querySelector('#points')

const dict = {
    apple: 'Яблоко',
    pear: 'Груша',
    orange: 'апельсин',
    apricot: 'абрикос',
    peach: 'персик',
}

const engArr = []
const rusArr = []
let i = 0
let point = 0
let dictLength = (Object.keys(dict)).length



form.addEventListener('submit', (e) => { // для формы submit
    e.preventDefault()
    if (!addEng.value.trim().length || !addRus.value.trim().length) {
        return alert('Введите слова!')
    }

    dict[addEng.value] = addRus.value
    // console.log(dict);
    alert('Слова добавлены!')
    addEng.value = ''
    addRus.value = ''
    dictLength = Object.keys(dict).length
    addPoints()
})

const handleTest = () => {
    testModal.style.display = 'block'

    for (let key in dict) {
        const lowerKey = key.toLowerCase()
        const lowerValue = dict[key].toLowerCase()
        engArr.push(lowerKey)
        rusArr.push(lowerValue)
    }

    // console.log(engArr);
    // console.log(rusArr);
    addQuestion()
    addPoints()
}

const addQuestion = () => {
    h2.textContent = `Как переводится ${engArr[i]}`
}

const addPoints = () => {
    points.innerHTML = `${point} / ${dictLength}`
}

btnTest.addEventListener('click', handleTest)


const handleCheck = () => {
    if (!answer.value.trim().length) {
        answer.value = ''
        return alert('Вы ничего не ввели!')
    } else if (answer.value.toLowerCase() == rusArr[i]) {
        alert('Верно!')
        point++
        addPoints()
    } else {
        alert('Не верно!')
    }

    i++
    if (engArr.length == i) {
        i = 0
        h2.textContent = `Как переводится ${engArr[i]}`
        testModal.style.display = 'none'
    }
    answer.value = ''
    addQuestion()
}

bntCheck.addEventListener('click', handleCheck)


