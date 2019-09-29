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
  $.scrollify(option);
  // TOPの色変更
  var idsA = [".content0", ".box0", ".box1"];
  var idsB = ["content0Color0", "box0Color0", "box1Color0", "content0Color1", "box0Color1", "box1Color1", "content0Color2", "box0Color2", "box1Color2", "content0Color3", "box0Color3", "box1Color3"];
  $("#changeColor").click(function(){
    if($(idsA[0]).hasClass(idsB[0])){
      $(idsA[0]).removeClass(idsB[0]);
      $(idsA[1]).removeClass(idsB[1]);
      $(idsA[2]).removeClass(idsB[2]);
      $(idsA[0]).addClass(idsB[3]);
      $(idsA[1]).addClass(idsB[4]);
      $(idsA[2]).addClass(idsB[5]);
    } else if ($(idsA[0]).hasClass(idsB[3])){
      $(idsA[0]).removeClass(idsB[3]);
      $(idsA[1]).removeClass(idsB[4]);
      $(idsA[2]).removeClass(idsB[5]);
      $(idsA[0]).addClass(idsB[6]);
      $(idsA[1]).addClass(idsB[7]);
      $(idsA[2]).addClass(idsB[8]);
    } else if($(idsA[0]).hasClass(idsB[6])){
      $(idsA[0]).removeClass(idsB[6]);
      $(idsA[1]).removeClass(idsB[7]);
      $(idsA[2]).removeClass(idsB[8]);
      $(idsA[0]).addClass(idsB[9]);
      $(idsA[1]).addClass(idsB[10]);
      $(idsA[2]).addClass(idsB[11]);
    } else if($(idsA[0]).hasClass(idsB[9])){
      $(idsA[0]).removeClass(idsB[9]);
      $(idsA[1]).removeClass(idsB[10]);
      $(idsA[2]).removeClass(idsB[11]);
      $(idsA[0]).addClass(idsB[0]);
      $(idsA[1]).addClass(idsB[1]);
      $(idsA[2]).addClass(idsB[2]);
    } else {
      $(idsA[0]).addClass(idsB[0]);
      $(idsA[1]).addClass(idsB[1]);
      $(idsA[2]).addClass(idsB[2]);
    }
  });
});