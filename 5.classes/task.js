class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }
    fix (){
        this.state = this.state * 1.5;
    }

    get state () {
        return this._state;
    }

    set state (value) {

        if (this.state < 0) {
            this._state = 0;
            return;
        } else
        if (this.state > 100) {
            this._state = 100;
            return;
        } this._state = value;

    }

}

class Magazine extends PrintEditionItem {
    constructor (type) {
        super ();
        this.type = "magazine";
    }

}

class Book extends PrintEditionItem {
    constructor (author,... args) {
        super (...args);
        this.author = author;
        this.type = "book";
    }

}

class NovelBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "novel";
    }

}

class FantasticBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books[length] = book;
        }
    }

    findBookBy(type, value){
        return (this.books.find(book => book[type]  === value) ?? null);
    }

    giveBookByName(bookName){
        return this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1)[0] ?? null;
    }
}


class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addMark(mark, subject){
        if (this.subjects.find(obj => obj.name === subject) === undefined){
            this.subjects.push({name: subject, marks: []});
        }
        this.subjects.find(obj => obj.name === subject).marks.push(mark);
    }

    getAverageBySubject(subject){
        let marksArr = this.subjects.find(obj => obj.name === subject).marks;
        return marksArr.reduce(function (sum, element) {return sum+element;}, 0) / marksArr.length;
    }

    getAverage(){
        let marksArr = [];
        this.subjects.forEach(function (elem) {
            marksArr.push(elem.marks.reduce(function (sum, element) {return sum+element;}, 0) / elem.marks.length);
        });
        return marksArr.reduce(function (sum, element) {return sum+element;}, 0) / marksArr.length;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.type);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

