function result(input) {
    var result = 0, num = input.length;
    input.sort();
 
    if (
        num % 2 === 0
    ) {
        result = (input[num / 2 - 1] + input[num / 2]) / 2;
    } else {
        result = input[(num - 1) / 2];
    }
 
    return result;
}
  
  console.log(result([8,7,7,9,5,4,2,9]));