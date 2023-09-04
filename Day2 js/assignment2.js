// Assignment

/**
 *
 * Use a for loop to call a function multiple times that calculates the square of a number
 * and prints the result.(ask input in prompt and show result in alert).
 *
 */

function sqr_num(num) {
  return num * num;
}
number = prompt("Enter a number:");
for (let i = 0; i <= number; i++) {
  alert(sqr_num(i));
}
