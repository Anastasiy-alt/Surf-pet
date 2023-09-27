let date = new Date();
const dateDate = document.querySelector('.main__date-date');
const dateMonth = document.querySelector('.main__date-month');
const dateYear = document.querySelector('.main__date-year');
const point = document.querySelector('.main__point-text');

dateDate.textContent = date.getDate();
if ((date.getMonth() + 1) <= 9) {
    dateMonth.textContent = '0' + (date.getMonth() + 1);
} else {
    dateMonth.textContent = date.getMonth() + 1;
}

dateYear.textContent = date.getFullYear();


