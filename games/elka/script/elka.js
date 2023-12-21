const imgURL = ['meshok.png', 'elka.png', 'tree-star.png', 'orangeBall.png', 'pinkBall.png', 'orangeBall.png', 'lights.png', 'lights.png', 'elkaToy.png', 'box.png', 'tinsel.png', 'wrench.png', 'kirieshki.png', 'buter.png', 'gear.png']

const dragItems = Array.from(document.querySelectorAll('.drag-item'));
const allItems = Array.from(document.querySelectorAll('.non-drag-item')).concat(dragItems)

for (let item = 0; item < allItems.length; item++) {
    for (let url = item; url <= item; url++) {
        allItems[item].style.backgroundImage = `url(./img/${imgURL[url]})`
    }
}

const meshok = document.querySelector('#meshok');
const elka = document.querySelector('#elka');

const startBlock = document.querySelector('.start');
const startButton = document.querySelector('.startButton');
const backButton = document.querySelector('.backButton')

startButton.onclick = () => { // --- КНОПКА "НАЧАТЬ"
    startBlock.style.display = 'none';
    backButton.style.display = 'block';
    for (let item of allItems) {
        item.style.visibility = 'visible'
    }
    document.documentElement.requestFullscreen()
}

backButton.onclick = () => { // --- КНОПКА "НАЗАД"
    for (let item of allItems) {
        item.style.visibility = 'hidden';
    }
    startBlock.style.display = 'grid';
    backButton.style.display = 'none';
}

const currentElement = { // --- ТЕКУЩАЯ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ
    current: null,
};

let itemsInMeshok = [];
let itemsInElka = [];

let shiftX = null;
let shiftY = null;

for (let item of dragItems) { // --- ВЕШАЕМ НА ПЕРЕТАСКИВАЕМЫЕ ОБЪЕКТЫ ОБРАБОТЧИК СОБЫТИЯ
    item.addEventListener('touchstart', handleTouchStart);
    if (item.className.split(' ')[1] === 'inElka') {
        itemsInElka.push(item.id)
    }
}

function handleTouchStart(event) {
    currentElement.current = event.targetTouches[0];
    document.body.addEventListener('touchmove', handleTouchMove);
    shiftX = event.touches[0].pageX - this.getBoundingClientRect().left;
    shiftY = event.touches[0].pageY - this.getBoundingClientRect().top;
}

function handleTouchMove(event) {
    if (currentElement.current !== null) { // --- ЕСЛИ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ ОПРЕДЕЛЕНА
        let item = currentElement.current.target

        // --- ЗАДАЕМ ЧЕРЕЗ JS-АНИМАЦИЮ КООРДИНАТЫ НАШЕГО КУРСОРА (ПАЛЬЦА) НА ЭКРАНЕ ---
        item.style.left = (event.touches[0].pageX - shiftX)*100/document.documentElement.clientWidth + '%';
        item.style.top = (event.touches[0].pageY - shiftY)*100/document.documentElement.clientHeight + '%';

        // --- ПРОВЕРЯЕМ, НЕ ВЫХОДИТ ЛИ НАШ ОБЪЕКТ ЗА ГРАНИЦЫ ЭКРАНА ---
        if (event.touches[0].pageX < 40) {
            item.style.left = event.touches[0].pageX - shiftX + 170 + 'px';
        } else if (event.touches[0].pageX > window.screen.width - 50) {
            item.style.left = event.touches[0].pageX - shiftX - 170 + 'px';
        }
        if (event.touches[0].pageY < 40) {
            item.style.top = event.touches[0].pageY - shiftY + 170 + 'px';
        } else if (event.touches[0].pageY > window.screen.height - 50) {
            item.style.top = event.touches[0].pageY - shiftY - 170 + 'px';
        }

        // --- СКРЫВАЕМ ПЕРЕТАСКИВАЕМЫЙ ОБЪЕКТ, ЧТОБЫ ОПРЕДЕЛИТЬ НАХОДЯЩИЙСЯ ПОД НИМ БЛОК, И СНОВА ПОКАЗЫВАЕМ ---
        item.style.visibility = 'hidden';
        let elemBelow = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY);
        item.style.visibility = 'visible';

        // --- ОТСЛЕЖИВАЕМ ЗАПОЛНЕННОСТЬ МЕШКА И ЁЛКИ НУЖНЫМИ ОБЪЕКТАМИ ---
        let meshokStatus = meshokIsFull(elemBelow, item)
        let elkaStatus = elkaIsFull(elemBelow, item)

        if (meshokStatus === true && elkaStatus === true) {
            setTimeout(() => {
                document.querySelector('h1').style.display = 'block'
                document.querySelector('.congratulation').style.display = 'grid'
                for (let i of document.body.children) {
                    if (i.className !== 'congratulation') {
                        i.style.display = 'none'
                    }
                }
                document.querySelector('body').style.backgroundImage = "url(./img/bg_gif.gif)"
            }, 1000)
        }

    }
}

function meshokIsFull(elemBelow, item) {
    if (elemBelow.id === meshok.id || elemBelow.className.split(' ')[1] === 'inMeshok') {
        item.classList.add('inMeshok')
        if (!itemsInMeshok.includes(item.id)) {
            itemsInMeshok.push(item.id)
        }
    } else {
        item.classList.remove('inMeshok')
        itemsInMeshok = itemsInMeshok.filter(i => i !== item.id)
    }

    if (itemsInMeshok.length === 4 && itemsInMeshok.includes('wrench') && itemsInMeshok.includes('kirieshki') && itemsInMeshok.includes('buter') && itemsInMeshok.includes('gear')) {
        return true
    }
}

function elkaIsFull(elemBelow, item) {
    if (elemBelow.id === elka.id || elemBelow.className.split(' ')[1] === 'inElka') {
        item.classList.add('inElka')
        if (!itemsInElka.includes(item.id)) {
            itemsInElka.push(item.id)
        }
    } else {
        item.classList.remove('inElka')
        itemsInElka = itemsInElka.filter(i => i !== item.id)
    }

    if (itemsInElka.length === 9 && itemsInElka.includes('orBall2') && itemsInElka.includes('orBall1') && itemsInElka.includes('pBall1') && itemsInElka.includes('lights1') && itemsInElka.includes('lights2') && itemsInElka.includes('box') && itemsInElka.includes('treeStar') && itemsInElka.includes('meshura') && itemsInElka.includes('elkaToy')) {
        return true
    }
}

function handleTouchEnd() { // --- КОГДА УБИРАЕМ ПАЛЕЦ С ЭКРАНА - ТЕКУЩИЙ ПЕРЕМЕЩАЕМЫЙ ОБЪЕКТ ОБНУЛЯЕТСЯ
    currentElement.current = null;
}

document.body.addEventListener('touchend', handleTouchEnd);
