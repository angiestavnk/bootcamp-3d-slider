window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

window.on = window.addEventListener;

const frameDistance = 100;
let scene, frames;

const setupInitialFramesPosition = () => {
  frames.forEach((frame, frameIndex) => {
    const startFramePosition = -(frameIndex * frameDistance)
    frame.style.setProperty(
      '--start-frame-position',
      `${startFramePosition}px`
    )
  })
}

const framesPrescroll = () => {
  setTimeout(() => {
    window.scrollTo({ top: 1 })
  }, 10)
}

window.on('load', () => {
  scene = $('#scene');

  frames = $$('.scene-frame');
  setupInitialFramesPosition();

  framesPrescroll();
})

const setSceneScrollPosition = (scrollPosition) => {
  scene.style.setProperty(
    '--scroll-position',
    `${scrollPosition}px`
  )
}

window.on('scroll', () => {
  const scrollPosition = Math.floor(document.documentElement.scrollTop);

  setSceneScrollPosition(scrollPosition);
})