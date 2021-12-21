import data from '../data';
import { createToysContainer } from './toysPage';
const favoriteBtn = document.querySelector<HTMLButtonElement>('.lovely');
if (favoriteBtn)
  favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
    //findFavorite();
    //createToysContainer();
  });

export function findFavorite() {
  const favoriteToys = data;
  for (let i = 0; i < data.length; i++) {
    const favoriteToyAnswer = data[i].favorite;
    const favoriteToy = data[i];
    if (favoriteToyAnswer === true) {
      favoriteToys.push(favoriteToy);
    }
  }
  console.log(favoriteToys);
  return favoriteToys;
}
//findFavorite();

function sortNameAZ() {
  const sortAz = data.sort((a, b) => a.name.localeCompare(b.name));
  return sortAz;
}

function sortNameZA() {
  const sortZa = data.sort((a, b) => b.name.localeCompare(a.name));
  return sortZa;
}
function sortMax() {
  const sortFromMax = data.sort((a, b) => b.year.localeCompare(a.year));
  return sortFromMax;
}
function sortMin() {
  const sortFromMin = data.sort((a, b) => a.year.localeCompare(b.year));
  return sortFromMin;
}
function changeOption() {
  const select = document.querySelector<HTMLSelectElement>('.select');
  if (select) {
    select.addEventListener('change', () => {
      const index = select.selectedIndex;
      if (index === 0) {
        sortNameAZ();
        createToysContainer();
      }
      if (index === 1) {
        sortNameZA();
        createToysContainer();
      }
      if (index === 2) {
        sortMin();
        createToysContainer();
      }
      if (index === 3) {
        sortMax();
        createToysContainer();
      }
    });
  }
}

changeOption();

//TO-DO  filters and filterForm  must get the same argument's value
interface filterForm {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
    maxYear?: string;
    minYear?: string;
};
type Key = keyof filterForm;

//class Data {Array<IDataItem>};
export type IDataItem = {
    num: string;
  name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
 
}
export interface IData {
 items: IDataItem[];
}

let filterForm = {
  num: '9',
  name: 'Колокольчик старинный',
  count: '2',
  year: '1950',
  shape: 'колокольчик',
  color: 'белый',
  size: 'большой',
  favorite: false,
};
//console.log(typeof(data));
const filters = [
  //(_data:IData , _filterForm:filterForm) => (_filterForm.favorite ? _data.filter((obj) => obj.favorite) : data),
  (_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.name.includes(_filterForm.name)),
  (_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.shape.includes(_filterForm.shape)),
  (_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.year.includes(_filterForm.year)),
  (_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.color.includes(_filterForm.color)),
  (_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.size.includes(_filterForm.size)),
  //(_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.year >= _filterForm.minYear && obj.year <= _filterForm.maxYear),
];

const filter = () => {
  let displayedItems = data;
  for (let i = 0; i < filters.length; i++) {
    displayedItems = filters[i](displayedItems, filterForm);
  }
  return displayedItems;
};

console.log(filterForm.color);
