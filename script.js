document.addEventListener('DOMContentLoaded', function(){
    function typing(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
    
        var i = 0;
        var timer = setInterval(function() {
            if(i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    
    var speedH1 = 100;
    var speedP = 100;
    var h1 = document.querySelector('h1');
    var p = document.getElementById('secondLine')
    var delay = h1.innerHTML.length * speedH1 + speedH1;
    
    typing(h1, speedH1);
    
    setTimeout(function(){
        p.style.display = "flex";
        typing(p, speedP);
    }, delay);

    document.onclick=function(){
        document.location.href="invite.html";
        alert('You Should Not Have Done That!');
    }
});

