// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for sayHello function
describe('sayHello', function() {
  it('should be a defined function', function() {
    expect(typeof sayHello).toBe('function');
  });
  it('should return a string when called', function(){
    expect(typeof sayHello()).toBe("string");
  });
  it('sayHello("Jane") should return "Hello, Jane!"', function(){
    expect(sayHello("Jane")).toBe("Hello, Jane!");
  });
  it('sayHello("Alex") should return "Hello, Alex!"', function(){
    expect(sayHello("Alex")).toBe("Hello, Alex!");
  });
  it('sayHello("Pat") should return "Hello, Pat!"', function(){
    expect(sayHello("Pat")).toBe("Hello, Pat!");
  });
  it('sayHello() should return "Hello, World!', function(){
    expect(sayHello()).toBe("Hello, World!");
  });
  it('sayHello(true) should return "Hello, World!"', function(){
    expect(sayHello(true)).toBe("Hello, World!");
  });
  it('sayHello(false) should return "Hello, World!"', function(){
    expect(sayHello(false)).toBe("Hello, World!");
  });
  it('sayHello(null) should return "Hello, World!"', function(){
    expect(sayHello(null)).toBe("Hello, World!");
  });
  it('sayHello("") should return "Hello, World!"', function(){
    expect(sayHello("")).toBe("Hello, World!");
  });
  it('sayHello(2.3) should return "Hello, World!"', function(){
    expect(sayHello(2.3)).toBe("Hello, World!");
  });
  it('sayHello("5") should return "Hello, World!"', function(){
    expect(sayHello("5")).toBe("Hello, World!");
  });
  it('sayHello(Array()) should return "Hello, World!"', function(){
    expect(sayHello(Array())).toBe("Hello, World!");
  });  
});

//Unit tests for isFive function.
describe('isFive', function(){
  it('should be defined as a function', function(){
    expect(typeof isFive).toBe('function');
  });
  it('should return a boolean', function(){
    expect(typeof isFive()).toBe('boolean');
  });
  it('should return true when passed 5', function(){
    expect(isFive(5)).toBe(true);
  });
  it('should return true when passed "5"', function(){
    expect(isFive("5")).toBe(true);
  });
  it('should return true when passed "five"', function(){
    expect(isFive("five")).toBe(true);
  });
  it('should return true when passed "FiVe"', function(){
    expect(isFive("FiVe")).toBe(true);
  });
  it('should return false when passed 6', function(){
    expect(isFive(6)).toBe(false);
  });
});

//Unit tests for isEven function.
describe('isEven', function(){
  it('should be defined as a function', function(){
    expect(typeof isEven).toBe('function');
  });
  it('should return a boolean', function(){
    expect(typeof isEven()).toBe('boolean');
  });
  it('isEven(2) returns true', function(){
    expect(isEven(2)).toBe(true);
  });
  it('isEven(-4) returns true', function(){
    expect(isEven(-4)).toBe(true);
  });
  it('isEven(3) returns false', function(){
    expect(isEven(3)).toBe(false);
  });
  it('isEven("banana") returns false', function(){
    expect(isEven("banana")).toBe(false);
  });
  it('isEven("8") returns true', function(){
    expect(isEven("8")).toBe(true);
  });
  it('isEven(Infinity) returns false', function(){
    expect(isEven(Infinity)).toBe(false);
  });
  it('isEven(true) returns false', function(){
    expect(isEven(true)).toBe(false);
  });
  it('isEven(false) returns false', function(){
    expect(isEven(false)).toBe(false);
  });
  it('isEven() returns false', function(){
    expect(isEven()).toBe(false);
  });
});

//Unit tests for isVowel.
describe('isVowel', function(){
  it('should be defined as a function', function(){
    expect(typeof isVowel).toBe('function');
  });
  it('should return a boolean', function(){
    expect(typeof isVowel()).toBe('boolean');
  });
  it('isVowel("a") returns true', function(){
    expect(isVowel("a")).toBe(true);
  });
  it('isVowel("A") returns true', function(){
    expect(isVowel("A")).toBe(true);
  });
  it('isVowel("y") returns false', function(){
    expect(isVowel("y")).toBe(false);
  });
  it('isVowel(4) returns false', function(){
    expect(isVowel(4)).toBe(false);
  });
  it('isVowel(true) or isVowel(false) returns false', function(){
    expect(isVowel(true)).toBe(false);
  });
  it('isVowel("banana") returns false', function(){
    expect(isVowel("banana")).toBe(false);
  });
  it('isVowel() returns false', function(){
    expect(isVowel()).toBe(false);
  });
});

//Unit tests for add function.
describe('add', function(){
  it('should be defined as a function', function(){
    expect(typeof add).toBe('function');
  });
  it('add(2,3) returns 5', function(){
    expect(add(2,3)).toBe(5);
  });
})
