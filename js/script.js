$(function () {
  // メニュー
  $('#menu').hover(
    function() {
      $(this).animate({'marginLeft': '300px'}, 500);
    },
    function() {
      $(this).animate({'marginLeft': '0'}, 500);
    }
  );
  // シングルページスクロール
  var option = {
    section: '.contents',
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
  };
  $(function() {
    $.scrollify(option);
  });
});