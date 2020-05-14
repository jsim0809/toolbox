// Design a stack with increment operation

// CustomStack(maxSize)
// initializes a max size for the stack
// stack does nothing when it reaches the max size

// push(int) method, takes integer x (if max size not met).
// pop(), returns top of stack, of -1 if stack is empty.
// inc(k, val), increments bottom k elements of stack (or as many as it can) by val.

// push
// I: int
// O: (mutates the CustomStack)
// C: positive int
// E: when stack is full, no effect

// pop
// I: none
// O: outputs the top int (mutates the CustomStack)
// C: 
// E: when stack is empty, returns -1

// inc
// I: int k, int val
// O: none (mutates the bottom k elements of the stack)
// C: int
// E: increments all if k bigger than stack size


// bottom [ 1 2 3 4 5 6 ] top

// // invert

// bottom [ 6 5 4 3 2 1 ] top

// // add k elements back, with +val

// // add the rest of them back

// time complexity = O(n);
// space complexity = O(n);

// first 3 +1

const CustomStack = function(maxSize) {
  return {
    storage: [],
    overflow: [], // extra stack
    size: 0,
    
    push: function(int) {
      if (this.size < maxSize) {
        this.storage[this.size] = int;
        this.size += 1;      
      }
    },
    
    pop: function() {
      if (this.size) {
        this.size -= 1;
        return this.storage[this.size];
      } else {
        return -1;
      }
    },
    
    inc: function(k, val) {
      let overflowIndex = 0;
      while (this.size) {
        this.overflow[overflowIndex] = this.pop();
        overflowIndex += 1;
      }
      while (overflowIndex) {
        this.push(k <= 0 ? this.overflow[overflowIndex-1] : this.overflow[overflowIndex-1] + val);
        k -= 1;
        overflowIndex -= 1;
      }
      // this.overflow = [];
    }
  }
}

// Test cases

let myStack = CustomStack(5);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
console.log('should not contain 6: ', myStack.storage);
// console.log('should return 5: ', myStack.pop());
// console.log('should return 4: ', myStack.pop());
// console.log('should return 3: ', myStack.pop());
// console.log('should return 2: ', myStack.pop());
// console.log('should return 1: ', myStack.pop());
// console.log('should return -1: ', myStack.pop());

myStack.inc(3, 100);
console.log('should be 101, 102, 103, 4, 5: ', myStack.storage);

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

myStack.push(1000);
myStack.push(2000);
myStack.inc(1, 1);
console.log('should be 1001, 2000: ', myStack.storage);
console.log('should be 2000', myStack.pop());