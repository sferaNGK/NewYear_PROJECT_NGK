var y = 20;
var z;
var max = 0;
var time1 = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;
var time7 = 0;
var time8 = 0;
var time9 = 0;
var q = 60;
var q2 = 10;
var q3 = 30;
var y2 = 50;
var y3 = 30;
document.getElementById('text1').value = y;
document.getElementById('ot1').value = q;

document.getElementById('ot2').value = q2;
document.getElementById('ot3').value = q3;
document.getElementById('text12').value = 50;
document.getElementById('text13').value = 30;

document.querySelector('.startButton').onclick = () => {
    document.querySelector('#wr1').style.visibility = 'hidden'
    document.querySelector('.btn-row').style.display = 'none'
    document.documentElement.requestFullscreen()
}

let wr1 = document.querySelector('#wr1')
let wr2 = document.querySelector('#wr2')

wr1.onclick = function () {
    document.querySelector('.btn-row').style.display = 'none'
    document.getElementById('z1').style.visibility = "visible";
    document.getElementById('ful').style.visibility = "visible";
    document.getElementById('wr1').style.visibility = "hidden";
    document.getElementById('z2').style.visibility = "visible";
    document.getElementById('z3').style.visibility = "visible";
}

z3.onclick = function () {
    time3 = 2;
    z = q3 - x - x2 - x3;
    if (z < 0) {
        var k = x - q3;
        y = y + k;
        q3 = 0;
        document.getElementById('ot3').value = q3;
        document.getElementById('text1').value = y;
        document.getElementById('text').value = 0;
        x = 0;
    } else {
        document.getElementById('text').value = 0;
        q3 = q3 - x - x2 - x3;
        document.getElementById('ot3').value = q3;
        x = 0;
    }
    z = 0;
    k = 0;

    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";

        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";

        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }

    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train.style.left = timePassed / 2 + 'px';
        train.style.top = timePassed / 3.5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z1.onclick = function () {
    time1 = 5;
    z = q - x - x2 - x3;
    if (z < 0) {
        var k = x - q;
        y = y + k;
        q = 0;
        document.getElementById('ot1').value = q;
        document.getElementById('text1').value = y;
        document.getElementById('text').value = 0;
        x = 0;
    } else {

        document.getElementById('text').value = 0;
        q = q - x - x2 - x3;
        document.getElementById('ot1').value = q;
        x = 0;
    }

    z = 0;
    k = 0;
    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }

    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train0.style.left = timePassed / 2 + 'px';


        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z2.onclick = function () {
    time2 = 8;
    z = q2 - x - x2 - x3;
    if (z < 0) {
        var k = x - q2;
        y = y + k;
        q2 = 0;
        document.getElementById('ot2').value = q2;
        document.getElementById('text1').value = y;
        document.getElementById('text').value = 0;
        x = 0;
    } else {

        document.getElementById('text').value = 0;
        q2 = q2 - x - x2 - x3;
        document.getElementById('ot2').value = q2;
        x = 0;
    }

    z = 0;
    k = 0;
    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train.style.left = timePassed / 2 + 'px';

        train.style.top = timePassed / 7 + 'px';
        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}


