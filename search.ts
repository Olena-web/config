import data from '../data';
const searchToy = document.querySelector<HTMLInputElement>('search');
let input: string, search, pr, result, result_arr: Array<string>;

if (searchToy !== null) input = searchToy.value;
searchToy?.addEventListener('change', () => {
  console.log(input);
});
//получаем значение из поля в html
// function FindOnPage() {
//   search = '/' + input + '/g'; //делаем из строки регуярное выражение
//   pr = data[0].name; //
//   result = pr.match(/>(.*?)</g); //отсекаем все теги и получаем только текст
//   result_arr = []; //в этом массиве будем хранить результат работы (подсветку)
//   console.log(input);
//console.log(result);
//console.log(result_arr);
//}
//setTimeout(func, 1000); //ждем подгрузки Jsona и выполняем

//FindOnPage();
