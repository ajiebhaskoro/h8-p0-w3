function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    abjad=animals[0][0]
    console.log("huruf abjad = "+abjad)
    kosong=[]
    hasil=[]
    console.log(animals)
    

    for(i=0;i<animals.length; i++){
        if(animals[i][0]===abjad){
            kosong.push(animals[i])
        } else {            
        }
    }
    hasil.push(kosong)
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]