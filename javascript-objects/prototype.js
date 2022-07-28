const myObject = {
    city: 'Madrid',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }
  
  myObject.greet(); // Greetings from Madrid

  console.log(myObject.toString()) // "[object Object]"
  console.log(Object.getPrototypeOf(myObject)) // Object { }

  const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function() {
  console.log('something else!')
};

myDate.getYear(); // 'something else!'


const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype);
  console.log(Person);
  console.log(personPrototype);
  console.log('Object.assign(Person.prototype, personPrototype);',Object.assign(Person.prototype, personPrototype))
  