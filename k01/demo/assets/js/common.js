$(window).on("load", function() {
  // グローバルメニュー
  $(document).on("click", ".btn-gnavi", function(){
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
  $(document).on("click", ".menu a[href]", function(event){
      $('.btn-gnavi').trigger('click');
  });

  // ナビの範囲外のどこかをクリックしたときに発動
  $(document).on('click', "main", function () {
      if ($('#global-navi').is(':visible')) {
          // ナビが表示されていたらclose
          // 位置を移動させメニューを開いた状態にする
          var rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
          $("#global-navi").stop().animate({
              right: rightVal
          }, 200);
      } else {
          // ナビが非表示の場合は起動しない
          event.stopPropagation();
      }
  });

  // ページトップ
  //スクロールでトップへもどる
  $(document).on("click", "#page-top-btn", function(){
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
