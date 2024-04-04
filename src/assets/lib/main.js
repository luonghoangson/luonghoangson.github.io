import $ from 'jquery';

export function effectScroll(){
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".list-items").each(function() {
            var objectBottom = $(this).offset().top + $(this).height();
            if (objectBottom < windowBottom) {
                $(".list-items").removeClass('active');
                $(this).addClass('active');
            }
        });
    }).scroll();
}