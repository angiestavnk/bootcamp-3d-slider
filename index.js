const { throttle, debounce } = throttleDebounce;

const frameDistance = 100;
let scene, frames, fullSliderLength;

const scrollModule = (scene, fullSliderLength) => {
  const optimizationCssClass = "scene-frame-optimization"
  let optimization = false;
  let scrollTimerId = undefined;

  const beforeAction = () => {
    if(!optimization) {
      scene.classList.add(optimizationCssClass);
      optimization = true;
      console.log('before scroll')
    }
  };

  const afterAction = () => {
    clearTimeout(scrollTimerId);
    scrollTimerId = setTimeout(() => {
      optimization = false;
      scene.classList.remove(optimizationCssClass);
      console.log('After scroll')
    }, 1000)
  }

  const scrollHandler = () => {

    beforeAction();
    const scrollPosition = Math.floor(document.documentElement.scrollTop);
    const correctedScrollPosition = proportionalPageScrollPosition(scrollPosition, fullSliderLength);

    setSceneScrollPosition(scene, correctedScrollPosition);

    afterAction()
  }

  return {
    scrollHandler: scrollHandler
  }
}

window.on('load', () => {
  scene = $('#scene');

  frames = $$('.scene-frame');
  fullSliderLength = frameDistance * (frames.length - 1);
  setupInitialFramesPosition(frames, frameDistance);

  framesPrescroll();

  window.on('scroll', throttle(100, scrollModule(scene, fullSliderLength).scrollHandler))
})
