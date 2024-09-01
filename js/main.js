$(document).ready(function() {
  // Footer year
  var date = new Date();
  var currentYear = date.getFullYear();

  var footerText = $('.footer-text');
  footerText.append(currentYear);

  // scroll to top on reload
  $(this).scrollTop(0);
  // Preload animation
  setTimeout(function() {
    $('#loader .loader-container').fadeOut(1000);
    $('#loader').fadeOut(1500);
  }, 1500);
  // scrolls to skills section
  $(".nav-skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1500);

    // Hide Nav menus when a menu is clicked
    $('#nav-narrow').css('right','-3599px');
    $('#nav-icon').animate({opacity : '.4'},300);

    setTimeout(function() {
        if ($('#nav-icon i').html() == 'menu') {
          $('#nav-icon i').html('close');
        } else {
          $('#nav-icon i').html('menu');
          $('#nav-icon i').css({color:"black"});
        }
    }, 300);
  });
  // scroll to contact
  $(".nav-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#get-in-touch").offset().top
    }, 1500);
    // Hide Nav menus when a menu is clicked
    $('#nav-narrow').css('right','-3599px');
    $('#nav-icon').animate({opacity : '.4'},300);

    setTimeout(function() {
      if ($('#nav-icon i').html() == 'menu') {
        $('#nav-icon i').html('close');
      } else {
        $('#nav-icon i').html('menu');
        $('#nav-icon i').css({color:"black"});
      }
    }, 300);
  });
  // scroll to portfolio
  $(".nav-portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1500);
    // Hide Nav menus when a menu is clicked
    $('#nav-narrow').css('right','-3599px');
    $('#nav-icon').animate({opacity : '.4'},300);

    setTimeout(function() {
      if ($('#nav-icon i').html() == 'menu') {
        $('#nav-icon i').html('close');
      } else {
        $('#nav-icon i').html('menu');
        $('#nav-icon i').css({color:"black"});
      }
    }, 300);
  });
  // Navigation icon collapsible button
  $("#nav-icon").click(function() {
      // Show/Hide navigation menus
      if ($('#nav-narrow').css('right') == '-3599px') {
        $('#nav-narrow').css('right','0px');
        $(this).animate({opacity : '1'},300);
      } else {
        $('#nav-narrow').css('right','-3599px');
        $(this).animate({opacity : '.4'},300);
      }
      // UI Edit: Nav button icon change from 'bars' to 'remove'
      if ($('#nav-icon i').html() == 'menu') {
        setTimeout(function() {
          $('#nav-icon i').html('close');
          $('#nav-icon i').css({color:"white"});
        }, 300);
      } else {
        setTimeout(function() {
          $('#nav-icon i').html('menu');
          $('#nav-icon i').css({color:"black"});
        }, 300);
      }
  });
});
