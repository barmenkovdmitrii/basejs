function Student(name, gender, age) {
    // Ваш код
   this.name = name;
   this.gender = gender;
   this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //добавление предмета
    this.subjectName = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (!this.marks?.length) {
        this.marks = [mark]
        return
    }
    this.marks.push(mark)
    // добавление оценок в массив
}


Student.prototype.addMarks = function (...marks) {
    t  if (!this.marks?.length) {
        this.marks = [...marks]
        return
    }
    this.marks.push(...marks)
// добавление массива оценок
}


Student.prototype.getAverage = () => {
    this.getAverage = console.log();

}
// Среднее арифмитическое

 let userStudent1 = new Student("oleg", "man", 22);
 let userStudent2 = new Student("Vasya","man",32);

 userStudent2.setSubject("english");
 userStudent2.addMark(5);



// ваш код для остальных методов