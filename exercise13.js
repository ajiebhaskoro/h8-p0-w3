function targetTerdekat(arr) {
  // you can only write your code here!
  var posO = arr.indexOf('o')
  // console.log (posO)

  var posX = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'x'){
      posX.push(i)
    }
  }
  // console.log(posX)

  var jarakAll = []
  for (let j = 0; j < posX.length; j++){
    var jarak = Math.abs(posX[j] - posO)
    jarakAll.push(jarak)
  }
  // console.log(jarakAll))

  var result = jarakAll[0]

  for (let k = 0; k < jarakAll.length; k++){
    if (result > jarakAll[k]){
      result = jarakAll[k]
    }
  }

  if (posX.length === 0){
    return 0
  } else {
    return result
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2