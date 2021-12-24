//import Control from '../common/control';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
console.log(treeItem);
const mainTree = document.querySelector<HTMLDivElement>('.main-tree__containe');
if (treeItem !== null && mainTree !== null) {
  for (let i = 0; i < treeItem.length; i++) {
    treeItem[i].addEventListener('click', () => {
      mainTree.appendChild(img 'url(`../ assets / tree /${i}.png)`';)
    });
  }
}
