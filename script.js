const DomElement = function(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
}

let div;
let p;

this.createElement = function () {
  if(this.selector.startsWith(".")) {
  div = document.createElement('div');
  div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
  div.innerHTML = prompt('Напишите что-нибудь');
  document.body.append(div);
  }
  
  else if (this.selector.startsWith("#")) {
  p = document.createElement('id')
  p.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
  p.innerHTML = prompt('Напишите что-нибудь');
  p.body.append(p);

  }
  else {
    console.log('указано не верно')
  }

}



const newElement = new DomElement(100, 100, "yellow", 25)

newElement.createElement()


