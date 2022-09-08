const parseCount = () => {
    if(isNaN(Number.parseInt())){
        throw new SyntaxError("Невалидное значение");
    }else{
        return Number.parseInt();
    }
}

const validateCount = (count) => {
    try {
        return parseCount(count);
    }catch (error) {
        return error;
    }

}

class Triangle {
    constructor(a,b,c) {
        if (a + b > c || a + c > b || b + c > a) {
            throw new
        }

    }

    getPerimeter () {
        this
    }
}