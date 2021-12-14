import noUiSlider, { API } from '../node_modules/nouislider/dist/nouislider';

export default noUiSlider;

interface TargetElement extends HTMLElement {
    noUiSlider: API;
}
export function createSlider (){

const slider = document.getElementById('slider') as TargetElement;
const sliderTwo = document.getElementById('slider-two') as TargetElement;

noUiSlider.create(slider, {
    start: [2, 11], 
    connect: true,
    range: {
        'min': 1,
        'max': 12
    },
   
});


noUiSlider.create(sliderTwo, {
    start: [1950, 2010], 
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    },
    behaviour: 'drag-tap',
    
});
const nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];
console.log(nodes[0]?.innerText);
// Display the slider value and how far the handle moved
// from the left edge of the slider.
slider.noUiSlider?.on('update', function (values:string, handle:number, unencoded:number[], isTap:boolean, positions:number[]) {
    if(nodes!== null && nodes[handle] !== null){
    nodes[handle].innerHTML = values[handle] + ', ' + positions[handle].toFixed(0);
    } else {throw Error};
});

}
createSlider ();