document.addEventListener('DOMContentLoaded', function () {
  // 只处理页面上的图片
  var imgs = document.querySelectorAll('img');
  imgs.forEach(function (img) {
    // 跳过已处理过的图片
    if (img.parentElement && img.parentElement.classList.contains('img-blur-wrapper')) return;
    // 创建包裹容器
    var wrapper = document.createElement('div');
    wrapper.className = 'img-blur-wrapper';
    wrapper.style.width = img.width ? img.width + 'px' : img.style.width;
    wrapper.style.height = img.height ? img.height + 'px' : img.style.height;
    // 创建毛玻璃层
    var blur = document.createElement('div');
    blur.className = 'img-blur-loading';
    var loader = document.createElement('div');
    loader.className = 'loader';
    blur.appendChild(loader);
    // 插入结构
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(blur);
    wrapper.appendChild(img);
    // 图片加载完成后隐藏毛玻璃层
    img.addEventListener('load', function () {
      blur.classList.add('hide');
    });
    // 如果图片已缓存完成也要隐藏
    if (img.complete) {
      blur.classList.add('hide');
    }
  });
});