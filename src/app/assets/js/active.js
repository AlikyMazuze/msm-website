document.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
    var window = window || {};
    var document = document || {};
  
    var preloader = document.getElementById('preloader');
  
    // Preloader Active Code
    window.addEventListener('load', function () {
      preloader.style.transition = 'opacity 0.5s';
      preloader.style.opacity = '0';
      setTimeout(function () {
        preloader.remove();
      }, 500);
    });
  
    var listCollection = document.querySelectorAll(".questions-area > ul > li");
    var firstItem = listCollection[0];
    firstItem.classList.add("question-show");
  
    function switchQuestion() {
      var activeItem = document.querySelector(".question-show");
      activeItem.classList.remove("question-show");
      var nextItem = activeItem.closest('li').nextElementSibling;
      if (!nextItem) {
        nextItem = firstItem;
      }
      nextItem.classList.add("question-show");
    }
  
    setInterval(switchQuestion, 5000);
  
    var resizeTO;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTO);
      resizeTO = setTimeout(function () {
        var fullHeightElements = document.querySelectorAll('.full_height');
        var windowHeight = window.innerHeight;
        for (var i = 0; i < fullHeightElements.length; i++) {
          fullHeightElements[i].style.height = windowHeight + 'px';
        }
      }, 300);
    });
  
    // Welcome Carousel Active Code
    var welcomeSlider = document.getElementById('welcomeSlider');
    if (welcomeSlider) {
      var carousel = new bootstrap.Carousel(welcomeSlider, {
        pause: false,
        interval: 4000
      });
    }
  
    // Tooltip Active Code
    var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltips.forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip);
    });
  
    // Nicescroll Active Code
    var nicescrollElements = document.querySelectorAll("body, .gallery_area");
    nicescrollElements.forEach(function (element) {
      new SimpleBar(element, {
        scrollbarMinSize: 40,
        scrollbarMaxSize: 100,
        classNames: {
          scrollbar: 'nice-scrollbar',
          content: 'nice-content',
          track: 'nice-track'
        }
      });
    });
  
    // Instagram Feeds Slider
    var instagramFeedsArea = document.querySelector('.instagram-feeds-area');
    if (instagramFeedsArea) {
      new Siema({
        selector: instagramFeedsArea,
        duration: 1000,
        loop: true,
        perPage: {
          0: 3,
          768: 4,
          992: 5,
          1280: 7
        },
        autoplay: true,
        interval: 5000,
        easing: 'ease-out'
      });
    }
  
    // Search Btn Active Code
    var searchBtn = document.getElementById('searchbtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        document.body.classList.toggle('search-form-on');
      });
    }
  
    // Video Active Code
    var videoBtns = document.querySelectorAll('.videobtn');
    videoBtns.forEach(function (videoBtn) {
      videoBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var videoSrc = videoBtn.getAttribute('href');
        var videoPopup = new bootstrap.Modal(videoSrc, {
          backdrop: false
        });
        videoPopup.show();
      });
    });
  
    // Gallery Menu Style Active Code
    var portfolioMenuButtons = document.querySelectorAll('.portfolio-menu button.btn');
    portfolioMenuButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        portfolioMenuButtons.forEach(function (btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');
      });
    });
  
    // Progress Bar Active Code
    var progressBarOptions = {
      tooltip: true,
      duration: 1000,
      barColor: '#1d1d1d',
      animateOnResize: true
    };
    var bar1 = new ProgressBar.Line('#bar1', progressBarOptions);
    var bar2 = new ProgressBar.Line('#bar2', progressBarOptions);
    var bar3 = new ProgressBar.Line('#bar3', progressBarOptions);
    var bar4 = new ProgressBar.Line('#bar4', progressBarOptions);
  
    // CounterUp Active Code
    var counters = document.querySelectorAll('.counter');
    counters.forEach(function (counter) {
      var endValue = parseInt(counter.textContent, 10);
      var options = {
        duration: 2000,
        endVal: endValue
      };
      var countUp = new CountUp(counter, endValue, options);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  
    // ScrollUp Active Code
    if (document.querySelector('.scrollup')) {
      window.addEventListener('scroll', function () {
        var scrollDistance = window.scrollY;
        if (scrollDistance > 500) {
          document.querySelector('.scrollup').style.opacity = '1';
        } else {
          document.querySelector('.scrollup').style.opacity = '0';
        }
      });
    }
  
    // PreventDefault a Click
    var preventDefaultLinks = document.querySelectorAll("a[href='#']");
    preventDefaultLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
      });
    });
  
    // wow Active Code
    if (window.innerWidth > 767) {
      new WOW().init();
    }
  });
  