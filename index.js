const { throttle, debounce } = throttleDebounce;

const frameDistance = 100;
let scene, frames, fullSliderLength;

window.on('load', () => {
  scene = $('#scene');

  frames = $$('.scene-frame');
  fullSliderLength = frameDistance * (frames.length - 1);
  setupInitialFramesPosition(frames, frameDistance);

  framesPrescroll();

  window.on('scroll', throttle(100, scrollModule(scene, fullSliderLength).scrollHandler))
})
