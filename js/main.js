


jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
      $('#logo img').css({'width' : '20%' });
    //  $('#nav-menu-container').css({'padding' : '25px 0'});
    } else {
      $('#logo img').css({'width' : '80%' });
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }Previous

        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code
  $('.carousel-control-prev').click(function(){
    $("#carouselExampleIndicators").carousel("prev");

  });

  $('.carousel-control-next').click(function(){
    $("#carouselExampleIndicators").carousel("next");

  });



});



function displayText(t){
  t.querySelector('.product').style.visibility = "visible";
}
function removeText(t){
  t.querySelector('.product').style.visibility = "hidden";

}

function changePics(obj){
  document.getElementById('nameOfProduct').innerHTML = obj.querySelector('.product').innerHTML;
  document.getElementById('pic1').src = "img/" + obj.id + "1.jpg"
  document.getElementById('pic2').src = "img/" + obj.id + "2.jpg"
  document.getElementById('pic3').src = "img/" + obj.id + "3.jpg"
  document.getElementById('pic4').src = "img/" + obj.id + "4.jpg"
  switch (obj.id){
    case "sweet":
      document.getElementById('productDesc').innerHTML = " Combined with soy and garlic flavor, these Microwavable Sweet Chilli Barebque wings are packed with tremendous flavor that has been perfected. These wings can be easily prepared for a meal or snack by just popping them in a microwave!";
      break;
    case "honey":
      document.getElementById('productDesc').innerHTML = " Combined with soy and garlic, these Barbeque wings are fused with island Guam flavor called Finna'denne' and the American classic flavor Honey that create a unique flavor that is guranteed to satisfy anyone's tast buds! Guranteed to satisfy your hunger and taste buds.";
      break;
    case "rice":
      document.getElementById('productDesc').innerHTML = "Para Hita Red Rice brings you closer to a Guam food experience. This well-crafted product goes well with Para Hita's microwaved BBQ wings!";
      break;
    case "yam":
      document.getElementById('productDesc').innerHTML = " These Cinammon sugared Sweet Potato Doughnuts are made to be light, fluffy, most-air pillows that will be a pleasant experience to try. ";
      break;

  }
}


function goMail(formElement){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sendmessage").innerHTML = xhr.responseText;
    }
  };
  xhr.open(formElement.method, formElement.action, true);
  xhr.send(new FormData (formElement));
  return false;
}
