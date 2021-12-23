import noUiSlider, { API } from '../../node_modules/nouislider/dist/nouislider';

export default noUiSlider;
interface TargetElement extends HTMLElement {
  noUiSlider: API;
}
export function createSlider(): void {
  const slider = document.getElementById('slider') as TargetElement;
  const sliderTwo = document.getElementById('slider-two') as TargetElement;

  noUiSlider.create(slider, {
    start: [2, 11],
    connect: true,
    range: {
      min: 1,
      max: 12,
    },
    step: 1,
  });

  const leftOutput = document.querySelector<HTMLOutputElement>('.left');
  const rightOutput = document.querySelector<HTMLOutputElement>('.right');
  slider.noUiSlider.on('update', () => {
    const outputValue = slider.noUiSlider.get() as string[];
    if (outputValue && leftOutput && rightOutput) {
      leftOutput.innerHTML = parseInt(outputValue[0]).toString();
      rightOutput.innerHTML = parseInt(outputValue[1]).toString();
    }
  });

  noUiSlider.create(sliderTwo, {
    start: [1950, 2010],
    connect: true,
    range: {
      min: 1940,
      max: 2020,
    },
    behaviour: 'drag-tap',
    step: 1,
  });
  const startOutput = document.querySelector<HTMLOutputElement>('.forty');
  const endOutput = document.querySelector<HTMLOutputElement>('.end');
  sliderTwo.noUiSlider.on('update', () => {
    const outputValue = sliderTwo.noUiSlider.get() as string[];
    if (outputValue && startOutput && endOutput) {
      startOutput.innerHTML = parseInt(outputValue[0]).toString();
      endOutput.innerHTML = parseInt(outputValue[1]).toString();
    }
  });
}
createSlider();
