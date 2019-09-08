function angkaPalindrome(num) {
  // you can only write your code here!
  if (num < 9) {
    return num + 1
  } else {
    var balik = ''
    while (true){
      var angka = String(num)
      balik = angka.split('').reverse().join('')
      if (num === Number(balik)){
        return num
      }
      num++
    }
}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001