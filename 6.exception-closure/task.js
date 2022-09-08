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
        if (a + b < c || a + c < b || b + c < a) {
            throw new SyntaxError("Треугальника с такими сторонами не существует")
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        cost p = this.getPerimeter * 0.5;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c).toFixed(3));

    }
}