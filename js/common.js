$(document).ready(function() {

    $('.tab-slider').slick({
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '200px',
        responsive: [{

            breakpoint: 991,
            settings: {
                centerPadding: '64px'
            },

            breakpoint: 766,
            settings: {
                centerPadding: '40px'
            },

            breakpoint: 480,
            settings: {
                centerPadding: '4px'
            },

        }]

    });

    jQuery('.banner__row').each(function() {
        jQuery(this).find('a').each(function(i) {

            jQuery(this).click(function(e){
                e.preventDefault();
                jQuery(this).addClass('toggle-list__item_active').siblings().removeClass('toggle-list__item_active')
                    .parents('body').find('.tab').eq(i).addClass('tab_visible').fadeIn(900).siblings('.tab').removeClass('tab_visible');
                           

            });
        });
    });

});
