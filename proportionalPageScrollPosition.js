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

const proportionalPageScrollPosition = (currentScrollPosition, fullSliderLength) => {
  const fullScrolLength = scrollMaxValue();
  const scrollProportion = fullSliderLength / fullScrolLength
  const correctedScrollPosition = currentScrollPosition * scrollProportion

  return correctedScrollPosition
}