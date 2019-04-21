class IterableClass {
  constructor(){ 
    self.values = ['name', 'age', 'telephone', 'address'];
  }
  [Symbol.iterator](){
    let counter = self.values.length - 1;
      return {
        next() {
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
new IterableClass();