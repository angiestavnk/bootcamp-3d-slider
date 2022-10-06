const scrollModule = (scene, fullSliderLength) => {
  const OPTIMIZATION_CSS_CLASS = "scene-frame-optimization";
  const TIMER_DELAY = 1000;
  let optimization = false;
  let scrollTimerId = undefined;

  const addSceneFrameOptimization = () => {
    if(!optimization) {
      scene.classList.add(OPTIMIZATION_CSS_CLASS);
      optimization = true;
      console.log('before scroll')
    }
  };

  const removeSceneFrameOptimization = () => {
    clearTimeout(scrollTimerId);
    scrollTimerId = setTimeout(() => {
      optimization = false;
      scene.classList.remove(OPTIMIZATION_CSS_CLASS);
      console.log('After scroll')
    }, TIMER_DELAY)
  }

  const beforeAction = () => {
    addSceneFrameOptimization();
  };

  const afterAction = () => {
    removeSceneFrameOptimization();
  }

  const scrollHandler = () => {
    beforeAction();
    
    const { correctedScrollPosition } = calcScrollValues(fullSliderLength);

    setSceneScrollPosition(scene, correctedScrollPosition);

    afterAction()
  }

  return {
    scrollHandler: scrollHandler
  }
}
