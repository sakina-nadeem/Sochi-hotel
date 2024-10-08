/*!
 * Slide nav
 */

$('.slideNav').each(function(i) {
  var sideNavTl = anime.timeline({autoplay: false});
  anime.set('.slideNav', {
      translateX: '-100%'
  });
  anime.set('.slideNav .slideNav__item', {
      translateX: '-110%'
  });
anime.set('.slideClose', {
      translateX: '70'
  });
  sideNavTl
.add({
  targets: '.slideOpen',
  duration: 300,
      translateX: '-300',
      opacity: 0,
      easing: 'easeInOutQuart'
  })
  .add({
      targets: '.overlay-slideNav',
      opacity: {
          value: 1,
          duration: 500,
          delay: 0
      }, 
      zIndex: {
          value: 1010,
          duration: 1,
          delay: 0
      }
  },'-=300')
  .add({
      targets: '.slideNav',
      translateX: 0,
      duration: 500,
      easing: 'easeInOutQuart'
  },'-=500')
.add({
  targets: '.slideClose',
      translateX: 0,
      opacity: 1,
      rotate: 90,
      easing: 'easeInOutQuart'
  },'-=500')
  .add({
      targets: '.slideNav .slideNav__item',
      duration: 200,
      delay: anime.stagger(60),
      translateX: 0,
      easing: 'easeInOutCirc'
  },'-=1000');

  $('.slideOpen, .slideClose').on('click', function(e) {
      e.preventDefault();
      if (sideNavTl.began) {
          sideNavTl.reverse()
          sideNavTl.completed = false;
      }
      if (sideNavTl.paused) {
          sideNavTl.play()
      }
  });
});

/*var slideOpen = document.querySelector('.slideOpen');
var slideClose = document.querySelector('.slideClose');
var slideCloseOverlay = document.querySelector('.overlay-slideNav');

var tl = new TimelineMax({ paused: true });

$('.slideNav').each(function(i) {
  tl.timeScale(1);
  tl.to('.overlay-slideNav', 0.3, { opacity: 1, zIndex:1035, visibility:"visible" })
  
  .to(slideOpen, 0.5, {
    x: 300,
    opacity: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to('.slideNav', 0.5, {
    x: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to(slideClose, 0.5, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: Power1.easeInOut
  },'-=0.5')

  .staggerFrom('.slideNav__item', 0.2, {
    opacity: 0,
    x: 70,
    ease: Back.easeOut
  },0.06, '-=0.18');

  openMenu = function openMenu() {return tl.play();};
  closeMenu = function closeMenu() {return tl.reverse();};

  slideOpen.addEventListener('click', openMenu, false);
  slideClose.addEventListener('click', closeMenu, false);
  slideCloseOverlay.addEventListener('click', closeMenu, false);
  
});*/
