function findMax(numbers) {
  if (numbers.length === 0) {
    return "The array is empty.";
  }

  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

var numbers = [10, 5, 8, 12, 3];
var maxNumber = findMax(numbers);

if (typeof maxNumber === "number") {
  console.log("The maximum number in the array is: " + maxNumber);
} else {
  console.log(maxNumber);
}