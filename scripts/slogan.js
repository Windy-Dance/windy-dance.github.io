document.addEventListener('DOMContentLoaded', function () {
  // 主页副标题元素选择器，Fluid 主题一般为 .banner .subtitle 或 .slogan
  var sloganEl = document.querySelector('.banner .subtitle, .banner .slogan');
  if (!sloganEl) return;
  var slogans = [
    "我抛弃了所有的忧伤和疑虑, 去追寻那无家的潮水. 因为那永恒的异乡人在呼唤我, 她正沿着这条路走来.",
    "我希望自己像一块被晒暖的石头，什么也不证明.",
    "最是人间留不住, 朱颜辞镜花辞树."
  ];
  var random = slogans[Math.floor(Math.random() * slogans.length)];
  sloganEl.text = random;
});