class First {
  constructor (phrase) {
    this.phrase = phrase
  }


 hello() {
  console.log(this.phrase)
 }
}

class Second extends First {
 hello() {
  super.hello();
console.log("А я наследуемый метод!")

  }

}

let second = new Second('Привет я метод родителя!')

second.hello()



