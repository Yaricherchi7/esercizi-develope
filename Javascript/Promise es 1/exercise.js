const number = 15;
function showNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("number is greater than 10");
    } else {
      reject("error: number is NOT greater then 10");
    }
  });
}
showNumber(number)
  .then((num) => {
    console.log(num);
  })
  .catch(e => {
    console.log(e);
  });
