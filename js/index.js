$(document).ready(function () {

    let sliders = [
        'img/slider/1.jpg',
        'img/slider/2.jpg',
        'img/slider/3.jpg',
        'img/slider/4.jpg'
    ];

    $(window).on('load', function () {

        let slidesToShow;

        switch(true){
            case (screen.width < 600):
                slidesToShow = 1;
                break;
            case (screen.width >= 600 && screen.width < 768):
                slidesToShow = 2;
                break;
            case (screen.width >= 768 && screen.width < 1000):
                slidesToShow = 3;
                break;
            default:
                slidesToShow = 4;
        }

        $('.offers').slick({
            infinite: true,
            dots: false,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: false,
            label1: 'rew',
            label2: 'ff'
        });

        let slideIndex = 0;

        $('.header-slider-control').on('click', function () {
            slideIndex = $(this).hasClass('right') ? slideIndex + 1 : slideIndex - 1;
            slideIndex = slideIndex > sliders.length - 1 ? 0 : slideIndex;
            slideIndex = slideIndex < 0 ? sliders.length - 1 : slideIndex;
            let container = $('.header-sliders-container .sliders');
            let css = 'background:url(' + sliders[slideIndex] + ')top no-repeat;"';
            container.append('<div class="slider animated" style="' + css + '"></div>');
            container.children('.slider').last().animate({
                opacity: 1
            }, 300);
            if (container.children('.slider').length > 2)
                container.children('.slider').first().remove();
        });

        //SWIPE
        let swipe_container = document.querySelector('.offers');
        let swipe = 0;
        swipe_container.addEventListener('touchstart', function (event) {
            if (screen.width >= 999)
                return false;
            console.log('98');
            swipe = event.touches[0].clientX;
        });

        swipe_container.addEventListener('touchmove', function (event) {
            if (screen.width >= 999)
                return false;

            if (event.touches[0].clientX - swipe > 30) {
                $('#rew').click();
            }
            else if (swipe - event.touches[0].clientX > 30) {
                $('#ff').click();
            }

        });



        $('.hamburger').on('click', function () {
            $('header').addClass('visible');
            $('body').css({overflow:'hidden'}).append('<div class="blured"></div>');
        });

        $(window).on('click', function (e) {
            if ($(e.target).closest('header')[0] === undefined && $(e.target).closest('.hamburger')[0] === undefined) {
                $('header').removeClass('visible');
                $('body').css({overflow:'inherit'}).find('.blured').remove();
            }
        });
    });




});