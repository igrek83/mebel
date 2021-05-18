export default class Image {
  constructor(block) {
    this.block = block;
    this.block.addEventListener('mouseover', this._setHover.bind(this));
    this.block.addEventListener('mouseout', this._setHover.bind(this));
  }

  _setHover(event) {
    if (event.target.closest('.about__link')) {
      const element = event.target;
      const arr = element.querySelectorAll('.about__image');
      arr.forEach((item) => {
        item.classList.toggle('is-opened');
      });
    }
  }
}
