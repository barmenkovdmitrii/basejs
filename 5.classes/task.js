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
    constructor (author,name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }

}

class NovelBook extends Book {
    constructor () {
        super ();
        this.type = "novel";
    }

}

class FantasticBook extends Book {
    constructor (author) {
        super (author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor () {
        super ();
        this.type = "detective";
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

