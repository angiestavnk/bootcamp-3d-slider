window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

window.on = window.addEventListener;

const frameDistance = 100;
let scena, frames;

const setupInitialFramesPosition = () => {
  frames.forEach((frame, frameIndex) => {
    const startFramePosition = -(frameIndex * frameDistance)
    frame.style.setProperty(
      '--start-frame-position',
      `${startFramePosition}px`
    )
  })
}

window.on('load', () => {
  scena = $('scene');

  frames = $$('.scene-frame');
  setupInitialFramesPosition();
})

window.on('scroll', () => {
  const scrollPosition = Math.floor(document.documentElement.scrollTop);
  console.log(`Scroll: ${scrollPosition}`);

  frames.forEach((frame) => {
    frame.style.setProperty(
      '--scroll-position',
      `${scrollPosition}px`
    )
  })
})