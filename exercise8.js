function pasanganTerbesar(num) {
  // you can only write your code here!
  angka = String(num)
  var result = angka[0] + angka[1]
  for (let i  = 0; i < angka.length - 1; i++){
    var newPair  = angka [i+1] + angka[i+2]
    // console.log(result,newPair)
    if (Number(newPair) > Number(result)){
      result = newPair
      // console.log('ya')
  } else {
    result = result
    // console.log('tidak')
  }
}
  return result
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99