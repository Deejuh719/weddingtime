var text = `Consider This Your Invitation. 

Click the page, I dare ya!`

var ele = '<span>' + text.split('.').join('</span><span>') + '</span>';

$(ele).hide().appendTo('div').each(function(i))
{
    $(this).delay(100*i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    },100):
});

document.onclick=function(){
    document.location.href="invite.html";
    alert('You Should Not Have Done That!');
}
