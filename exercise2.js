var inputKata = 'hello world and all of my friend!!! ! ! ';

function balikString(inputKata) {
    var string = '';

    for (var i = inputKata.length - 1; i >= 0; i--) {
        string = string + inputKata[i];
    }
    return string;
}

console.log(balikString(inputKata));