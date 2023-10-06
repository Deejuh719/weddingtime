var i = 0, text;
text = "Consider This Your Invitation. Click the page, I dare ya!"

var ele = '<span>' + text.split('.').join('</span><span>') + '</span>';

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++
        setTimeout(typing,50);
    }
}
typing();

document.onclick=function(){
    document.location.href="invite.html";
    alert('You Should Not Have Done That!');
}
