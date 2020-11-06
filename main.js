// gsap.from('.header', {duration: 1, y: -100, ease: 'bounce'});
// gsap.from('.link', {duration: 2, opacity: 0, delay: 1, stagger: 0.5});
// gsap.from('.sidebarleft', {duration: 2, x: -150, delay: 2, ease: 'power.out'});
// gsap.from('.sidebarright', {
//   duration: 1,
//   x: -1600,
//   delay: 2,
//   ease: 'power.out',
// });
// gsap.to('.footer', {duration: 1, delay: 3.5, y: 0, ease: 'elastic'});
// gsap.fromTo(
//   '.button',
//   {opacity: 0, scale: 0, rotation: 720},
//   {duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0}
// );

const timeLine = gsap.timeline({defaults: {duration: 1}});

timeLine
  .from('.header', {y: -100, ease: 'bounce'})
  .from('.link', {opacity: 0, stagger: 0.5})
  .from('.sidebarleft', {duration: 2, x: -150, ease: 'power.out'}, 1)
  .from('.sidebarright', {x: -1600, ease: 'power.out'}, 1)
  .to('.footer', {y: 0, ease: 'elastic'})
  .fromTo(
    '.button',
    {opacity: 0, scale: 0, rotation: 720},
    {opacity: 1, scale: 1, rotation: 0}
  );
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  timeLine.reverse();
  setTimeout(() => {
    timeLine.play();
  }, 7000);
});
