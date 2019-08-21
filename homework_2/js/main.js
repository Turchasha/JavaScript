//1
var userObj = {
    firstName: 'Arthur',
    lastName: 'Shaburin',
    age: 26,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(userObj);

//2
console.log(userObj.fullName());

//3
function defUpperStr(str) {
    return (str || 'Default text').toUpperCase()
};
console.log(defUpperStr('My text'));
console.log(defUpperStr());

//4
function evenFn(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) if(i % 2 === 0) arr.push(i);
    return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

//5
function weekFn(n) {
    var dayWeek = '';
    switch(n) {
        case 1: dayWeek = 'Понедельник';break;
        case 2: dayWeek = 'Вторник';break;
        case 3: dayWeek = 'Среда';break;
        case 4: dayWeek = 'Четверг';break;
        case 5: dayWeek = 'Пятница';break;
        case 6: dayWeek = 'Суббота';break;
        case 7: dayWeek = 'Воскресенье';break;
        default: dayWeek = null;
    }
    return dayWeek;
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(8));
console.log(weekFn('Пятница'));

//6
function ageClassification(n) {
    return n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null;
}
console.log(ageClassification(5));
console.log(ageClassification(0));
console.log(ageClassification(25));
console.log(ageClassification(65));
console.log(ageClassification(70));
console.log(ageClassification(88));
console.log(ageClassification(150));

//7
function oddFn(n) {
    var arr = [];
    var i = 0;
    while (i++ < n) if (i % 2 !== 0) arr.push(i);
    return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

//8
function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') {
        return cb (a, b);
    } else {
        return false;
    }
}
function cbRandom(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
function cbPow(num, pow) {
    return Math.pow(num, pow);
}
console.log(mainFunc(2, 5, cbPow));
function cbAdd(num1, num2) {
    return num1 + num2;
}
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

