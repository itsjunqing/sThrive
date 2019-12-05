class Student {
	constructor(name, school, interests) {
		this.name = name;
		this.school = school;
		this.interests = interests;
	}

	printInfo() {
		console.log("Name = " + this.name + "; School = " + this.school + "; Interests = " + this.interests);
	}

	couldMatchWith(student) {
		return student.interests.includes(this.school) && this.interests.includes(student.school)
	}
}

const database = firebase.database().ref("register");
let studentsList = []
let idsList = []

const updateList = snapshot => {
	snapshot.forEach(childSnapshot => {
		const id = childSnapshot.ref.path.pieces_[1];
		const data = childSnapshot.val();
		
		if (!idsList.includes(id)) {
			studentsList.push(new Student(data.name, data.school, data.interests));
			idsList.push(id);	
			console.log("new student added: "+ data.name);
		}
	})
}

const generatePairs = studentsList => {
	var result = []
	for (let i = 0; i < studentsList.length; i++) {
		for (let j = i+1; j < studentsList.length; j++) {
			result.push([studentsList[i], studentsList[j]])
		}
	}
	return result;
}

const filterPairs = studentPairs => studentPairs.filter(pair => pair[0].couldMatchWith(pair[1]))

const studentPairs = filterPairs(generatePairs(studentsList));

const updateMachine = setInterval(() => {
	database.on("value", updateList)
}, 1000)

const stopMachine = setTimeout(() => clearInterval(updateMachine), 500000);
