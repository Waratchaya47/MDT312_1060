window.onload = loginLoad;
function loginLoad(){

	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	
	var usernameLogin = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];
	
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	console.log(username);

	const password = urlParams.get('password')
	console.log(password);

	if (usernameLogin.value != username ||  pass.value != password) {
			alert("wrong pass!! try again");
			return false;
		}
		else{
			alert("Success!!");
		}
	}


			