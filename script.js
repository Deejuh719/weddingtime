var i = 0, text;
text = "Consider This Your Invitation"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++
        setTimeout(typing,50);
    }
}
typing();

var a = 0, text2;
text2 = "Click the page! I dare ya!"

function typing(){
    if(a<text2.length){
        document.getElementById("text2").innerHTML += text2.charAt(i);
        i++
        setTimeout(typing, 100);
    }
}

document.onclick=function(){
    document.location.href="invite.html";
    alert('You Should Not Have Done That!');
}
