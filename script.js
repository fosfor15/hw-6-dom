
//доступ к узлам

const quest = document.body;
const answer = document.getElementsByClassName('answer')[0].childNodes[1];

console.log(quest);
console.log(answer);


//передать ответ в answer
const myAnswer = document.getElementsByTagName('li')[1].textContent;
answer.insertAdjacentHTML('beforeend', myAnswer);//вставляет в html

// Гораздо проще вставлять текст в узлы-элементы через запись в свойства textContent или innerText


// передаем ответ в константу и устанавливаем мдля элемента с классом answer атрибут с именем selected-option и значением порядковым номером выбранного варианта ответа.
answer.setAttribute('selected-option', 2);

// Защищённые data атрибуты можно также установить через динамическое создание нового свойства у объекта dataset у объекта узла-элемента – точно в таком же стиле, как у обычных объектов


//скрыть вариант ответа
const hiddenChoice = document.getElementsByTagName('li')[4];

hiddenChoice.hidden = true;
console.log(document.getElementsByTagName('li')); //коллекция без удаленного 


//добавить новый вариант c классом new
const list = document.getElementsByClassName('options')[0];
const newChoice = `<li class ="self"> Все гуд! </li>`;

list.insertAdjacentHTML('beforeend', newChoice);
console.log(list);
console.log(newChoice);


// А где же решения заданий по установке стилей через классы и методы объекта classList и через объект style?
// Присылайте остальные решения следующим коммитом в этой ветке и сообщите об этом в телеграмм. Пока что оценку выставлять не буду.
