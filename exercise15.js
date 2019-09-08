function groupAnimals(animals) {
    // you can only write your code here!
    var result = []
    animals.sort()

    var j = 0
    for (var i = 0; i < animals.length; i++) {
        if (result.length === 0) {
            result.push([animals[i]])
        } else if (result[j][0][0] === animals[i][0]) {
            // console.log (abjad[0])
            result[j].push(animals[i])
        } else {
            result.push([animals[i]])
            j++
        }
    }
    return result
}

    // TEST CASES
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]