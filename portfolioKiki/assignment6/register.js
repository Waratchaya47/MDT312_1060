window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
	form.onsubmit = validateForm;
}


function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var x = document.forms["myRegister"]["password"];
    var Z = document.getElementsByName("password")[1].value;
    if (x[0].value != Z) {
        document.getElementById('errormsg').innerText = "wrong pass";
        return false;
    }
    //form.onsubmit = loginLoad;
 
}

