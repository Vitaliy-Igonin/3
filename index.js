


const quiz = [
    {
        'q': 'Какая команда служит для вывода в консоль?',
        'a': {
            'w': 'console.log',
            't': 'console.error',
            'c': 'while'
        },
        'p': 'console.log'
    },
    {
        'q': 'Какая команда служит для обьявления функции?',
        'a': {
            'w': 'await',
            't': 'for',
            'c': 'function'
        },
        'p': 'function'
    },
    {
        'q': 'Какая команда служит для вывода в модальном окне?',
        'a': {
            'w': 'alert',
            't': 'console.log',
            'c': 'prompt'
        },
        'p': 'alert'
    },
    {
        'q': 'Какой метод массива служит для сортировки?',
        'a': {
            'w': 'map',
            't': 'sort',
            'c': 'reverse'
        },
        'p': 'sort'
    },
    {
        'q': 'Какой метод массива добавляет новый элемент в конец?',
        'a': {
            'w': 'foreach',
            't': 'fetch',
            'c': 'push'
        },
        'p': 'push'
    },
    {
        'q': 'Какой способ для создания цикла самый распространенный?',
        'a': {
            'w': 'typeof',
            't': 'valueoff',
            'c': 'for'
        },
        'p': 'for'
    },
    {
        'q': 'Какая команда конвертирует значение строки в нижний регистр?',
        'a': {
            'w': 'toLowerCase()',
            't': 'toUpperCase()',
            'c': 'slice'
        },
        'p': 'toLowerCase()'
    },
    {
        'q': 'Как создать комментарий?',
        'a': {
            'w': '*/',
            't': '//',
            'c': '+/+'
        },
        'p': '//'
    },
    {
        'q': 'Как достать элемент по id?',
        'a': {
            'w': 'getElementByID',
            't': 'getElementsByClassName',
            'c': 'querySelector'
        },
        'p': 'getElementByID'
    },
    {
        'q': 'Остаток от деления?',
        'a': {
            'w': '/',
            't': '+/',
            'c': '%'
        },
        'p': '%'
    },
    {
        'q': `Начать заново`,
    }
]

