var createMetrics = function (text) {
    let l_strLowercaseText = text.toLowerCase();
    // l_strLowercaseText = l_strLowercaseText.replace(/[\n\t\r]/g, " ");
    // console.log(l_strLowercaseText);
    let totalLetters = 0;
    let totalNonLetters = 0;
    let totalVowels = 0;
    let totalConsonants = 0;
    let totalWords = 0;
    let uniqueWords = 0;
    let longWords = 0;
    let averageWordLength = 0;
    let wordOccurrences = {};
    var l_objLetters = (/[a-z]/g);
    var l_objVowels = (/[aeiou]/g);
    totalLetters = l_strLowercaseText.match(l_objLetters).length;
    totalNonLetters = l_strLowercaseText.length - totalLetters;
    totalVowels = l_strLowercaseText.match(l_objVowels).length;
    totalConsonants = totalLetters - totalVowels;
    for (var i = 1; i < l_strLowercaseText.length - 1; i++) {
        if (l_strLowercaseText[i].match(/'/) && (l_strLowercaseText[i - 1].match(/[a-z]/)) && (l_strLowercaseText[i + 1].match(/[a-z]/))) {
            l_strLowercaseText = l_strLowercaseText.replace(l_strLowercaseText[i], "");
        }
    }

    var k = 0;
    var words;
    let l_arrWordLengths = [];
    if (totalLetters > 0) {
        for (var i = 0; i < l_strLowercaseText.length; i++) {
            if (!(l_strLowercaseText[i].match(/[a-z]/))) {
                ++totalWords;
                if (k > 0) {
                    l_arrWordLengths.push(k);
                    words = l_strLowercaseText.substring(i - k, i)
                    if (wordOccurrences[words] == undefined) {
                        wordOccurrences[words] = 1;
                        uniqueWords++;
                    }
                    else {
                        wordOccurrences[words] = ++(wordOccurrences[words]);
                    }
                    if (k >= 6)
                        ++longWords;
                    k = 0;
                }
                while ((i < l_strLowercaseText.length) && (!(l_strLowercaseText[i].match(/[a-z]/)))) {
                    ++i;
                };
                i--;
            }
            else {
                ++k;
            }
        }
        if ((l_strLowercaseText[i - 1].match(/[a-z]/))) {
            totalWords++;
            l_arrWordLengths.push(k);
            words = l_strLowercaseText.substring(i - 1 - k, i)
            if (wordOccurrences[words] == undefined) {
                wordOccurrences[words] = 1;
                uniqueWords++;
            }
            else {
                wordOccurrences[words] = ++(wordOccurrences[words]);
                if (wordOccurrences[words] == 2)
                    uniqueWords--;
            }
            if (k >= 6)
                ++longWords;
        }
    }
    // wordOccurrences = JSON.stringify(wordOccurrences);
    var sum = 0;
    for (i = 0; i < l_arrWordLengths.length; i++) sum += l_arrWordLengths[i];
    averageWordLength = sum / (l_arrWordLengths.length);
    let Metrics = {
        "totalLetters": totalLetters,
        "totalNonLetters": totalNonLetters,
        "totalVowels": totalVowels,
        "totalConsonants": totalConsonants,
        "totalWords": totalWords,
        "uniqueWords": uniqueWords,
        "longWords": longWords,
        "averageWordLength": averageWordLength,
        "wordOccurrences": wordOccurrences
    }
    // console.log(JSON.stringify(Metrics));
    return Metrics;
};
module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    createMetrics
};