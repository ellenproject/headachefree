$(window).scroll(function(){
    if($(window).scrollTop() > ($('.nav').height())){
        $('.nav, .m_menu').addClass('bgMode');
    }else{
        $('.nav, .m_menu').removeClass('bgMode');
    }

    if($(window).scrollTop() > ($('.laser').offset().top) / 1.5 && ($('footer').offset().top - $(window).scrollTop()) > $('footer').innerHeight() * 0.5){
        $('.sidemenuBox').addClass('active');
    }else{
        $('.sidemenuBox').removeClass('active');
    }
})

//nav desk
$('.nav .dropDown').on('mouseenter', function(){
    $(this).find('.submenuBox').addClass('current');
}).mouseleave(function(){
    $(this).find('.submenuBox').removeClass('current');
});

//nav mobile
$('.m_menu').find('a.hamburger').on('click', function(){
    if(!$(this).parents('.m_menu').hasClass('active')){
        $(this).parents('.m_menu').addClass('active');
        $(this).addClass('show');
        $('.m_menu').find('.mask').fadeIn(100);
        $('.m_menu').find('.hideBox').fadeIn(100);
        $('body').css('overlfow', 'hidden');
        //點空白處收起menu
        $('.m_menu').find('.mask').on('click', function(){
            $('.m_menu').removeClass('active');
            $('.m_menu').find('.hideBox').fadeOut();
            $('.m_menu').find('.mask').fadeOut();
            $('.m_menu').find('a.hamburger').removeClass('show');
            $('body').css('overflow', 'auto');
        });
    }else{
        $(this).parents('.m_menu').removeClass('active');
        $(this).removeClass('show');
        $('.m_menu').find('.mask').fadeOut();
        $('.m_menu').find('.hideBox').fadeOut();
        $('body').css('overflow', 'auto');
    }//end if hasClass
    return false;
});

//navbar下滑到白色背景時換色
$(window).on('scroll', function(){
    var mobile = window.matchMedia("(max-width: 480px)");
    myFunction(mobile);
    mobile.addListenter(myFunction);
    
    function myFunction(mobile){
        if(mobile.matches){
            $('body').removeClass('dark-theme')
        }else{
            var trigger = $('.medicine').offset().top - $('nav').height() - 20;
            if($(this).scrollTop() > trigger){
                $('body').addClass('dark-theme');
            }else{
                $('body').removeClass('dark-theme');
            }
        }
    }
})

//fullpage
$('#fullpage').fullpage({
    scrollingSpeed: 1000, 
    scrollBar: true,
    responsiveWidth: 1199,
    responsiveHeight: 620,
    lazyLoading: false,
})

//swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100, 
    loop: true,
    allowTouchMove: false, 
    unpdateOnWindowResize: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function(){
    //大標
    $('.medicine-txt-tabs li').click(function(e){
        e.preventDefault();
        
        let item = $(this).data('item');
        $(`.item--${item}`).addClass('item--active').siblings().removeClass('item--active');
        $(`.show--${item}`).fadeIn(50).addClass('show--active').siblings().fadeOut(100).removeClass('show--active')
    });

    //小標
    $(".appear").css("display", "block");
    $('.collapse .subtitle').click(function(e){
        e.preventDefault();
        
        if($(this).hasClass("active")){
            $(this).removeClass;
            $(this).siblings(".accordion").slideUp(200);
        }else{
            $(".collapse .subtitle").removeClass("active");
            $(this).addClass("active");
            $(".accordion").slideUp(200);
            $(this).siblings(".accordion").slideDown(200);
        }
    });

    //case simplelightbox
    $('.gallery').find('a').simpleLightbox({});
    
    
})
