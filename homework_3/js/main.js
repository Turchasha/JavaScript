//1
var counter = function(n) {
    counter.count = n !== undefined ? n : counter.count;
    return counter.count++;
};
counter.count = 0;
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());

//2
let counting = function() {
    let count = 0;

    return {
        value(n) {
            if (n !== undefined) count = n;
            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    };
}();
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());

//3
let myPrint = function(a, b, res) {
    return `${a}^${b}=${res}`;
};

let myPow = function(a, b, callback) {
    let pow = function(x, n) {
        if (n !== 1) return x *= pow(x, n - 1);
        return x;
    };
    return callback(a, b, pow(a, b));
};
console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

//4, 5, 6
let yearNow = new Date().getFullYear();
let car = {
    engine: 1800,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2006,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if(value === 'new' && this.year < yearNow) this.year = yearNow;
    },
    info: information
};
let carInfinite = {
    engine: 2000,
    model: 'RX3000',
    name: 'Infinite',
    year: 2019,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if(value === 'new' && this.year < yearNow) this.year = yearNow;
    },
    info: information
};
function information() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};
console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(carInfinite.info());
carInfinite.used = 'used';
console.log(carInfinite.info());

//7
let myMax = function(arr) {
    return Math.max.apply(Math, arr);
};
let list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list));

//8
let myMul = function(a, b) {
    return a * b;
};
//console.log(myMul(2, 3));
//console.log(myMul(2, 4));
//console.log(myMul(2, 5));
let myDouble = myMul.bind(null, 2);
console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
let myTriple = myMul.bind(null, 3);
//console.log(myMul(3, 3));
//console.log(myMul(3, 4));
//console.log(myMul(3, 5));
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

//#9
let notUniqNums = [0, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
let myUniq = function(arr) {
    let set = new Set();
    arr.forEach((val) => {
        set.add(val);
    });
    return set;
};
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));




