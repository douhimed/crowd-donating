jQuery(function ($) {
    'use strict';
    $("#preloader").delay(200).fadeOut("slow");
    $("#materialize-menu-alt").html('<ul class="menuzord-menu">' + $("#menu-list").html() + "</ul>");
    jQuery("#materialize-menu, #materialize-menu-alt").menuzord({
        indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
        indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
    });
    var navBottom = $(".nav-bottom").offset();
    $(window).on('scroll', function () {
        var w = $(window).width();
        if ($(".nav-bottom").length === 0) {
            if (w > 768) {
                if ($(this).scrollTop() > 1) {
                    $('header').addClass("sticky");
                }
                else {
                    $('header').removeClass("sticky");
                }
            }
        } else {
            if (w > 768) {
                if ($(this).scrollTop() > navBottom.top + 100) {
                    $('header').addClass("sticky");
                }
                else {
                    $('header').removeClass("sticky");
                }
            }
        }
    });
    $(window).on('scroll', function () {
        var w = $(window).width();
        if (w > 768) {
            if ($(this).scrollTop() > 1) {
                $('.mainmenu').slideUp(function () {
                    $('.menu-appear-alt').css({position: "fixed", top: 0, left: 0, width: w, zIndex: 99999});
                    $('.menu-appear-alt').slideDown();
                });
            }
            else {
                $('.menu-appear-alt').slideUp(function () {
                    $('.menu-appear-alt').css({position: "relative", top: 0, left: 0, width: w, zIndex: 99999});
                    $('.mainmenu').slideDown();
                });
            }
        }
        $(".nav-bottom").css("z-Index", 100000);
        if (navBottom) {
            if ($(window).scrollTop() > (navBottom.top)) {
                $(".nav-bottom").css({"position": "fixed", "top": "0px", "left": "0px"});
            } else {
                $(".nav-bottom").css({"position": "fixed", top: navBottom.top - $(window).scrollTop() + "px"});
            }
        }
    });
    $(".op-nav li").on("click", function () {
        if ($(".showhide").is(":visible")) {
            $(".showhide").trigger("click");
        }
        $(".op-nav li").removeClass("active");
        $(this).addClass("active");
    });
    (function () {
        $('.search-trigger').on('click', function (e) {
            $('body').addClass('active-search');
        });
        $('.search-close').on('click', function (e) {
            $('body').removeClass('active-search');
        });
    }());
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 60}, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    if (typeof smoothScroll === 'object') {
        smoothScroll.init();
    }
    $(window).on('resizeEnd', function () {
        $(".fullscreen-banner").height($(window).height());
    });
    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");
    if ($('.nav-tabs').length > 0) {
        $('.nav-tabs').tabCollapse();
    }
    (function () {
        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1], 10) : false;
        }

        if (getIEVersion()) {
            $('html').addClass('ie' + getIEVersion());
        }
    }());
    $('.counter-section').on('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({Counter: 0}).animate({Counter: $this.text()}, {
                    duration: 2000, easing: 'swing', step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
    if ($('#myinstafeed').length > 0) {
        var feed = new Instafeed({
            target: 'myinstafeed',
            limit: 6,
            get: 'user',
            userId: 2963143209,
            accessToken: '2963143209.1677ed0.6cf28ac3f9c041759202e3e1af8baa46'
        });
        feed.run();
    }
    if ($('.countdown').length > 0) {
        $(".countdown").countdown({date: "31 december 2017 12:00:00", format: "on"});
    }
    if ($('.tt-lightbox').length > 0) {
        $('.tt-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false
        });
    }
    if ($('.popup-video').length > 0) {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    if ($('.gallery-thumb').length > 0) {
        $('.gallery-thumb').flexslider({animation: "slide", controlNav: "thumbnails",});
    }
    if ($('.circle-thumb').length > 0) {
        $('.circle-thumb').flexslider({animation: "slide", controlNav: "thumbnails"});
    }
    if ($('.square-thumb').length > 0) {
        $('.square-thumb').flexslider({animation: "slide", controlNav: "thumbnails"});
    }
    if ($('.logo-thumb').length > 0) {
        $('.logo-thumb').flexslider({animation: "slide", controlNav: "thumbnails"});
    }
    if ($('.logo-thumb-right').length > 0) {
        $('.logo-thumb-right').flexslider({animation: "slide", controlNav: "thumbnails"});
    }
    if ($('.parallax-carousel').length > 0) {
        $('.parallax-carousel').flexslider({animation: "slide"});
    }
    if ($('.quote-carousel').length > 0) {
        $('.quote-carousel').owlCarousel({
            loop: true,
            autoHeight: true,
            responsive: {0: {items: 1}, 600: {items: 1}, 1000: {items: 1}}
        });
    }
    if ($('.featured-carousel').length > 0) {
        $('.featured-carousel').owlCarousel({
            loop: true,
            margin: 12,
            responsive: {0: {items: 1}, 600: {items: 2}, 1000: {items: 3}}
        });
    }
    if ($('.seo-featured-carousel').length > 0) {
        $('.seo-featured-carousel').owlCarousel({
            loop: true,
            margin: 30,
            responsive: {0: {items: 1}, 600: {items: 2}, 1000: {items: 4}}
        });
    }
    if ($('.blog-carousel').length > 0) {
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 26,
            responsive: {0: {items: 1}, 600: {items: 2}, 1000: {items: 3}}
        });
    }
    if ($('.project-carousel').length > 0) {
        $('.project-carousel').owlCarousel({
            loop: true,
            responsive: {0: {items: 1}, 600: {items: 1}, 1000: {items: 1}}
        });
    }
    if ($('.career-carousel').length > 0) {
        $('.career-carousel').owlCarousel({
            loop: true,
            autoPlay: true,
            responsive: {0: {items: 1}, 600: {items: 1}, 1000: {items: 1}}
        });
    }
    if ($('#blogGrid').length > 0) {
        var $grid = $('#blogGrid').imagesLoaded(function () {
            $grid.masonry({itemSelector: '.blog-grid-item',});
        });
    }
    $('.progress').on('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).off('inview');
        }
    });
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var $action = $(this).prop('action');
        var $data = $(this).serialize();
        var $this = $(this);
        $this.prevAll('.alert').remove();
        $.post($action, $data, function (data) {
            if (data.response === 'error') {
                $this.before('<div class="alert danger-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="fa fa-times-circle"></i> ' + data.message + '</div>');
            }
            if (data.response === 'success') {
                $this.before('<div class="alert success-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><i class="fa fa-thumbs-o-up"></i> ' + data.message + '</div>');
                $this.find('input, textarea').val('');
            }
        }, "json");
    });
    if ($('.parallax-bg').length > 0) {
        $('.parallax-bg').imagesLoaded(function () {
            $(window).stellar({
                horizontalScrolling: false,
                verticalOffset: 0,
                horizontalOffset: 0,
                responsive: true,
                hideDistantElements: true
            });
        });
    }
    $(window).on('load', function () {
        $('.portfolio-container').each(function (i, e) {
            var ttGrid = $(this).find('.portfolio');
            var self = this;
            ttGrid.shuffle({itemSelector: '.portfolio-item'});
            $(this).find('.portfolio-filter li').on('click', function (e) {
                e.preventDefault();
                $(self).find('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                var ttGroupName = $(this).attr('data-group');
                ttGrid.shuffle('shuffle', ttGroupName);
            });
        });
    });
    $(window).on('load', function () {
        if ($('.portfolio-slider').length > 0) {
            $('.portfolio-wrapper').each(function (i, e) {
                var ttPortfolio = $(this).find('.portfolio-slider');
                var ttDirection = ttPortfolio.attr('data-direction');
                ttPortfolio.flexslider({
                    animation: "slide",
                    direction: ttDirection,
                    slideshowSpeed: 3000,
                    start: function () {
                        imagesLoaded($(".portfolio"), function () {
                            setTimeout(function () {
                                $('.portfolio-filter li:eq(0)').trigger("click");
                            }, 500);
                        });
                    }
                });
            });
        }
    });
    $('.portfolio-slider').each(function () {
        var _items = $(this).find("li > a");
        var items = [];
        for (var i = 0; i < _items.length; i++) {
            items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
        }
        $(this).parent().find(".action-btn").magnificPopup({
            items: items,
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {enabled: true}
        });
    });

    // Mouad's code
    $(document).ready(function () {
        $('.datepicker').datepicker();
        $('.select2').select2();
        $('.select2-tags').select2({tags: true});

        // Fixing when focusing datepicker using tab the modal doesn't trigger.
        $(document).on("focus", ".datepicker", function () {
            $(this).trigger("click");
        });

        // Adding active class to the select2 associated label to move upward.
        $(document).on("focus", ".select2-search__field", function () {
            $("label.select2-tags-label").addClass("active");
        });

        // Removing the class active onBlur when no tags are added to return the label to it's initial place.
        $(document).on("blur", ".select2-search__field", function () {
            if ($(".select2-selection__choice").length === 0)
                $("label.select2-tags-label").removeClass("active");
        });

        // Adding active class to the select2 associated label to move upward in update page.
        if ($(".select2-selection__choice").length > 0)
            $("label.select2-tags-label").addClass("active");

    });
});