$(document).ready(function() {
    $('.carausel__thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
    })
    $('img[src="/images/holiday1.svg"]').click(function () {
        $(this).attr('src',"/images/holiday1.svg") 
    });
    $('img[src="/images/holiday2.svg"]').click(function () {
        $(this).attr('src',"/images/holiday1.svg")
    });
});

