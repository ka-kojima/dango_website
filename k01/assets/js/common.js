//共通パーツ読み込み
$(function() {

　$("#header").load("parts/header.html");
　$("#footer").load("parts/footer.html");

  // グローバルメニュー
  $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      var rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }
      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
    });
    $('.menu a[href]').on('click', function(event) {
    $('.btn-gnavi').trigger('click');
  });

  // ページトップ
  var topBtn = $("#page-top-btn");
  //スルスルっとスクロールでトップへもどる
  $("#page-top-btn").on("click", function(){
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
