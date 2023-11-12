// Filename: ComplexCode.js
// Description: This code demonstrates a complex and elaborate implementation of a data structure and algorithm

// Class representing a Stack
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to the top of the stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Remove element from the top of the stack
  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    const removed = this.items[this.count];
    delete this.items[this.count];
    return removed;
  }

  // Get the top element of the stack
  peek() {
    return this.items[this.count - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.count === 0;
  }

  // Get the size of the stack
  size() {
    return this.count;
  }

  // Clear the stack
  clear() {
    this.items = [];
    this.count = 0;
  }

  // Print the stack elements
  print() {
    let result = '';
    for (let i = 0; i < this.count; i++) {
      result += this.items[i] + ' ';
    }
    console.log(result.trim());
  }
}

// Main program
const stack = new Stack();
console.log('Empty stack: ');
stack.print();

console.log('Adding elements to stack: ');
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();

console.log('Size of stack: ' + stack.size());
console.log('Top element: ' + stack.peek());

console.log('Removing elements from stack: ');
console.log(stack.pop() + ' removed');
console.log(stack.pop() + ' removed');
stack.print();

console.log('Is stack empty? ' + stack.isEmpty());

stack.clear();
console.log('Stack cleared');
stack.print();