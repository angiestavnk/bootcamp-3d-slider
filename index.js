const frameDistance = 100;
let scene, frames;

window.on('load', () => {
  scene = $('#scene');

  frames = $$('.scene-frame');
  setupInitialFramesPosition(frames, frameDistance);

  framesPrescroll();
})


window.on('scroll', () => {
  const scrollPosition = Math.floor(document.documentElement.scrollTop);

  setSceneScrollPosition(scene, scrollPosition);
})