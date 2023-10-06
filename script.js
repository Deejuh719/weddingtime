const texts = ['Consider This Your Invitation', 'Click the page, I dare ya!'];

texts.forEach(text =>
    {
        const div = document.createElement('div');
        let p = document.createElement('p');
        div.appendChild(p);
        document.body.appendChild(div);
    });

function typing(p, index, text) {
    p.innerHTML = text.substr(0, index);
    if(index<text.length)
    {
        setTimeout(typing, speed, p, index+1, text);
    }
}
/**var ele = '<span>' + text.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('div').each(function(i))
{
    $(this).delay(100*i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    },100):
});*/

document.onclick=function(){
    document.location.href="invite.html";
    alert('You Should Not Have Done That!');
}
