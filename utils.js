window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

window.on = window.addEventListener;

const setSceneScrollPosition = (scene, scrollPosition) => {
  scene.style.setProperty(
    '--scroll-position',
    `${scrollPosition}px`
  )
}

const framesPrescroll = () => {
  setTimeout(() => {
    window.scrollTo({ top: 1 })
  }, 10)
}

const setupInitialFramesPosition = (frames, frameDistance) => {
  frames.forEach((frame, frameIndex) => {
    const startFramePosition = -(frameIndex * frameDistance)
    frame.style.setProperty(
      '--start-frame-position',
      `${startFramePosition}px`
    )
  })
}