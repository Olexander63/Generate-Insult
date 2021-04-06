let  pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)]
}



// Generate  Insult
let generateRandomInsult = function (){

    let randomBodyParts = [' eye', ' nose' , ' skull' ];
    let randomAdjectives = ['smelly',' depressing', 'stupid'];
    let  randomWords  =  ['fly',' otter' , 'bludgeon' , 'monkey' , 'rat' ];


// Соединяем случайные  строки  в  предложение:

    return ' At you' + pickRandomWord(randomBodyParts) + ' as though ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomWords) + '!!!';
}

console.log(generateRandomInsult())