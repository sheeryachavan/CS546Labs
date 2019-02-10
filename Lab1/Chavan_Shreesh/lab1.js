
const questionOne = function questionOne(arr) {
    try {
        var l_intSum = 0;
        for (var i = 0; i < arr.length; i++) {
            l_intSum = l_intSum + (Math.pow(arr[i], 2));
        }
        return l_intSum;
    } catch (l_objException) {
        return 0;
    }
}

const questionTwo = function questionTwo(num) {
    try {
        var l_functCalculateFib = function (p_intIndex) {
            if (p_intIndex <= 0)
                return 0;
            else if (p_intIndex == 1)
                return 1;
            else
                return l_functCalculateFib(p_intIndex - 1) + l_functCalculateFib(p_intIndex - 2);
        }
        return l_functCalculateFib(num);
    } catch (l_objException) {
        return 0;
    }
}

const questionThree = function questionThree(text) {
    try {
        var l_strVowels = 'aeiou';
        let len = text.length;
        var l_intTotalVowels = 0;
        for (var i = 0; i < text.length; i++) {
            if (l_strVowels.indexOf(text[i]) !== -1)
                l_intTotalVowels++;
        }
        return l_intTotalVowels;
    } catch (l_objException) {
        return 0;
    }
}

const questionFour = function questionFour(num) {
    try {
        var l_intFactorial = 1;
        if (num < 0)
            l_intFactorial = NaN;
        else if (num > 0)
            for (var i = 1; i <= num; i++)
                l_intFactorial = l_intFactorial * i;
        return l_intFactorial;
    } catch (l_objException) {
        return 0;
    }
}



module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};