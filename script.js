const DomElement = function (selector) {
  this.selector = selector;
  this.height = '300px';
  this.width = '300px';
  this.bg = 'green';
  this.fontSize = '16px';

  let newBlock;

  this.createElement = function() {
    if (this.selector.startsWith(".")) {
      newBlock = document.createElement('div');
      newBlock.className = this.selector.slice(1);
      newBlock.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
      newBlock.innerHTML = prompt('Напишите что-нибудь');
      document.body.append(newBlock);
    }

    else if (this.selector.startsWith("#")) {
      newBlock = document.createElement('p')
      newBlock.id = this.selector.slice(1);
      newBlock.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
      newBlock.innerHTML = prompt('Напишите что-нибудь');
      document.body.append(newBlock);

    }
    else {
      return
    }
};

}



  let newElement = new DomElement("#block")
  newElement.createElement()




