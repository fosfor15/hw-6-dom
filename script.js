
//Мой ответ на вопрос
const myAnswer = document.getElementsByTagName('li')[0].childNodes[0].textContent;

//Блок ответа
const answerSpan = document.getElementsByTagName('span')[0];

//Запись текста
answerSpan.innerText = myAnswer;

//Добавление нового атрибута
const answerClass = document.getElementsByClassName('answer')[0].setAttribute('data-selected-option', 1);

//Скрытие элемента
document.getElementsByTagName('li')[3].hidden = true;

//Установка созданному эелементу стилей
const newAppendElem = document.createElement('li');
const text = document.createTextNode('Безупречно!');
const newElem = document.body.children[2];
newElem.append(newAppendElem);
const lastElem = document.body.children[2].lastElementChild;
lastElem.append(text);
lastElem.classList.add('self');

//Установка стиля моему ответу
const myAnswerStyle = document.getElementsByTagName('li')[0];
myAnswerStyle.style.color = 'blue';
myAnswerStyle.style.backgroundColor = 'yellow';

