jQuery(document).ready(function(){
    jQuery('div.single-item').slick(
        {
             draggable: true,
             accessibility: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            arrows: true,
             infinite: true,
             swipeToSlide: true,
             prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-arrow-left'></i></button>",
             nextArrow:"<button type='button' class='slick-next'></button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
});
