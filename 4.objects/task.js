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
    this.addMark = mark;

}

 let userStudent1 = new Student("oleg", "man", 22);
 let userStudent2 = new Student("Vasya","man",32);

 userStudent2.setSubject("English");
 userStudent2.addMark = 5;


if(this.marks === undefined){
    // добавить первую оценку
} else {
    // добавить вторую и последующие оценки в массив
}

// ваш код для остальных методов