function greetUser(){
	var userName = document.getElementById("UserName").value;
	var welcomeUser = "Welcome " + userName + "!";
	console.log(welcomeUser);
	window.alert(welcomeUser);
	return false;
}