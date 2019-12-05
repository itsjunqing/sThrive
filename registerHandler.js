const firebaseConfig = {
  apiKey: "AIzaSyB9TuQQgCoeqvGrx3hgK0CvOJOWmSNPDNI",
  authDomain: "wachacha-project.firebaseapp.com",
  databaseURL: "https://wachacha-project.firebaseio.com",
  projectId: "wachacha-project",
  storageBucket: "wachacha-project.appspot.com",
  messagingSenderId: "712098166009",
  appId: "1:712098166009:web:504b4598188be704d9de28",
  measurementId: "G-6V73LZGK78"
};
firebase.initializeApp(firebaseConfig);

// let formMessage = firebase.database().ref("login");
let registerMessage = firebase.database().ref("register");

// registration form
const sendRegister = (name, email, password, school, interests) => {
	let userInfo = registerMessage.push();
	userInfo.set({
		name: name, 
		email: email, 
		password: password, 
		school: school, 
		interests: interests
	})
}

const registerSubmit = e => {
	e.preventDefault();
	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	let school = document.querySelector("#school").value;
	let interest1 = document.querySelector("#interest1").value;
	let interest2 = document.querySelector("#interest2").value;
	let interests = []
	interests.push(interest1);
	interests.push(interest2);
	sendRegister(name, email, password, school, interests);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
		var errorCode = error.code;
    	var errorMessage = error.message;
    	console.log(error);
	});
	console.log("successful")
	alert("Register successful");
	window.location = "./index.html";

}

document.getElementById("registrationForm").addEventListener("submit",registerSubmit);

// const loginSubmit = e => {
// 	e.preventDefault();
// 	let email = document.querySelector("#email").value;
// 	let password = document.querySelector("#password").value;
// 	firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
// 		var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode === 'auth/wrong-password') {
// 	    alert('Wrong password.');
// 	  } else {
// 	    alert(errorMessage);
// 	  }
// 	})
// 	alert("Login successful");
// }

// document.getElementById("loginForm").addEventListener("submit", loginSubmit);

// login form
// const formSubmit = e => {
// 	e.preventDefault();
// 	let email = document.querySelector("#inputEmail").value;
// 	let password = document.querySelector("#inputPassword").value;
// 	// console.log("Email = " + email + "; Password = " + password);
// 	sendMessage(email, password);
// 	document.location.reload(true);
// }

// // listen login event
// document.getElementById("registrationForm").addEventListener("submit", formSubmit);

// const sendMessage = (email, password) => {
// 	let credentials = formMessage.push();
// 	credentials.set({
// 		email: email, 
// 		password: password
// 	})
// }


// function formSubmit(e) {
//   e.preventDefault();
//   // Get Values from the DOM
//   let name = document.querySelector('#name').value;
//   let email = document.querySelector('#email').value;
//   let password = document.querySelector('#password').value;
//   let bio = document.querySelector('#bio').value;
//   let job = document.querySelector('#job').value;
//   let interest = document.querySelector('#interest').value;