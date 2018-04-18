$('.glossary-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".btn-scroll-down").on("click", function () {

    $('html, body').animate({
        scrollTop: $(".knowledge").offset().top
    }, 800);
});