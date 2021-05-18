export default class Popup {
  constructor(block) {
    this.block = block;
    this.block.addEventListener('click', this._setOpen.bind(this));
    document
      .querySelector('.popup__close')
      .addEventListener('click', this._setClose.bind(this));
  }
  _setOpen(event) {
    if (event.target.closest('.direction__button')) {
      document.querySelector('.popup').classList.add('is-opened');
    }
  }
  _setClose() {
    document.querySelector('.popup').classList.remove('is-opened');
  }
}
