
/**
* Note: The class, method and parameter have been specified. Please do not modify
*
*
* This function will accept string as parameter and return numbers that represents the string from parameter
* @param words String
* @return Integer
*/
function read_prop(obj, prop) {
    return obj[prop];
}

function wordsToNumber(words) {
    let splitWords = words.split(" ");
    const wordMap = {
        nol: 0,
        satu: 1,
        dua: 2,
        tiga: 3,
        empat: 4,
        lima: 5,
        enam: 6,
        tujuh: 7,
        delapan: 8,
        sembilan: 9,
    };

    let realNumber = 0;
    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i] == "puluh") {
            realNumber *= 10;
        } else {
            realNumber += read_prop(wordMap, splitWords[i]);
        }
    }
    return realNumber;
}

// this program works, but I don't know, It not accepted. I search the code answer after this session.
module.exports = {
    wordsToNumber: wordsToNumber
};