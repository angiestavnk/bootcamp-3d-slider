//Body height => 2601
//Scroll height => 1912

const scrollMaxValue = () => {
  const body = document.body;
  const html = document.documentElement;

  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const windowHeight = window.innerHeight;

  return documentHeight - windowHeight;
};

const getScrollProportion = () => {
  const fullScrolLength = scrollMaxValue();
  const scrollProportion = fullSliderLength / fullScrolLength;

  return scrollProportion
}

const calcScrollValues = (fullSliderLength) => {
  const scrollPosition = Math.floor(document.documentElement.scrollTop);
  const scrollProportion = getScrollProportion(fullSliderLength);
  const correctedScrollPosition = scrollPosition * scrollProportion

  return {
    scrollPosition: scrollPosition,
    scrollProportion: scrollProportion,
    correctedScrollPosition: correctedScrollPosition
  }
}