import Control from '../common/control';
import { TOYS, TREE } from '../constants/startPage.constants';
export class Header extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const header = new Control(this.node, 'header', 'header', '');
    const headerContainer = new Control(this.node, 'div', 'header__container', '');
    const navBar = new Control(this.node, 'nav', 'header__navbar', '');

    const linkStart = new Control(this.node, 'a', 'header__link start', '');
    const linkToToys = new Control(this.node, 'a', 'header__link active', TOYS);
    const linkToTree = new Control(this.node, 'a', 'header__link', TREE);
    const headerSearch = new Control(
      this.node,
      'div',
      'header__search visible',
      `<input type="search" class="search" autocomplete="off">
      <div class="selected">
        <span>0</span>
      </div>`
    );
    header.node.append(headerContainer.node);
    headerContainer.node.append(navBar.node);
    navBar.node.append(linkStart.node);
    navBar.node.append(linkToToys.node);
    navBar.node.append(linkToTree.node);
    navBar.node.append(headerSearch.node);
    return header;
  }
}

function createHeader(): void {
  const body = document.querySelector<HTMLElement>('app');
  if (body) {
    const header = new Header(body);
    body.prepend(header.node);
  }
}
createHeader();

const start = document.querySelector('.start');
const startPage = document.getElementById('start');
const toysPage = document.getElementById('toys');
start?.addEventListener('click', () => {
  startPage?.classList.remove('hide');
  toysPage?.classList.add('hide');
  start.classList.add('on');
  toys?.classList.remove('on');
});

const toys = document.querySelector('.toys');
toys?.addEventListener('click', () => {
  startPage?.classList.add('hide');
  toysPage?.classList.remove('hide');
  start?.classList.remove('on');
  toys.classList.add('on');
});
