$(function() {
  // TOPの色変更
  var items = [".content0", ".box0", ".box1"];
  var cls = [
    ["content0Color0", "content0Color1", "content0Color2", "content0Color3", "content0Color4"],
    ["box0Color0", "box0Color1", "box0Color2", "box0Color3", "box0Color4"],
    ["box1Color0", "box1Color1", "box1Color2", "box1Color3", "box1Color4"]
  ]
  var i = 0;
  $("#changeColor").click(function(){
    if ($(items[0]).hasClass(cls[0][cls[0].length - 1])){
      for (var j = 0; j < items.length; j++) {
        $(items[j]).removeClass(cls[j][i]);
        $(items[j]).addClass(cls[j][0]);
      }
      i = 0;
    } else {
      for (var j = 0; j < items.length; j++) {
        $(items[j]).removeClass(cls[j][i]);
        $(items[j]).addClass(cls[j][i + 1]);
      }
      i++;
    }
  });
});