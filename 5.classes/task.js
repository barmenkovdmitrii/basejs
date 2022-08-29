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
    set state (value) {
        this.state = value;
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


