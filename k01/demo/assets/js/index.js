$(window).on("load", function() {
  // スライド
  var speed = 3000; // フェードイン・フェードアウトの処理時間（1000で1秒）
  var times = 5000; // 画像切り替えの間隔（1000で1秒）
  var className = '.container-right';
  var bgArray = [
    "assets/img/main_slide_1.jpg",
    "assets/img/main_slide_2.jpg",
    "assets/img/main_slide_3.jpg"
  ];
  $.each(bgArray.reverse(), function(i, value) {
    $(className).prepend('<div class="slides" style="background-image:url(' + value + ');"></div>');
  });
  var bgNo = 1;
  var bgLength = bgArray.length;
  setInterval(function(){
    $(className + ' .slides:nth-child(' + bgNo + ')').fadeOut(speed/3);
    $(className + ' .slides:nth-child(' + ( bgNo === bgLength ? 1 : bgNo + 1) + ')').fadeIn(speed/3);
    if ( bgNo >= bgLength ) {
      bgNo = 1;
    } else {
      bgNo += 1;
    }
  }, times);

  // スクロール時アクション
　$(window).scroll(function (){
    $('.yajirushi').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('scroll_view');
        }
    });
    $('.sm_yajirushi').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('scroll_view');
        }
    });
　});
});