z33.onclick = function () {
    time6 = 6;

    z = q3 - x - x2 - x3;
    if (z < 0) {
        var k = x2 - q3;
        y2 = y2 + k;
        q3 = 0;
        document.getElementById('ot33').value = q3;
        document.getElementById('text12').value = y2;
        document.getElementById('text2').value = 0;
        x2 = 0;
    } else {

        document.getElementById('text2').value = 0;
        q3 = q3 - x - x2 - x3;
        document.getElementById('ot33').value = q3;
        x2 = 0;
    }
    z = 0;
    k = 0;

    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train1.style.left = timePassed / 2 + 'px';
        train1.style.top = timePassed / 7 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z22.onclick = function () {
    time5 = 1;
    z = q2 - x - x2 - x3;
    if (z < 0) {
        var k = x2 - q2;
        y2 = y2 + k;
        q2 = 0;
        document.getElementById('ot22').value = q2;
        document.getElementById('text12').value = y2;
        document.getElementById('text2').value = 0;
        x2 = 0;
    } else {

        document.getElementById('text2').value = 0;
        q2 = q2 - x - x2 - x3;
        document.getElementById('ot22').value = q2;
        x2 = 0;
    }
    z = 0;
    k = 0;
    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }

    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train11.style.left = timePassed / 2 + 'px';


        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z11.onclick = function () {
    time4 = 3;

    z = q - x - x2 - x3;
    if (z < 0) {
        var k = x2 - q;
        y2 = y2 + k;
        q = 0;
        document.getElementById('ot11').value = q;
        document.getElementById('text12').value = y2;
        document.getElementById('text2').value = 0;
        x2 = 0;
    } else {
        document.getElementById('text2').value = 0;
        q = q - x2 - x - x3;
        document.getElementById('ot11').value = q;
        x2 = 0;
    }
    z = 0;
    k = 0;

    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train1.style.left = timePassed / 2 + 'px';

        train1.style.top = -timePassed / 7 + 'px';
        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}


z111.onclick = function () {
    time7 = 10;
    z = q - x - x2 - x3;
    if (z < 0) {
        var k = x3 - q;
        y3 = y3 + k;
        q = 0;
        document.getElementById('ot111').value = q;
        document.getElementById('text13').value = y3;
        document.getElementById('text3').value = 0;
        x3 = 0;
    } else {

        document.getElementById('text3').value = 0;
        q = q - x - x2 - x3;
        document.getElementById('ot111').value = q;
        x3 = 0;
    }
    z = 0;
    k = 0;


    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train2.style.left = timePassed / 2 + 'px';
        train2.style.top = -timePassed / 3.5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z333.onclick = function () {
    time9 = 4;
    z = q3 - x - x2 - x3;
    if (z < 0) {
        var k = x3 - q3;
        y3 = y3 + k;
        q3 = 0;
        document.getElementById('ot333').value = q3;
        document.getElementById('text13').value = y3;
        document.getElementById('text3').value = 0;
        x3 = 0;
    } else {


        document.getElementById('text3').value = 0;
        q3 = q3 - x - x2 - x3;
        document.getElementById('ot333').value = q3;
        x3 = 0;
    }
    z = 0;
    k = 0;

    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }

    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train22.style.left = timePassed / 2 + 'px';


        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
z222.onclick = function () {
    time8 = 7;
    z = q2 - x - x2 - x3;
    if (z < 0) {
        var k = x3 - q2;
        y3 = y3 + k;
        q2 = 0;
        document.getElementById('ot222').value = q2;
        document.getElementById('text13').value = y3;
        document.getElementById('text3').value = 0;
        x3 = 0;
    } else {
        document.getElementById('text3').value = 0;
        q2 = q2 - x - x2 - x3;
        document.getElementById('ot222').value = q2;
        x3 = 0;
    }
    z = 0;
    k = 0;

    if ((q == 0) && (q3 == 0) && (q2 == 0)) {
        document.getElementById('oq').style.visibility = "visible";
        max = Math.max(time1, time2, time3, time4, time5, time6, time7, time8, time9);
        if (max == 5) {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Вы нашли самые кратчайшие пути!");
        } else {
            document.getElementById('q').innerHTML = (max + " </br> Дней! </br></br> Ваши пути не самые кратчайшие,</br> попробуйте найти короче!");
        }
        document.getElementById('z111').style.visibility = "hidden";
        document.getElementById('z222').style.visibility = "hidden";
        document.getElementById('z333').style.visibility = "hidden";
        document.getElementById('ques').style.visibility = "hidden";
        document.getElementById('refresh').style.visibility = "hidden";
        document.getElementById('z1').style.visibility = "hidden";
        document.getElementById('z2').style.visibility = "hidden";
        document.getElementById('z3').style.visibility = "hidden";
        document.getElementById('z11').style.visibility = "hidden";
        document.getElementById('z22').style.visibility = "hidden";
        document.getElementById('z33').style.visibility = "hidden";
        document.getElementById('h1').style.visibility = "hidden";
        document.getElementById('h2').style.visibility = "hidden";
        document.getElementById('h3').style.visibility = "hidden";
        document.getElementById('train').style.visibility = "hidden";
        document.getElementById('train0').style.visibility = "hidden";
        document.getElementById('train1').style.visibility = "hidden";
        document.getElementById('train11').style.visibility = "hidden";
        document.getElementById('train2').style.visibility = "hidden";
        document.getElementById('train22').style.visibility = "hidden";
        document.getElementById('zad').style.visibility = "hidden";
    }
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train2.style.left = timePassed / 2 + 'px';

        train2.style.top = -timePassed / 7 + 'px';
        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}

let h1 = document.querySelector('#h1')
let h2 = document.querySelector('#h2')
let h3 = document.querySelector('#h3')

h1.addEventListener('touchstart', h1f)
h2.addEventListener('touchstart', h2f)
h3.addEventListener('touchstart', h3f)

function h1f() {
    document.getElementById('z1').style.visibility = "visible";

    document.getElementById('z2').style.visibility = "visible";
    document.getElementById('z3').style.visibility = "visible";
    document.getElementById('ot1').value = q;
    document.getElementById('ot2').value = q2;
    document.getElementById('ot3').value = q3;
    document.getElementById('z11').style.visibility = "hidden";
    document.getElementById('z22').style.visibility = "hidden";
    document.getElementById('z33').style.visibility = "hidden";
    document.getElementById('z111').style.visibility = "hidden";
    document.getElementById('z222').style.visibility = "hidden";
    document.getElementById('z333').style.visibility = "hidden";


}


function h2f() {
    document.getElementById('z11').style.visibility = "visible";
    document.getElementById('z22').style.visibility = "visible";
    document.getElementById('z33').style.visibility = "visible";
    document.getElementById('ot11').value = q;
    document.getElementById('ot22').value = q2;
    document.getElementById('ot33').value = q3;
    document.getElementById('z1').style.visibility = "hidden";
    document.getElementById('z2').style.visibility = "hidden";
    document.getElementById('z3').style.visibility = "hidden";
    document.getElementById('z111').style.visibility = "hidden";
    document.getElementById('z222').style.visibility = "hidden";
    document.getElementById('z333').style.visibility = "hidden";

}
function h3f() {
    document.getElementById('z111').style.visibility = "visible";
    document.getElementById('z222').style.visibility = "visible";
    document.getElementById('z333').style.visibility = "visible";
    document.getElementById('ot111').value = q;
    document.getElementById('ot222').value = q2;
    document.getElementById('ot333').value = q3;
    document.getElementById('z1').style.visibility = "hidden";
    document.getElementById('z2').style.visibility = "hidden";
    document.getElementById('z3').style.visibility = "hidden";
    document.getElementById('z11').style.visibility = "hidden";
    document.getElementById('z22').style.visibility = "hidden";
    document.getElementById('z33').style.visibility = "hidden";

}


var x = 0;
var x2 = 0;
var x3 = 0;

function r1() {

    if (y <= 0) {
        document.getElementById('text1').value = 0;
    } else {
        y = y - 1;
        x = x + 1;
        document.getElementById('text1').value = y;
    }
    if (x > 20) {
        x = 20;
    }
    document.getElementById('text').value = x;
}

function r2() {
    x = x - 1;

    if (y >= 20) {
        document.getElementById('text1').value = 20;
    } else {
        if (x >= 0) {
            y = y + 1;
            document.getElementById('text1').value = y;
        }
    }
    if (x == -1) {
        x = 0;
    } else {

        document.getElementById('text').value = x;
    }
}


function r3() {

    if (y2 <= 0) {
        document.getElementById('text12').value = 0;
    } else {
        y2 = y2 - 1;
        x2 = x2 + 1;
        document.getElementById('text12').value = y2;
    }
    if (x2 > 50) {
        x2 = 50;
    }
    document.getElementById('text2').value = x2;
}


function r4() {
    x2 = x2 - 1;

    if (y2 >= 50) {
        document.getElementById('text12').value = 50;
    } else {
        if (x2 >= 0) {
            y2 = y2 + 1;
            document.getElementById('text12').value = y2;
        }
    }

    if (x2 == -1) {
        x2 = 0;
    } else {
        document.getElementById('text2').value = x2;

    }
}


function r5() {
    if (y3 <= 0) {
        document.getElementById('text13').value = 0;
    } else {
        y3 = y3 - 1;
        x3 = x3 + 1;
        document.getElementById('text13').value = y3;
    }

    if (x3 > 30) {
        x3 = 30;
    }
    document.getElementById('text3').value = x3;
}

function r6() {
    x3 = x3 - 1;

    if (y3 >= 30) {
        document.getElementById('text13').value = 30;
    } else {
        if (x3 >= 0) {
            y3 = y3 + 1;
            document.getElementById('text13').value = y3;
        }
    }

    if (x3 == -1) {
        x3 = 0;
    } else {
        document.getElementById('text3').value = x3;

    }
}

refresh.onclick = function () {
    location.reload();
}

wr2.onclick = function () {
    document.getElementById('ful').style.visibility = "visible";
    document.getElementById('wr2').style.visibility = "hidden";
    document.getElementById('z11').style.visibility = "visible";
    document.getElementById('z22').style.visibility = "visible";
    document.getElementById('z33').style.visibility = "visible";
    document.getElementById('ot11').value = q;
    document.getElementById('ot22').value = q2;
    document.getElementById('ot33').value = q3;
    document.getElementById('z1').style.visibility = "hidden";
    document.getElementById('z2').style.visibility = "hidden";
    document.getElementById('z3').style.visibility = "hidden";
    document.getElementById('z111').style.visibility = "hidden";
    document.getElementById('z222').style.visibility = "hidden";
    document.getElementById('z333').style.visibility = "hidden";
}
ques.onclick = function () {
    document.getElementById('ful').style.visibility = "hidden";
    document.getElementById('wr2').style.visibility = "visible";
    document.getElementById('z11').style.visibility = "hidden";
    document.getElementById('z22').style.visibility = "hidden";
    document.getElementById('z33').style.visibility = "hidden";

    document.getElementById('z1').style.visibility = "hidden";
    document.getElementById('z2').style.visibility = "hidden";
    document.getElementById('z3').style.visibility = "hidden";
    document.getElementById('z111').style.visibility = "hidden";
    document.getElementById('z222').style.visibility = "hidden";
    document.getElementById('z333').style.visibility = "hidden";
}

const r1Element = document.querySelector('#r1')
const r2Element = document.querySelector('#r2')
const r3Element = document.querySelector('#r3')
const r4Element = document.querySelector('#r4')
const r5Element = document.querySelector('#r5')
const r6Element = document.querySelector('#r6')

r1Element.addEventListener('touchstart', function () {
    let interval = setInterval(r1, 100)
    r1Element.addEventListener('touchend', () => clearInterval(interval))
})

r2Element.addEventListener('touchstart', function () {
    let interval = setInterval(r2, 100)
    r2Element.addEventListener('touchend', () => clearInterval(interval))
})

r3Element.addEventListener('touchstart', function () {
    let interval = setInterval(r3, 100)
    r3Element.addEventListener('touchend', () => clearInterval(interval))
})

r4Element.addEventListener('touchstart', function () {
    let interval = setInterval(r4, 100)
    r4Element.addEventListener('touchend', () => clearInterval(interval))
})

r5Element.addEventListener('touchstart', function () {
    let interval = setInterval(r5, 100)
    r5Element.addEventListener('touchend', () => clearInterval(interval))
})

r6Element.addEventListener('touchstart', function () {
    let interval = setInterval(r6, 100)
    r6Element.addEventListener('touchend', () => clearInterval(interval))

})

const btns = document.querySelectorAll('.plus,.min')
btns.forEach((item) => item.addEventListener('contextmenu', event => event.preventDefault()))