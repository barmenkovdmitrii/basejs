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
 let userStudent1 = new Student("oleg", "man", 22);
 let userStudent2 = new Student("Vasya","man",32);

 userStudent2.subjectName = "English";
// ваш код для остальных методов