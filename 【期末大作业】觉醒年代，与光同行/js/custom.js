// JavaScript Document

$(window).load(function() {
    "use strict";
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });


    // music
    let music = document.querySelector('#music');
    let music_ctrl = document.querySelector('#music_ctrl');
    // music_control
    music_ctrl.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            music_ctrl.style.animation = 'playing infinite linear 2s';
        } else {
            music.pause();
            music_ctrl.style.animation = 'none';

        }
    });
})

$(document).ready(function() {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function() {
        $(window).stellar();
    };

    $(function() {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function() {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function() {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01").animatedModal01();
    $("#demo02").animatedModal02();
    $("#demo03").animatedModal03();
    $("#demo04").animatedModal04();
    $("#demo05").animatedModal05();
    $("#demo06").animatedModal06();
    $("#demo07").animatedModal07();
    $("#demo08").animatedModal08();
    $("#demo09").animatedModal09();



    // Contact Form 	

    // validate contact form
    $(function() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "姓名不能为空！",
                    minlength: "您的名字必须包含至少两个字符"
                },
                email: {
                    required: "邮箱不能为空！"
                },
                message: {
                    required: "留言不能为空！"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function() {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contact').fadeTo("slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});

// top btn 
$(function() {
    $(window).scroll(function() {
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
        if (scrollt > 200) {
            $("#gotop").fadeIn(400);
        } else {
            $("#gotop").stop().fadeOut(400);
        }
    });
    $("#gotop").click(function() {
        $("html,body").animate({ scrollTop: "0px" }, 200);
    });
});