$('.nav-header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});

$('.banner-inicial .content-banner a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top

    $('html, body').animate({
        scrollTop: targetOffset
    }, 900);
});

$('.contact a:last-child').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});

$('.introduçao-Lex .content-introduçao a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top

    $('html, body').animate({
        scrollTop: targetOffset
    }, 900);
});

$('.nav-footer a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});

$('.sobre-lex .container-sobre-lex a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});