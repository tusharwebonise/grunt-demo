$(document).ready(function() {
    $('.fancybox').fancybox();

    $('#mainNav a').click(function(){
        var tabId = $(this).attr('href')
        $('html,body').animate({
            scrollTop : $(tabId).offset().top - 80
        })
        return false
    })
});