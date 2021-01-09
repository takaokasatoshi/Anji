"use strict";

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });
}

window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};

const targetElement = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.6;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});

$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      150
    );
    return false;
  });
});

 $(function () {
  $(".section5-imgs").vegas({
    slides: [
      // { src: "img/bar.jpg" },
      { src: "img/DSC_0971.JPG" },
      { src: "img/hand.JPG" },
      { src: "img/DSC_1085.JPG" },
      { src: "img/DSC_0596.jpg" },
      { src: "img/DSC_0060.jpg" },
    ],
    overlay: "./js/overlays/03.png",
    timer: false,
    loop: true,
    delay: 3000,
    
    transition: "fade2",

    //ここでオプション設定
  });
});
 $(function () {
  $(".bigbox").vegas({
    slides: [
      { src: "img/chinami.jpg" },
      { src: "img/bar.jpg" },
      { src: "img/xmas.jpg" },
      { src: "img/art.JPG" },
      { src: "img/staff-last.jpg" },
      { src: "img/DSC_0060.jpg" },
      { src: "img/outdoor.jpg" },
      { src: "img/ike-chinami.jpg" },
    ],

    timer: false,
    loop: true,
    delay: 3000,
    
    transition: "fade2",

    //ここでオプション設定
  });
});


  
 
    $(function () {
  $(".bigbox2").vegas({
    slides: [
      { src: "img/maki.jpg" },
      { src: "img/nari.jpg" },
      { src: "img/abareru.jpg" },
      { src: "img/staff3.jpg" },
      { src: "img/kida2.jpg" },
      { src: "img/kida.jpg" },
      { src: "img/kida3.jpg" },
      { src: "img/aba2.jpg" },
      { src: "img/smile2.jpg" },
      { src: "img/shino.jpg" },
      
      
    ],

    timer: false,
    loop: true,
    delay: 3500,
    
    transition: 'fade',

    //ここでオプション設定
  });
});
 $(function () {
  $(".bigbox3").vegas({
    slides: [
      { src: "img/xmas2.jpg" },
      { src: "img/douage.jpg" },
      { src: "img/human2.jpg" },
      { src: "img/ike-last.jpg" },
      
     
      
    ],

    timer: false,
    loop: true,
    delay: 3000,
    
    transition: 'fade',

    //ここでオプション設定
  });
});
 $(function () {
  $(".bigbox5").vegas({
    slides: [
      { src: "img/doress.jpg" },
      { src: "img/ike-chinami.jpg" },
      { src: "img/tennai.jpg" },
      // { src: "img/ike-last.JPG" },
      
     
      
    ],

    timer: false,
    loop: true,
    delay: 3000,
    
    transition: 'fade',

    //ここでオプション設定
  });
});


 
