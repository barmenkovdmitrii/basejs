class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }
    fix (){
        this.state * 1.5;
    }

    get state () {
        return this._state;
    }

    set state (value) {
        if (this.state <= 0) {
            this._state = 0;
            return
        } else
        if (this.state >= 100) {
            this._state = 100;
            return
        } this._state = value;

    }
}

class Magazine extends PrintEditionItem {
    constructor (type) {
        super();
        this.type = "magazine";
    }

}

