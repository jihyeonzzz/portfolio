$(document).ready(function(){


    // $('.h_main .visual .v_bg').delay(1500).fadeOut();
    // $('.v_img').stop().animate({'bottom':'0px','opacity':'.8'},2000,'easeOutQuart');
    $('.h_main .t_bg').animate({'width':'800px'},2500,'easeOutQuart');

    $(window).scroll(function(){

      let spos = $(this).scrollTop();
      console.log(spos);


      if(spos>=980){
        $('.introduce').animate({'opacity':'1','right':'50px'},900,'easeOutQuart');
        $('.introduce .skill').delay(200).animate({'opacity':'1','right':'50px'},900,'easeOutQuart');
        $('.html').delay(300).animate({'width':'85%'},900,'easeOutQuart');
        $('.css').delay(400).animate({'width':'75%'},900,'easeOutQuart');
        $('.java').delay(500).animate({'width':'65%'},900,'easeOutQuart');
        $('.photo').delay(600).animate({'width':'90%'},900,'easeOutQuart');
        $('.illust').delay(700).animate({'width':'90%'},900,'easeOutQuart');
      }

      if(spos>=1825){
        $('.p01 .bg').animate({'left':'0px','opacity':'1'},900,'easeOutQuart');
        $('.p01 .p_img').animate({'left':'260px','opacity':'1'},900,'easeOutQuart');
      }
      if(spos>=2553){
        $('.p02 .bg').animate({'right':'0px','opacity':'1'},900,'easeOutQuart');
        $('.p02 .p_img').animate({'right':'250px','opacity':'1'},900,'easeOutQuart');
      }

      if(spos>=940){
        $('.gnb').slideDown();
      }else{
        $('.gnb').slideUp();
      }
    });

    $('.gnb li').click(function(){
      let i = $(this).index();
      console.log(i);

      $('html, body').animate({scrollTop:$('main section').eq(i).offset().top},300);

      return false
    });

});


// top btn
const topBtnEl = document.querySelector('#top_btn');
const logoEl = document.querySelector('#logo');

topBtnEl.addEventListener('click', function(){
  // alert('eiownviowne');
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo: 0 //스크롤 꼭때기 0까지 올라간다.
  });
});

logoEl.addEventListener('click', function(){
  // alert('eiownviowne');
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo: 0 //스크롤 꼭때기 0까지 올라간다.
  });
});

window.addEventListener('scroll', function(){
    // console.log(window.scrollY); //스크롤값 확인하기
    if(700<this.window.scrollY){
      gsap.to(topBtnEl, 0.3,{opacity:1});
    }else{
      gsap.to(topBtnEl, 0.3,{opacity:0});
    }
});