var utero;
(function($) {
  "use strict";
  utero = (function() {
    return {
      init: function() {
        // Header
        this.popupSearch();
        this.sidebarContact();
        this.fixedHeader();
        this.mobileMenu();
        this.sidebarMenu();
        this.canvasCart();

        // Home default
        this.homeDefaultSlider();
        this.homeDefaultProducts();
        this.homeDefaultFeatures();
        this.homeDefaultPosts();

        // Home modern
        this.homeModernSlider();
        this.homeModernFeatures();
        this.homeModernCategories();

        // Home full width
        this.homeFullWidthFilter();

        // Home collections
        this.homeCollectionsPosts();

        // Home popular
        this.homePopularProducts();

        // Home classic
        this.homeClassicPosts();

        // Home minimal
        this.homeMinimalTestimonials();

        // Home video background
        this.homeVideoBackgroundProducts();

        // Product
        this.productImages();
        this.productStickyAddToCart();

        // Account login
        this.accountLogin();

        // Blog
        this.blogFeaturedArticles();
        this.blogLatestArticles();

        // Quickview
        this.quickViewImages();

        // Utilities
        this.video();
        this.accordion();
        this.tabs();
        this.quantity();
        this.countDown();
      },

      // Header
      popupSearch: function() {
        $(".js-open-popup-search").on("click", function() {
          $(".js-search-popup").addClass("active");
          return false;
        });
        $(".js-close-search-popup").on("click", function() {
          $(".js-search-popup").removeClass("active");
          return false;
        });
      },

      sidebarContact: function() {
        $(".js-open-sidebar-contact").click(function () {
          $(".js-sidebar-contact").addClass("active");
          return false;
        });
        $(".js-close-sidebar-contact").click(function () {
          $(".js-sidebar-contact").removeClass("active");
          return false;
        });
      },

      fixedHeader: function() {
        if(!$(".js-header").hasClass("stop-hover")) {
          $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 50) {
              $(".js-header").addClass("fixed");
            } else {
              $(".js-header").removeClass("fixed");
            }
          });
        }
        $(".js-fixed-header").css("height", $(".js-header").outerHeight());
      },

      mobileMenu: function() {
        $('.js-mobile-menu-carousel').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          arrows: false
        });
        $(".js-mobile-menu-item").click(function () {
          var index = $(this).attr("data-index");
          if($(".js-second-step-mobile-menu-item[data-index='" + index + "']").length > 0) {
            $(".js-second-step-mobile-menu-item").removeClass("active");
            $(".js-second-step-mobile-menu-item[data-index='" + index + "']").addClass("active");
            $(".js-mobile-menu-carousel").slick('slickGoTo', 1);
            return false;
          }
        });
        $(".js-go-to-previous-mobile-menu").click(function () {
          $(".js-mobile-menu-carousel").slick('slickGoTo', 0);
          return false;
        });
        $(".js-open-mobile-menu").click(function () {
          $(".mobile-menu").toggleClass("active");
          $(this).toggleClass("active");
          $(".js-header").toggleClass("with-mobile-menu");
          if($(".mobile-menu").hasClass("active")) {
            $("body").css("overflow", "hidden");
          } else {
            $("body").css("overflow", "visible");
          }
          return false;
        });
      },

      sidebarMenu: function() {
        $(".js-open-sidebar-menu").on("click", function() {
          $(".js-sidebar-menu").addClass("active");
          return false;
        });
        $(".js-close-sidebar-menu").on("click", function() {
          $(".js-sidebar-menu").removeClass("active");
          return false;
        });
      },

      canvasCart: function() {
        $(".js-open-canvas-cart").on("click", function() {
          $(".js-canvas-cart").addClass("active");
          $("body").css("overflow", "hidden");
          return false;
        });
        $(".js-close-canvas-cart").on("click", function() {
          $(".js-canvas-cart").removeClass("active");
          $("body").css("overflow", "visible");
          return false;
        });
      },

      // Home default
      homeDefaultSlider: function() {
        $('.js-home-default-slider').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          fade: true,
          arrows: false
        });
        setTimeout(function () {
          $('.js-slider-item-content').addClass("active");
        }, 100);
      },

      homeDefaultProducts: function() {
        $('.js-home-products-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
        $('.js-home-products-2-carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
        $('.js-home-products-5-carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            }
          ]
        });
      },

      homeDefaultFeatures: function() {
        $('.js-home-features-carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      homeDefaultPosts: function() {
        $('.js-home-blog-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Home modern
      homeModernSlider: function() {
        $('.js-home-modern-slider').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          fade: true,
          arrows: true
        });
        setTimeout(function () {
          $('.js-slider-item-content').addClass("active");
        }, 100);
      },

      homeModernFeatures: function() {
        $('.js-home-modern-features-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      homeModernCategories: function() {
        $('.js-home-modern-categories-carousel').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Home full width filter
      homeFullWidthFilter: function() {
        $(".js-open-collection-filter").on("click", function(){
          $(this).toggleClass('active');
          $(".js-top-filter").slideToggle('');
        });
        $(".js-open-mobile-filter, .js-close-filter").on("click", function(){
          $(".js-open-mobile-filter, .js-close-filter").toggleClass('active');
          $(".js-top-filter").toggleClass('active');
          $("body").toggleClass("overflow-hidden");
          return false;
        });
        if ($(".js-price-slider").length) {
          $(".js-price-slider").slider({
            range: true,
            min: 100,
            max: 3000,
            values: [ 100, 1500 ],
            slide: function( event, ui ) {
              $(".js-price-slider-value").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
          });
          if($(".js-price-slider-value").length) {
            $(".js-price-slider-value").val("$" + $(".js-price-slider").slider("values", 0) + " - $" + $(".js-price-slider").slider("values", 1));
          };
        };
      },

      // Home collections
      homeCollectionsPosts: function() {
        $('.js-home-collections-blog-carousel').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Home popular
      homePopularProducts: function() {
        $('.js-home-products-3-carousel').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          nav: true,
          infinite: false,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1798,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Home classic
      homeClassicPosts: function() {
        $('.js-home-blog-2-carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Home minimal
      homeMinimalTestimonials: function() {
        $('.js-home-testimonials-carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nav: false,
          infinite: false,
          adaptiveHeight: true
        });
        $(".js-testimonial-logo a").click(function () {
          var index = parseInt($(this).closest(".js-testimonial-logo").attr("data-id")) - 1;
          $('.js-home-testimonials-carousel').slick('slickGoTo', index);
          $(".js-testimonial-logo").removeClass("active");
          $(".js-testimonial-logo").eq(index).addClass("active");
          return false;
        });
        $('.js-home-testimonials-carousel').on('swipe', function(event, slick, direction){
          $(".js-testimonial-logo").removeClass("active");
          $(".js-testimonial-logo").eq(slick.currentSlide).addClass("active");
        });
      },

      // Home Video Background
      homeVideoBackgroundProducts: function() {
        $('.js-home-products-4-carousel').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Product
      productImages: function() {
        if($(".js-product-layout-1").length > 0) {
          $(".js-product-thumbnails-carousel").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            focusOnSelect: true,
            vertical: true,
          });
          $(".js-product-thumbnails-carousel a").click(function (e) {
            var index = $(this).attr("data-index");
            $('body, html').animate({ scrollTop: $(".js-product-image[data-index='" + index + "']").offset().top - 120, }, 300);
            e.preventDefault();
          });
        } else {
          $(".js-product-images-carousel").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: false,
            infinite: false,
            asNavFor: ".js-product-thumbnails-carousel",
          });
          if($(".js-product-thumbnails-carousel").hasClass("horizontal")) {
            $(".js-product-thumbnails-carousel").slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              asNavFor: ".js-product-images-carousel",
              dots: false,
              arrows: true,
              focusOnSelect: true,
              infinite: false,
              responsive: [
                {
                  breakpoint: 1499,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 1198,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 4
                  }
                }
              ]
            });
          } else {
            $(".js-product-thumbnails-carousel").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              asNavFor: ".js-product-images-carousel",
              dots: false,
              arrows: true,
              focusOnSelect: true,
              vertical: true,
            });
          }
          $(".js-product-thumbnails-carousel a").click(function (e) {
            e.preventDefault();
          });
        }
        if($(window).outerWidth() < 992) {
          $(".js-product-mobile-gallery").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: false,
            infinite: false,
          });
        }
        $(".js-popup-gallery a").jqPhotoSwipe({
          forceSingleGallery: true
        });
      },

      productStickyAddToCart: function() {
        if($(".js-product-action").length > 0) {
          $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > $(".js-product-action").offset().top + $(".js-product-action").outerHeight()) { 
              $(".js-sticky-add-to-cart").addClass("active");
            } else {
              $(".js-sticky-add-to-cart").removeClass("active");
            }
          });
        }
      },

      // Account
      accountLogin: function() {
        $(".js-login-forgot-password").on("click", function() {
          $(".js-login-in").removeClass("active");
          $(".js-forgot-password").addClass("active");
          return false;
        });
        $(".js-login-back").on("click", function() {
          $(".js-login-in").addClass("active");
          $(".js-forgot-password").removeClass("active");
          return false;
        });
      },

      // Blog
      blogFeaturedArticles: function() {
        $(".js-featured-articles").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          fade: false,
          infinite: false,
        });
        $('.js-full-width-featured-articles').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      blogLatestArticles: function() {
        $('.js-latest-articles-carousel').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
        $('.js-latest-articles-2-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1499,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      },

      // Quickview
      quickViewImages: function() {
        $(".js-quickview-images-carousel").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          fade: false,
          infinite: false,
        });
      },

      // Utilities
      video: function() {
        if($('.js-video').length > 0) {
          $(".js-video").each(function () {
            this.controls = false;
            $(this).get(0).play();
          });
        }
      },

      accordion: function() {
        $(".js-accordion-title").on("click", function() {
          $(this).parent().parent().find(".js-accordion").removeClass("current");
          $(this).parent().toggleClass("active").addClass("current");
          $(this).parent().find(".js-accordion-content").slideToggle(500);
        });
        $(".js-accordion.active").each(function () {
          $(this).find(".js-accordion-content").slideToggle(500);
        });
      },

      tabs: function() {
        $(".js-open-tab").on("click", function() {
          var id = $(this).attr("data-id");
          $(".js-tab[data-id='" + id + "']").addClass("active");
          return false;
        });
        $(".js-close-tab").on("click", function() {
          $(".js-tab").removeClass("active");
          return false;
        });
        $(".js-tab-link").on("click", function() {
          $(this).parent().parent().find(".js-tab-link").removeClass("active");
          $(this).addClass("active");
          $(this).parent().parent().parent().find(".js-tab-content").removeClass("tab-content__active").removeClass("tab-content__show");
          var that = $(this).parent().parent().parent().find(".js-tab-content[data-id='" + $(this).attr("data-id") + "']");
          $(that).addClass("tab-content__active");
          setTimeout(function () {
            $(that).addClass("tab-content__show");
          }, 100);
          return false;
        });
      },

      quantity: function() {
        $(".js-quantity-down").on("click", function() {
          var q_val_up = parseInt($(this).parent().find(".js-quantity-field").val());
          if(isNaN(q_val_up)) {
            q_val_up = 0;
          }
          if(q_val_up > 0) {
            $(this).parent().find(".js-quantity-field").val(q_val_up-1).keyup();
          } 
          return false; 
        });
        $(".js-quantity-up").on("click", function() {
          var q_val_up = parseInt($(this).parent().find(".js-quantity-field").val());
          if(isNaN(q_val_up)) {
            q_val_up = 0;
          }
          $(this).parent().find(".js-quantity-field").val(q_val_up+1).keyup(); 
          return false; 
        });
      },

      countDown: function() {
        $(".js-countdown").each(function () {
          var that = $(this);
          setInterval(function () {
            var currentDate = new Date().getTime();
            var deadlineDate = new Date($(that).attr("data-deadline-date")).getTime();
            var distance = deadlineDate - currentDate;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $(that).find(".js-countdown-days").html(days);
            $(that).find(".js-countdown-hours").html(hours);
            $(that).find(".js-countdown-minutes").html(minutes);
            $(that).find(".js-countdown-seconds").html(seconds);
          }, 1000);
        });
      }
    }
  })();
})(jQuery);

$(document).ready(function() {
  utero.init();
});