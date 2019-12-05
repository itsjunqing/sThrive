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

const loginSubmit = e => {
	e.preventDefault();
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	
	// catch the unsuccessful login
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		
		if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
		} else {
			alert(errorMessage);
		}		
	});
	
	// message for successful login
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
		// Redirect to chat
		window.location.href = "./chat.html"
	});


	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
	    // User is signed in.
	    window.location = "./chat.html";
	    console.log(user.uid);
	    // window.location.assign("chat.html");
  	} else {
    	// No user is signed in.
	    console.log("I'm a potato")
  }
});	



	
	// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// 	console.log("error")
	//   });
	// alert("Login successful");
	// document.location.reload(true);
}

document.getElementById("loginForm").addEventListener("submit", loginSubmit);
