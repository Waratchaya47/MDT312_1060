window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
    var keys = Object.keys(data);
    var alldiv = document.querySelectorAll("#layer div");
    for(var i =0; i< keys.length;i++){
        
        var temp = document.createElement("p");
        temp.innerHTML = data[keys[i]].brandname;
        alldiv[i].appendChild(temp);

        var temp = document.createElement("img");
        temp.setAttribute("src", "pic/" + data[keys[i]].pic);
        alldiv[i].appendChild(temp);

        var temp = document.createElement("p");
        temp.innerHTML = data[keys[i]].price + "฿";
        alldiv[i].appendChild(temp);
}
}
