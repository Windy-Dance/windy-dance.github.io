// 可爱毛玻璃蒙版加载动画喵~
(function(){
  // 创建蒙版元素喵
  var mask = document.createElement('div');
  mask.className = 'blur-mask-meow';
  mask.innerHTML = '<div class="meow-text">喵呜~ 页面正在加载喵！</div>';
  document.body.appendChild(mask);

  // 显示蒙版喵
  function showMask() {
    mask.classList.add('show');
  }
  // 隐藏蒙版喵
  function hideMask() {
    mask.classList.remove('show');
  }

  // Fluid 主题 PJAX 兼容喵~
  if (window.Fluid && window.Fluid.ctx && window.Fluid.ctx.pjax) {
    document.addEventListener('pjax:send', showMask);
    document.addEventListener('pjax:complete', function(){
      setTimeout(hideMask, 400); // 延迟消失更柔和喵
    });
  } else {
    // 普通页面跳转喵~
    var links = document.querySelectorAll('a[href]');
    links.forEach(function(link){
      link.addEventListener('click', function(e){
        // 只处理同域链接喵
        var url = link.getAttribute('href');
        if (url && url[0] !== '#' && !url.startsWith('javascript')) {
          showMask();
        }
      });
    });
    window.addEventListener('DOMContentLoaded', function(){
      setTimeout(hideMask, 400);
    });
  }

  // 初始隐藏喵
  hideMask();
})();
