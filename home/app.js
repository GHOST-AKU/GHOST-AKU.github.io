const ghost = document.querySelector('.ghost-button');
const reply = document.querySelector('.ghost-reply');
const messages = ['你好，路过这个宇宙的人。','今天也可以做一点没用但有趣的事。','好奇心，是我的通行证。','嘘——夜间宇宙已开启。','天亮了。继续探索吧。'];
let visits = 0;
ghost.addEventListener('click', () => {
  reply.textContent = messages[visits % messages.length];
  visits += 1;
  document.body.classList.toggle('night', visits % messages.length === 4);
});
const universe = document.querySelector('.universe');
const eyes = document.querySelector('.eyes');
universe.addEventListener('pointermove', event => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = universe.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - .5;
  const y = (event.clientY - rect.top) / rect.height - .5;
  eyes.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
universe.addEventListener('pointerleave', () => { eyes.style.transform = ''; });
