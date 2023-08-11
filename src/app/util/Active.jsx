"use client"
import React, { useEffect } from 'react';
import bootstrap from 'bootstrap';
import SimpleBar from 'simplebar-react';
import Siema from 'siema';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
import ProgressBar from 'progressbar.js';
import CountUp from 'countup';
import WOW from 'wow.js';

const Active = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');

    // Preloader Active Code
    window.addEventListener('load', function () {
      preloader.style.transition = 'opacity 0.5s';
      preloader.style.opacity = '0';
      setTimeout(function () {
        preloader.remove();
      }, 500);
    });

    const listCollection = document.querySelectorAll(".questions-area > ul > li");
    const firstItem = listCollection[0];
    firstItem.classList.add("question-show");

    function switchQuestion() {
      const activeItem = document.querySelector(".question-show");
      activeItem.classList.remove("question-show");
      const nextItem = activeItem.closest('li').nextElementSibling;
      if (!nextItem) {
        nextItem = firstItem;
      }
      nextItem.classList.add("question-show");
    }

    setInterval(switchQuestion, 5000);

    let resizeTO;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTO);
      resizeTO = setTimeout(function () {
        const fullHeightElements = document.querySelectorAll('.full_height');
        const windowHeight = window.innerHeight;
        fullHeightElements.forEach(element => {
          element.style.height = windowHeight + 'px';
        });
      }, 300);
    });

    // Welcome Carousel Active Code
    const welcomeSlider = document.getElementById('welcomeSlider');
    if (welcomeSlider) {
      const carousel = new bootstrap.Carousel(welcomeSlider, {
        pause: false,
        interval: 4000
      });
    }

    // ... (Continue adding the rest of the code)

  }, []);

  return (
    <div>
      {/* Your other content */}
    </div>
  );
};

export default Active;
