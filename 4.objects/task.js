function Student(name, gender, age) {
    // Ваш код
   this.name = name;
   this.gender = gender;
   this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
    this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (!this.marks?.length) {
        this.marks = [mark]
        return
    }
    this.marks.push(mark)
}


}

Student.prototype.addMarks = function (mark1,mark2,mark3...) {
    this.marks =

}

Student.prototype.getAverage = function (){
    this.getAverage = console.log();

}
// Среднее арифмитическое

 let userStudent1 = new Student("oleg", "man", 22);
 let userStudent2 = new Student("Vasya","man",32);

 userStudent2.setSubject("english");
 userStudent2.addMark(5);


if(this.marks === undefined){
    // добавить первую оценку
} else {
    // добавить вторую и последующие оценки в массив
}

// ваш код для остальных методов