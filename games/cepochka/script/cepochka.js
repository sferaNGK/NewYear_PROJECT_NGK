const imgURL = ['1.png', '6.png', '4.png', '9.png', '2.png', '10.png']

const dragItems = Array.from(document.querySelectorAll('.drag-item'));

let posY = 25
let posX = 5

for (let item = 0; item < dragItems.length; item++) {
    for (let url = item; url <= item; url++) {
        dragItems[item].style.backgroundImage = `url(img/${imgURL[url]})`
        if (item < 3) {
            dragItems[item].style.right = `${posX}%`
            dragItems[item].style.top = `${posY - 20}%`
            posX += 10
        } else {
            posX -= 10
            dragItems[item].style.right = `${posX}%`
            dragItems[item].style.top = `${posY}%`
        }
    }
}

const startBlock = document.querySelector('.start');
const startButton = document.querySelector('.startButton');
const backButton = document.querySelector('.backButton')

startButton.onclick = () => { // --- КНОПКА "НАЧАТЬ"
    startBlock.style.display = 'none';
    backButton.style.display = 'block';
    for (let item of dragItems) {
        item.style.visibility = 'visible'
    }
    document.documentElement.requestFullscreen()
}

backButton.onclick = () => { // --- КНОПКА "НАЗАД"
    for (let item of dragItems) {
        item.style.visibility = 'hidden';
    }
    startBlock.style.display = 'grid';
    backButton.style.display = 'none';
}

const currentElement = { // --- ТЕКУЩАЯ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ
    current: null,
};

let shiftX = null;
let shiftY = null;

for (let item of dragItems) { // --- ВЕШАЕМ НА ПЕРЕТАСКИВАЕМЫЕ ОБЪЕКТЫ ОБРАБОТЧИК СОБЫТИЯ
    item.addEventListener('touchstart', handleTouchStart);
}

function handleTouchStart(event){
    currentElement.current = event.targetTouches[0];
    document.body.addEventListener('touchmove', handleTouchMove);
    shiftX = event.touches[0].pageX - this.getBoundingClientRect().left;
    shiftY = event.touches[0].pageY - this.getBoundingClientRect().top;
}

function handleTouchMove(event) {
    if (currentElement.current !== null) { // --- ЕСЛИ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ ОПРЕДЕЛЕНА
        let item = currentElement.current.target

        document.body.onresize = () => {
            currentElement.current = null;
        }

        // --- ЗАДАЕМ ЧЕРЕЗ JS-АНИМАЦИЮ КООРДИНАТЫ НАШЕГО КУРСОРА (ПАЛЬЦА) НА ЭКРАНЕ ---
            item.style.left = (event.touches[0].pageX - shiftX)*100/document.documentElement.clientWidth + '%';
            item.style.top = (event.touches[0].pageY - shiftY)*100/document.documentElement.clientHeight + '%';

        // --- ПРОВЕРЯЕМ, НЕ ВЫХОДИТ ЛИ НАШ ОБЪЕКТ ЗА ГРАНИЦЫ ЭКРАНА ---
        if (item.style.left.slice(0, 4) < 0) {
            item.style.left = (event.touches[0].pageX - shiftX + 170) * 100 / document.documentElement.clientWidth + '%';
        } else if (item.style.left.slice(0, 4) > 93) {
            item.style.left = (event.touches[0].pageX - shiftX - 170) * 100 / document.documentElement.clientWidth + '%';
        }
        if (item.style.top.slice(0, 4) < 0) {
            item.style.top = (event.touches[0].pageY - shiftY + 170) * 100 / document.documentElement.clientHeight + '%';
        } else if (item.style.top.slice(0, 4) > 90) {
            item.style.top = (event.touches[0].pageY - shiftY - 170) * 100 / document.documentElement.clientHeight + '%';
        }

        // --- СКРЫВАЕМ ПЕРЕТАСКИВАЕМЫЙ ОБЪЕКТ, ЧТОБЫ ОПРЕДЕЛИТЬ НАХОДЯЩИЙСЯ ПОД НИМ БЛОК, И СНОВА ПОКАЗЫВАЕМ ---
        item.style.visibility = 'hidden';
        let elemBelow = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY);
        item.style.visibility = 'visible';

        cellIsCorrect(item, elemBelow)
    }
}

function cellIsCorrect(item, elemBelow) {
    if (item.id.slice(item.id.length - 1) === elemBelow.id.slice(elemBelow.id.length - 1)) {
        item.classList.add('correct-cell')
    } else {
        item.classList.remove('correct-cell')
    }
}

function handleTouchEnd(){ // --- КОГДА УБИРАЕМ ПАЛЕЦ С ЭКРАНА - ТЕКУЩИЙ ПЕРЕМЕЩАЕМЫЙ ОБЪЕКТ ОБНУЛЯЕТСЯ
    currentElement.current = null;
    let correctCells = 0
    for (let item of dragItems) {
        if (item.className.split(' ')[1] === 'correct-cell') {
            correctCells++
            if (correctCells === 6) {
                setTimeout(() => {
                    document.querySelector('h1').style.display = 'block'
                    document.querySelector('.congratulation').style.display = 'grid'
                    for (let i of document.body.children) {
                        if (i.className !== 'congratulation') {
                            i.style.display = 'none'
                        }
                    }
                }, 1000)
            }
        }
    }
}

document.body.addEventListener('touchend', handleTouchEnd);
