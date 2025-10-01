document.querySelectorAll('.index-card').forEach(card => {
  // 自动插入水滴元素
  let ripple = card.querySelector('.ripple');
  if (!ripple) {
    ripple = document.createElement('span');
    ripple.className = 'ripple';
    card.appendChild(ripple);
  }

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    // 主水滴跟随鼠标
    ripple.style.left = (e.clientX - rect.left - ripple.offsetWidth/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - ripple.offsetHeight/2) + 'px';
    ripple.style.opacity = '1';
    card.classList.add('ripple-active');

    // 生成尾迹水滴
    const trail = document.createElement('span');
    trail.className = 'ripple-trail';
    trail.style.left = (e.clientX - rect.left - 16) + 'px';
    trail.style.top = (e.clientY - rect.top - 16) + 'px';
    card.appendChild(trail);
    setTimeout(() => {
      trail.remove();
    }, 1200);
  });

  card.addEventListener('mouseleave', () => {
    ripple.style.opacity = '0';
    card.classList.remove('ripple-active');
  });
});