const array = [
    {
        title: 'Условие',
        text:'Создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)',
        code: `function () {
            const variable = Math.random() > 0.5 ? "Hello" : undefined;
        
            return variable == undefined
              ? [Variable]: is empty; [Type]: $typeof variable}
              : [Variable]: $variable}; [Type]: $typeof variable}
          }`
    },
    {
        title: 'Условие 2',
        text:'Запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)',
        code: `function () {
            const zodiacSignsMap = new Map([
              ["aries", "Aries"],
              ["taurus", "Taurus"],
              ["gemini", "Gemini"],
              ["cancer", "Cancer"],
              ["leo", "Leo"],
              ["virgo", "Virgo"],
              ["libra", "Libra"],
              ["scorpio", "Scorpio"],
              ["sagittarius", "Sagittarius"],
              ["capricorn", "Capricorn"],
              ["aquarius", "Aquarius"],
              ["pisces", "Pisces"],
            ]);
      
            const select = document.createElement("select");
            select.addEventListener("change", (event) => {
              const selectedValue = event.target.value;
      
              switch (selectedValue) {
                case "aries":
                case "taurus":
                case "gemini":
                case "cancer":
                case "leo":
                case "virgo":
                case "libra":
                case "scorpio":
                case "sagittarius":
                case "capricorn":
                case "aquarius":
                case "pisces":
                  alert(
                    Привет! Твой знак зодика - $zodiacSignsMap.get(selectedValue)}
                  );
                  break;
                default:
                  alert("Выберите знак зодиака из списка!");
              }
            });
      
            const options = Array.from(zodiacSignsMap.entries()).map(
              ([value, displayValue]) => {
                const option = document.createElement("option");
                option.value = value;
                option.text = displayValue;
                return option;
              }
            );
      
            select.append(...options);
      
            return select;
          }`
    },
    {
        title: 'Циклы 0',
        text:'Вывести все числа от 1 до 40, с использованием 3-х разных циклов',
        code: `function () {
            const forEachLoopOutput = document.createElement("div");
            forEachLoopOutput.appendChild(document.createTextNode(forEach: ));
            forEachLoopOutput.style.wordBreak = "break-all";
      
            new Array(40).fill(null).forEach((_, index) => {
              const text = document.createTextNode($index + 1},);
              forEachLoopOutput.appendChild(text);
            });
      
            const forLoopOutput = document.createElement("div");
            forLoopOutput.appendChild(document.createTextNode(for: ));
            forLoopOutput.style.wordBreak = "break-all";
      
            for (let index = 0; index < 40; index++) {
              const text = document.createTextNode($index + 1},);
              forLoopOutput.appendChild(text);
            }
      
            const reduceOutput = document.createElement("div");
            reduceOutput.style.wordBreak = "break-all";
      
            const reduceOutputContent = new Array(40)
              .fill(null)
              .reduce((outputText, _, index) => {
                outputText += $index + 1},;
                return outputText;
              }, "reduce: ");
            reduceOutput.appendChild(document.createTextNode(reduceOutputContent));
      
            return [forEachLoopOutput, forLoopOutput, reduceOutput];
          }`,
    },
    {
        title: 'Вирусная страница',
        text:'Создайте вирусную страницу с постоянно повторяющемся сообщением',
        code: `function () {
            const button = document.createElement("button");
            button.textContent = "Нажми меня :)";
      
            button.addEventListener("click", (event) => {
              event.preventDefault();
      
              for (let index = 0; index < 5; index++) {
                alert("А ведь это мог быть бесконечный цикл и утечка памяти!");
              }
            });
      
            return button;
          }`
    },
    {
        title: 'Игра',
        text:'Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, в случае неправильного ответа вывести повторное окно с вопросом (помните, что пользователь может нажать отмена, помните о типах данных)',
        code: `function () {
      const startButton = document.createElement("button");
      startButton.textContent = "Начать";
      startButton.addEventListener("click", (event) => {
        event.preventDefault();
        startGame();
      });

      function startGame(
        displayText = "Давайте поиграем в игру. Введите число больше 5, чтобы начать!"
      ) {
        const userInput = window.prompt(displayText);

        const inputValue =
          userInput && userInput.trim().length !== 0 && Number(userInput);

        if (userInput == null) {
          alert("Игра окончена!");
          return;
        }

        if (typeof inputValue != "number" || isNaN(inputValue)) {
          startGame("Эм... это не число! Давай по новой!");
          return;
        }

        if (inputValue <= 5) {
          startGame("Это число не больше 5!");
          return;
        }

        alert("Поздравляю! Вы победили!");
      }

      return startButton;
    }`
    },
    {
        title: 'Четные числа',
        text:'Выведите четные числа от 8 до 20',
        code: `function () {
      return new Array(21)
        .fill(null)
        .map((_, index) => (index > 7 && index % 2 === 0 ? index : null))
        .filter(Boolean)
        .join(", ");
    }`
    },   
    {
        title: 'Нечетные числа',
        text:'Выведите нечетные числа от 1 до 7, пропустив 5',
        code: `function () {
      return new Array(8)
        .fill(null)
        .map((_, index) => (index !== 5 && index % 2 !== 0 ? index : null))
        .filter(Boolean)
        .join(", ");
    }`
    },
    {
        title: 'Массивы 1',
        text:'Создать массив 3 разными способами',
        code: `function () {
      const arrayFrom = Array.from({ length: 21 }, (_, index) => index * 2);

      const arrayOf = Array.of(1, 2, 3, 4, 5);

      const literal = [
        "Hello!",
        "How are you?",
        "I am fine, thank you!",
        "And you?",
      ];
      return { arrayFrom, arrayOf, literal };
    }`
    },
        {
        title: 'Массивы: Измененный массив',
        text:'Выведите на экран 5 член вашего массива затем измените его значение',
        code: `function () {
      const arrayFrom = Array.from({ length: 5 }, (_, index) => index * 2);

      const changedArray = [...arrayFrom];
      arrayFrom[arrayFrom.length - 1] = 888;
      arrayFrom.reverse();
      arrayFrom.push(-1);
      arrayFrom.unshift(99);
      arrayFrom.splice(3, 0, 4);

      return { arrayFrom, changedArray };
    }`
    },
       {
        title: 'Больше массивов!',
        text:'Узнайте длину вашего массива и выведите ее значение при наведении на любой элемент',
        code: `function () {
      const arrayFrom = Array.from({ length: 5 });

      const resultArray = arrayFrom.map((_, index, array) => {
        const item = document.createElement("li");
        item.textContent = Item $index + 1};
        item.title = Array length: $array.length};
        return item;
      });

      return resultArray;
    }`
    },
       {
        title: 'Циклы 1',
        text:'Выведите все элементы массива, используя цикл for',
        code: `function () {
      const items = [];
      for (let i = 0; i < 5; i++) {
        const item = document.createElement("li");
        item.textContent = Item {i + 1} has appended with "for" loop;
        items.push(item);
      }
      return items;
    }`
    },
       {
        title: 'Массивы + циклы ',
        text:`1) создайте 2 массива. Объедините их в один и выведите на экран полученный массив
2) Удалите последний член получившегося массива и выведите это значение на экран
3) Удалите последний член получившегося массива и выведите это значение на экран
4) Добавьте новый элемент в начало вашего объединенного массива
5) Получите сегодняшнюю дату и выведите ее на экран
6) Выведите сегодняшнюю дату в формате 11 ноября 2020 года`,
        code: `function () {
      function formatDate(date) {
        const months = [
          "января",
          "февраля",
          "марта",
          "апреля",
          "мая",
          "июня",
          "июля",
          "августа",
          "сентября",
          "октября",
          "ноября",
          "декабря",
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return $day} $month} $year};
      }

      const firstArray = Array.from({ length: 5 }, (_, index) => index * 2);
      const secondArray = Array.from({ length: 5 }, (_, index) => #$index});
      const concatenedArray = firstArray.concat(secondArray);
      const spreadedArray = [...firstArray, ...secondArray];

      const copiedArray = [...spreadedArray];
      const removedLastElement = copiedArray.pop();
      const removedFirstElement = copiedArray.shift();
      const addedToStartElement = copiedArray.unshift("added element");

      return {
        concatenedArray,
        spreadedArray,
        copiedArray,
        removedLastElement,
        removedFirstElement,
        addedToStartElement,
        todayDate: new Date().toLocaleString(),
        formattedTodayDate: formatDate(new Date()),
      };
    }`
    },
       {
        title: 'Произведение случайных чисел',
        text:'Напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50',
        code: `function () {
      const randomNumber1 = Math.floor(Math.random() * 51);
      const randomNumber2 = Math.floor(Math.random() * 51);

      return {
        randomNumber1,
        randomNumber2,
        multiplyResult: randomNumber1 * randomNumber2,
      };
    }`
    }   
]



