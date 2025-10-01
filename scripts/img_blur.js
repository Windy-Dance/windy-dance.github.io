document.addEventListener('DOMContentLoaded', function () {
  var imgs = document.querySelectorAll('img');
  imgs.forEach(function (img) {
    if (img.parentElement && img.parentElement.classList.contains('img-blur-wrapper')) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'img-blur-wrapper';
    wrapper.style.width = img.width ? img.width + 'px' : img.style.width;
    wrapper.style.height = img.height ? img.height + 'px' : img.style.height;
    var blur = document.createElement('div');
    blur.className = 'img-blur-loading';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(blur);
    wrapper.appendChild(img);
    function hideBlur() {
      blur.classList.add('hide');
      setTimeout(function () {
        blur.style.display = 'none';
      }, 300);
    }
    img.addEventListener('load', hideBlur);
    if (img.complete && img.naturalWidth !== 0) {
      hideBlur();
    }
  });
});