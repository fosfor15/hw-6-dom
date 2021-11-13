
//Мой ответ на вопрос
const myAnswer = document.getElementsByTagName('li')[0].childNodes[0].textContent;

//Блок ответа
const answerSpan = document.getElementsByTagName('span')[0];

//Запись текста
answerSpan.innerText = myAnswer;

//Добавление нового атрибута
const answerClass = document.getElementsByClassName('answer')[0].setAttribute('data-selected-option', 1);
// Метод setAttribute ничего не возвращает, поэтому не стоит принимать результат его работы в константу answerClass, потому что его не будет. Достаточно было просто вызывать setAttribute на нужном объекте узла-элемента. К тому же константа answerClass нигде не используется.
// Функции и методы, которые ничего не возвращают, на самом деле возвращают undefined, однако это значение обозначает отсутствие какого-либо определённого значения.

// Защищённые data атрибуты можно также установить через динамическое создание нового свойства у объекта dataset у объекта узла-элемента – точно в таком же стиле, как у обычных объектов.


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

