const { throttle, debounce } = throttleDebounce;

const FRAME_DISTANCE = 1000;
let scene, frames, fullSliderLength;

window.on('load', () => {
  scene = $('#scene');

  frames = $$('.scene-frame');
  fullSliderLength = FRAME_DISTANCE * (frames.length - 1);
  setupInitialFramesPosition(frames, FRAME_DISTANCE);

  framesPrescroll();

  window.on('scroll', throttle(100, scrollModule(scene, frames, fullSliderLength).scrollHandler))
})
