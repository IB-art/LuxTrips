$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  

  $('.form-input').on('click', function (e) {
    e.preventDefault();
  
    
    $('.form-input').removeClass('form-input--active');
    $(this).addClass('form-input--active');
    
  });

  
  
  // var mixer = mixitup('.products__inner-box');
  var mixer = mixitup('.info-slider');

  $('.prod-btn').on('click', function (e) {
    e.preventDefault();

    $('.prod-btn').removeClass('prod-btn--active');
    $(this).addClass('prod-btn--active');

  });





  $('.info-slider').slick({
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/products-icons/arrow.png" alt=""></img>',
    infinite: false,
    speed: 300,
    slidesToShow: 3.4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1361,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
  $('.reviews-slider').slick({
    prevArrow: '<img class="reviews-arrows__left" src="" alt=""></img>',
    nextArrow: '<button class="reviews-right"><img class="reviews-arrows__right" src="images/products-icons/arrow.png" alt=""></img></button>',  
    slidesToShow: 1.94,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 541,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  


});

