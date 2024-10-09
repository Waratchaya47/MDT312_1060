//alert("welcome to the forum");

window.onload = head;

function head(){
    var head = document.getElementById('top');
    head.innerText = "Welcome to the Forum";
   
}

let postcount = 0 ;

function postFunction(){
    var message = document.getElementById("message").value;

    if(postcount == 0){
        document.getElementById('topic').innerText = message;
        postcount ++;
    } else if (postcount == 1) {
        document.getElementById('reply1').innerText = message;
        postcount ++;
    } else if (postcount == 2){
        document.getElementById('reply2').innerText = message;
        postcount ++;
    }
    document.getElementById("message").value = " ";
}
    
    
function clearFunction(){
    document.getElementById('topic').innerText = " ";
    document.getElementById('reply1').innerText = " ";
    document.getElementById('reply2').innerText = " ";
    postcount = 0;
}