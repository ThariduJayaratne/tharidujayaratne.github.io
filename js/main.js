var c = document.getElementById('canv');
var $ = c.getContext('2d');
document.body.clientWidth;
var wh = 128;
var w2h = wh * wh;
c.width = c.height =  wh;
var img = $.createImageData(wh, wh);
var id = img.data;
var t = 0;
var inc = 1 / wh;
var arr = [];

for(var k = 0; k < w2h; ++k)
   arr[k] = Math.random() * 1.5 - 0.2;

function draw(){
  window.requestAnimationFrame(draw);
   t += inc;
   for(var x = 1; x >= 0; x -= inc) {
      for(var y = 1; y >= 0; y -= inc) {
         var idx = (y * wh + x) * wh * 4;
         var dx = x;
         var dy = y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         var ax = oct(x, y);
         var ay = oct(x + 2, y + t / 3);
         var bx = oct(x + dist * .3 + ax / 22 + 0.7, y + ay / 5 + 2);
         var by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
         var n = oct(x + bx / 8, y + by / 3) * 0.7 + .25;
         var d = ax * by / 2;
         var e = ay * bx / 3;

         id[idx + 0] = hue(n + d / 4);
         id[idx + 1] = hue(n / 3 + e / 5 + d);
         id[idx + 2] = hue(d + e);
         id[idx + 3] = hue(2 - ease(dist) * (e + d) * 7)
      }
   }
   $.putImageData(img, 0, 0);
}
function hue($) {
   return 175 * Math.min(Math.max($, 0), 5);
}
function ease(x) {
   return (x > 0.2) ? 0 : i(1, 0, x * 6);
}
var db = document.body;
function i($, db, t) {
   t = t * t * t * (6 * t * t - 15 * t + 10);
   return $ + (db - $) * t;
}
function n(x, y) {
   var i = Math.abs(x * wh + y) % w2h;
   return arr[i];
}
function oct(x, y) {
   var o1 = p(x * 2.0, y * 2.0);
   var o2 = p(x * 3.0, y * 6.0);
   return o1 + o2 * .6;
}
function p(x, y) {
   var nx = Math.floor(x);
   var ny = Math.floor(y);
   return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny);
}
draw();
