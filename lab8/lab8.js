const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const monthsRussian = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

function showDate() {
    let cardDiv = document.getElementById('date-card')

    let now = new Date()

    cardDiv.innerText = `
    Локаль ru-RU: ${now.toLocaleString('ru-RU')} \n
    Локаль ar-EG: ${now.toLocaleString('ar-EG')} \n
    Локаль ar-IQ: ${now.toLocaleString('ar-IQ')} \n
    Локаль ar-QA: ${now.toLocaleString('ar-QA')} \n
    Локаль de: ${now.toLocaleString('de')} \n
    Локаль el-GR: ${now.toLocaleString('el-GR')} \n
    Локаль en-US: ${now.toLocaleString('en-US')} \n
    `

    cardDiv.classList.remove("hidden")
}

function showDateSeparate() {

    let cardDiv = document.getElementById('date-card')

    let now = new Date()

    cardDiv.innerText = `
    Локаль ru-RU: ${now.toLocaleString('ru-RU')} \n
    Год: ${now.getFullYear()}
    Месяц: ${monthsRussian[now.getMonth()]}
    День: ${now.getDate()}
    Неделя: ${daysOfWeek[now.getDay()]}
    `

    cardDiv.classList.remove("hidden")
}

function solveWeekDay() {
    let day = Number(document.getElementById('day-input').value)
    let month = Number(document.getElementById('month-input').value)
    let year = Number(document.getElementById('year-input').value)

    let date = new Date(year, month, day)
    console.log(date)

    let cardDiv = document.getElementById('date-card')
    cardDiv.innerText = `
    Локаль ru-RU: ${date.toLocaleString('ru-RU')} \n    
    День недели: ${daysOfWeek[date.getDay()]}
    `

    cardDiv.classList.remove("hidden")
}

function countDaysLived() {
    let birth = new Date(document.getElementById('birth-day-input').value)
    let date = new Date()
    let cardDiv = document.getElementById('date-card')
    cardDiv.innerText = `
    Сегодня ru-RU: ${date.toLocaleString('ru-RU')} \n    
    Дней потрачено: ${Math.floor((date - birth)/1000/60/60/24)}
    `


    cardDiv.classList.remove("hidden")
}

function clearInputs() {
    const inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    let cardDiv = document.getElementById('date-card')
    cardDiv.classList.add("hidden")
}

function showTime() {
    const displayDiv = document.getElementById('time-display');
    let currentTime = new Date().toLocaleTimeString('ru-RU')
    displayDiv.innerText = currentTime
}
setInterval(showTime, 1000)

function moveClock() {
let time = new Date().getSeconds()
const clockStick = document.getElementById('clock-stick');
clockStick.style.transform = `rotate(${time * 6}deg)`    
    
}
setInterval(moveClock, 1000)

