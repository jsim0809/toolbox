// Given a string containing the characters ()[]{}, determine if the input string is 'valid.'
// A string is valid if brackets are closed, and in the right order.
// The empty string is valid.

// I: string
// O: boolean
// C: string is only going to contain these 6 characters: ()[]{}
// E: empty string = valid

// First attempt: In-place implementation
// Iterate through the string, character by character.

// When I encounter a closing bracket, I check the immediately preceding index (current index - 1)
// If it is an open bracket of matching type, I erase both of them.
// If not, I return false.
// When I reach the end of the string, return true.

// This completes in O(n) time, O(1) space.
// This was a good idea, but this is not possible with JS strings -- they are immutable!

// Instead...

// Second attempt: Stack implementation

// Go through the string, keeping track of the number of open parens of each type (in a stack)

// When I encounter a closing brace, I attempt to close an open brace.
// If the top of the stack (FILO) is of a matching type, I successfully pop off the stack
// If not, return false.
// When I reach the end of the string, I should have an empty stack. Of else, return false.

// O(n) time, O(n) space

const validParentheses = (input) => {
  let stack = [];

  for (let i = 0; i < input.length; i += 1) {
    switch (input[i]) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (input[i] !== stack.pop()) {
          return false;
        }
    }
  }
  
  return !stack.length;
}

// Test cases

console.log(validParentheses(''), 'should be true');
console.log(validParentheses('()'), 'should be true');
console.log(validParentheses('([])'), 'should be true');
console.log(validParentheses('([)]'), 'should be false');
console.log(validParentheses('(((({{{'), 'should be false');
console.log(validParentheses('([][])[{}{}]{[]()}'), 'should be true');
