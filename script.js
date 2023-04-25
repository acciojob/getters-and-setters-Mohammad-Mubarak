//complete this code
class Person {
	constructor(name,age){
		this.age =age
		this.name=name
	}

	getName(){
		return this.name
	}

	setAge(age){
		this.age =age
	}
}

class Student extends Person {

	study(){
		console.log(name)
	}
}

class Teacher extends Person {
	teach(){
		console.log(name)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
