function hideWish(event) {

    event.stopPropagation()

    const wish = event.currentTarget

    const wishMessage = wish.querySelector('.wish-message')

    anime({
        targets: wish,
        scale: {
            value: 0,
            easing: 'easeInBack'
        },
        opacity: {
            value: () => 0,
            easing: "linear"
        },
        translateY: {
            value: () => '25vh',
            easing: 'easeInExpo'
        },
        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
            wish.remove()
        },
    });

}
function showWish(event) {

    console.log(event.touches)

    event.stopPropagation()

    const wishContainer = document.querySelector('.wish-container')

    const wish = document.createElement('div')
    const width = 110
    const height = 150

    wish.className = 'wish'

    wish.style.width = width + 'px'
    wish.style.height = height + 'px'

    let touchX = event.touches[0].pageX
    let touchY = event.touches[0].pageY

    if (touchY < height) {
        touchY = height + height * .2
    }
    if (window.innerHeight < touchY + height * 3) {
        touchY = window.innerHeight - height * 3
    }
    if (touchX < width) {
        touchX = width + width * .5
    }
    if (window.innerWidth < touchX + width * 3) {
        touchX = window.innerWidth - width * 3
    }
    console.log(window.innerHeight)
    console.log(touchY + height * 5)

    wish.style.top = touchY  + 'px'
    wish.style.left = touchX  + 'px'

    const wishMessage = document.createElement('div')
    wishMessage.className = 'wish-message'
    wishMessage.textContent = getRandomWish()

    wish.append(wishMessage)

    wishContainer.append(wish)

    wish.addEventListener('touchstart', hideWish)


    anime({
        targets: wish,
        scale: {
            value: 5
        },
        opacity: {
            value: () => 1,
            easing: "linear"
        },

        duration: () => 1000, // Random duration between 500 and 1000 ms
        complete: function() {
        },
    });
}