function add(num) {

  let sum = 0;

  function inner(number) {

    sum += number;
    return inner;
  }

  // parse through string
  inner.toString = () => {

    return sum;
  }

    return inner(num);

}
console.log(add(1).toString());

console.log(add(1)(6)(-3).toString());