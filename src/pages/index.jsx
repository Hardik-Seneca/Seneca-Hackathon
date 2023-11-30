/* eslint-disable react/no-unescaped-entities */

import React, { useEffect } from 'react';
import $ from 'jquery';

const Home = () => {
  useEffect(() => {
    let mouseX, mouseY;
    let traX, traY;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      $(".title").css({ "background-position": `${traX}% ${traY}%` });
    };

    $(document).mousemove(handleMouseMove);


    return () => {
      // Clean up event listener when component unmounts
      $(document).off('mousemove', handleMouseMove);


      var content = 'Geek by day, smart by design, curious at heart, nerd in code, ingenious in solutions, and cunning in the pursuit of innovation - Are you that algorithmic alchemist?';

      var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

      console.log(content)

      $(ele).hide().appendTo('.subtitle').each(function (i) {
        $(this).delay(50 * i).css({
          display: 'inline',
          opacity: 0
        }).animate({
          opacity: 1
        }, 100);
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      <div class="text-container">
        <div class="title">COMING SOON</div>
        <p class="subtitle"></p>
        <p class="redirection">Check what we did <a href="https://www.senecahackathon.com/" target="_blank">
          last year
        </a></p>
      </div>
    </>
  );
};

export default Home;