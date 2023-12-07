const imgURL = ['meshok.png', 'marmelad.png', 'bear.png', 'vegetable.png', 'jam.png', 'socks.png', 'comp.png', 'konki.png', 'car.png', 'kukla.png', 'snegokat.png', 'sumka.png']

const dragItems = Array.from(document.querySelectorAll('.drag-item'));
const allItems = Array.from(document.querySelectorAll('.non-drag-item')).concat(dragItems)

for (let item = 0; item < allItems.length; item++) {
    for (let url = item; url <= item; url++) {
        allItems[item].style.backgroundImage = `url(./img/${imgURL[url]})`
    }
}

const meshok = document.querySelector('#meshok');
const dedMoroz = document.querySelector('#dedMoroz')

const startBlock = document.querySelector('.start')
const startButton = document.querySelector('.startButton')
const backButton = document.querySelector('.backButton')
startButton.onclick = () => {
    setInterval(() => {
        if (dedMoroz.className === 'dedMorozAnimation') {
            dedMoroz.classList.remove('dedMorozAnimation')
            dedMoroz.style.display = 'none'
        } else {
            dedMoroz.classList.add('dedMorozAnimation')
            dedMoroz.style.display = 'block'
        }
    }, 10000)
    startBlock.style.display = 'none'
    backButton.style.display = 'block'
    meshok.style.display = 'block'
    for (let i of dragItems) {
        i.style.display = 'block'
    }
    document.documentElement.requestFullscreen()
}

backButton.onclick = () => {
    window.clearInterval(1)
    meshok.style.display = 'none'
    for (let item of dragItems) {
        item.style.display = 'none';
    }
    startBlock.style.display = 'grid'
    backButton.style.display = 'none'
}

const currentElement = {
    current: null,
};

let itemsInMeshok = [];

let shiftX = null;
let shiftY = null;

for (let item of dragItems) {
    item.addEventListener('touchstart', handleTouchStart);
}

function handleTouchStart(event){
    currentElement.current = event.targetTouches[0];
    document.body.addEventListener('touchmove', handleTouchMove);
    shiftX = event.touches[0].pageX - this.getBoundingClientRect().left;
    shiftY = event.touches[0].pageY - this.getBoundingClientRect().top;
}

function handleTouchMove(event) {
    event.preventDefault()
    if (currentElement.current !== null) {
        let item = currentElement.current.target;

        requestAnimationFrame(() => {
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
        })

        item.style.visibility = 'hidden';
        let elemBelow = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY);
        item.style.visibility = 'visible';

        let meshokStatus = meshokIsFull(elemBelow, item)

        if (meshokStatus === true) {
            setTimeout(() => {
                document.querySelector('h1').style.display = 'block'
                document.querySelector('.congratulation').style.display = 'grid'
                for (let i of document.body.children) {
                    if (i.className !== 'congratulation') {
                        i.style.display = 'none'
                    }
                }
                window.clearInterval(1)
                document.querySelector('body').style.backgroundImage = "url(../elka/img/bg_gif.gif)"
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
        itemsInMeshok = itemsInMeshok.filter( i => i !== item.id)
    }

    if (itemsInMeshok.length === 5 && itemsInMeshok.includes('kukla') && itemsInMeshok.includes('comp') && itemsInMeshok.includes('jam') && itemsInMeshok.includes('bear') && itemsInMeshok.includes('socks')) {
        return true
    }
}

function handleTouchEnd(){
    currentElement.current = null;
}

document.body.addEventListener('touchend', handleTouchEnd);