window.onload = function(){
    let result = 1
    let step = 0
    let page = 0
    const back = document.getElementById('back')
    

    if(page == 0){
        document.querySelector('#back').style.background = 'gray'
    }



    showPage(page)

    function showQuest(step){
        document.querySelector('.questions').innerHTML = quiz[step]['q']

    let answer = ''

    for(let key in quiz[step]['a']){
        answer += `<li data-v-${key} id='que' class='answer-variant'>${quiz[step]['a'][key]}</li>`
    }


    document.querySelector('.answer').innerHTML = answer

    }

    function showPage(page){

        let code = ''
        let title = ''
        let text = ''

        for(let key in array[page]['code']){
            code += array[page]['code'][key]
        }
        for(let key in array[page]['title']){
            title += array[page]['title'][key]
        }
        for(let key in array[page]['text']){
            text += array[page]['text'][key]
        }

        if(page == 0){
            document.querySelector('#back').style.background = 'gray'
        }
        else if(page == 11){
            document.querySelector('#start-code').style.background = 'gray'
        }
        else{
            document.querySelector('#back').style.background = 'green'
            document.querySelector('#start-code').style.background = 'green'
        }

        document.querySelector('.area').innerHTML = code
        document.querySelector('.title-code').innerHTML = `Название: ${title}`
        document.querySelector('.text-code').innerHTML = `Описание: ${text}`
    }


    const goPage = document.getElementById('start-code')



    back.onclick = function back(e){
        e.stopPropagation()

        console.log('backerer')

        page-=1


        showPage(page)
    }

    goPage.onclick = function go(e){
        e.stopPropagation()

        if(e.target.classList.contains('start-code-page') && page < quiz.length){
            page+=1
        }



        showPage(page)
    }

    let arr = []

    document.onclick = function(e){
        e.stopPropagation()

        console.log(step)

        const divElement = document.querySelector(".otveti");

        if(e.target.innerHTML == 'Начать заново'){
          step -= 10
          console.log(step)
          document.getElementById('otveti').style.display = 'none'
          document.getElementById('otveti2').style.display = 'none'
          arr = []
          divElement.innerHTML = ''
        }
        else if(e.target.innerHTML.length < 15 && e.target.innerHTML !== 'Тест' && e.target.innerHTML !== 'Начать заново'){
          arr.push(e.target.innerHTML)
        }




        const otv = document.getElementById('otveti')
        const otv2 = document.getElementById('otveti2')
        

        console.log(arr)

        if(e.target.classList.contains('answer-variant') && step < quiz.length){
            

            if(step == 9){
                setActive(result)
                otv.style.display = 'flex'
                otv2.style.display = 'flex'
                arr.map(item => {
                    const newElement = document.createElement("otveti");
                    newElement.textContent = item;
                    divElement.appendChild(newElement);
                    console.log(divElement)
                });
            }
            else if(e.target.innerHTML === quiz[step]['p']){
                result += 1
            }

            step++
        }

        showQuest(step)
    }

    showQuest(step)
}

const mod = document.getElementById('modal')

let modal = false

function setActive(result){
    modal = true

    if(modal = true){
        mod.className = 'modal active'
        document.querySelector('.result-modal').innerHTML = `Молодец ты сделал правильно ${result} из 10 заданий`
    }
}

function closed(){
    mod.className = 'modal'
}


const btn = document.getElementById('auth')

btn.addEventListener("click", () => {
    const newUsername = prompt("Введите ваше имя");

    localStorage.setItem('name', newUsername)
  });


  const state = localStorage.getItem('name')

  if(state){
      btn.textContent = 'Сменить имя'
  }
  else{
      btn.textContent = 'Авторизироваться'
  }


let th = false
const imag = document.querySelector('#body')

function theme(){

    const name = localStorage.getItem('name')
    let currentDate = new Date()

    if(th == false){
        imag.style.backgroundImage = 'url(./image/cosmos.jpg)'
        document.querySelector('.result-modal').innerHTML = `Текущая дата: ${currentDate}:<br><br>Имя: ${name}`
        mod.className = 'modal active'
        th = true
    }
    else{
        imag.style.background = 'black'
        th = false
    }
    
}




