function solution() {
  // Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
  // Whenever you receive the command print, the output should be printed on the console.
  let text = '';

  // our function needs to return an object on which we apply the methods from input

  // removeEnd(n) - remove the last n characters from the string, n is an integer
  // print - print the stored string on the console

  return {

    append(str) {
      // append(string) - append the given string at the end of the internal string
      text += str;
    },

    removeStart(n) {
      // removeStart(n) - remove the first n characters from the string, n is an integer
        // helloagain => loagain
      text = text.slice(n);
    },

    removeEnd(n) {
      // removeEnd(n) - remove the last n characters from the string, n is an integer
      text = text.slice(0, -n);
    },

    print() {
      console.log(text);
    },
  };

  // loa
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
