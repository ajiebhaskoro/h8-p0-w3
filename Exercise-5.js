function palindrome(kata) {
    var balikKata = '';

    for (let i = kata.length - 1; i >= 0; i--) {
        balikKata = balikKata + kata[i];
    }

    if (kata === balikKata){
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('enak')); // false
console.log(palindrome('mamam')); // true
console.log(palindrome('kakak')); // true