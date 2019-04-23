class IterableClass {
  constructor(...args){
    self.values = args;
  }
  [Symbol.iterator](){
    let counter = self.values.length;
    return {
      next(){
        if (counter) {
          counter--;
          return { done: false, value: self.values[counter] };
        } else {
          return { done: true, value: undefined };
        }
      }
    }
  }
}

new IterableClass('name','age','telephone','address');

